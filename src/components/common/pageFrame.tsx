'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import layoutStyles from '@/styles/layout.module.scss'
import { PAGES } from '@/const/router.const'

const pages = PAGES
export default function PageFrame({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const isScrolling = useRef(false)

  const [animating, setAnimating] = useState(false)
  const [animationDirection, setAnimationDirection] = useState<
    'right' | 'left'
  >('right')

  useLayoutEffect(() => {
    // 페이지 전환 시 애니메이션 트리거
    setAnimating(true)
    const timer = setTimeout(() => setAnimating(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return
      isScrolling.current = true

      const currentIndex = pages.indexOf(pathname)
      let nextIndex = currentIndex

      if (e.deltaY > 0 && currentIndex < pages.length - 1) {
        nextIndex++
        setAnimationDirection('right')
      } else if (e.deltaY < 0 && currentIndex > 0) {
        nextIndex--
        setAnimationDirection('left')
      }

      if (nextIndex !== currentIndex) {
        router.push(pages[nextIndex])
      }

      setTimeout(() => {
        isScrolling.current = false
      }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [pathname])
  return (
    <main
      className={`${layoutStyles.glassFrame} ${layoutStyles.frameContainer} mx-10 my-5 flex-1 overflow-hidden p-1 ${animating ? (animationDirection === 'right' ? layoutStyles.shrinkRight : layoutStyles.shrinkLeft) : ''}`}
    >
      {children}
    </main>
  )
}
