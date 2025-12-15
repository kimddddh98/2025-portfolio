'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import layoutStyles from '@/styles/layout.module.scss'
import { PAGES } from '@/const/router.const'

const pages = PAGES
export default function PageFrame({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const isScrolling = useRef(false)

  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    // 페이지 전환 시 애니메이션 트리거
    setAnimating(true)
    const timer = setTimeout(() => setAnimating(false), 600)
    return () => clearTimeout(timer)
  }, [router])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return
      isScrolling.current = true
      let timer: NodeJS.Timeout

      const currentIndex = pages.indexOf(pathname)
      let nextIndex = currentIndex

      if (e.deltaY > 0 && currentIndex < pages.length - 1) nextIndex++
      else if (e.deltaY < 0 && currentIndex > 0) nextIndex--

      if (nextIndex !== currentIndex) {
        router.push(pages[nextIndex])

        setAnimating(true)
        timer = setTimeout(() => setAnimating(false), 800)
      }

      setTimeout(() => {
        isScrolling.current = false
      }, 800)

      return () => clearTimeout(timer)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [pathname])

  return (
    <main
      className={`${layoutStyles.glassFrame} ${layoutStyles.frameContainer} mx-10 my-5 flex-1 overflow-hidden p-1 ${animating ? layoutStyles.shrink : ''}`}
    >
      {children}
    </main>
  )
}
