'use client'
import { PAGES } from '@/const/router.const'
import Link from 'next/link'
import { useState, useRef, WheelEvent } from 'react'

const CUBE_TEXT = [
  'React',
  'Frontend',
  'React Native',
  'TypeScript',
  'Markup',
  'UI/UX',
]

export default function Home() {
  const [wheelIndex, setWheelIndex] = useState(0)
  const wheelLockedRef = useRef(false)

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (wheelLockedRef.current) return
    const deltaY = e.deltaY
    wheelLockedRef.current = true
    setTimeout(() => (wheelLockedRef.current = false), 700)

    if (deltaY > 0) {
      if (-wheelIndex === PAGES.length - 1) return
      setWheelIndex(wheelIndex - 1)
    } else {
      if (wheelIndex === 0) return
      setWheelIndex(wheelIndex + 1)
    }
  }
  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center text-4xl text-white dark:text-white/80"
      onWheel={handleWheel}
    >
      <h2 className="nosifer absolute top-0 left-0 p-4 leading-12">
        KIM
        <br />
        DONGHYEON
      </h2>

      <div className="main-nav">
        {/* 큐브 */}

        <div className="main-cube-wrap absolute top-1/2 left-1/2 h-[16vw] w-[16vw] translate-[-8vw] transform-3d">
          {CUBE_TEXT.map((text, i) => (
            <div
              key={text}
              className={`main-cube main-cube-${i + 1} flex items-center justify-center text-7xl font-medium text-white dark:text-black`}
            >
              {text}
              {/* <span className="text-amber-600">{text}</span> */}
            </div>
          ))}
        </div>
        {/* 메인 네비 버튼 */}

        {PAGES.map((p, index) => (
          <Link
            href={p}
            key={p}
            className="circleItem text-foreground rounded-2xl border border-white/10 bg-white/30 text-4xl font-semibold shadow-lg backdrop-blur-xs dark:border-white/10 dark:bg-black/9 dark:text-white dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"
            style={{
              transform: `rotateY(${70 * (index + wheelIndex)}deg) translateZ(30vw) translateY(${10 * (index + wheelIndex)}vw)`,
            }}
          >
            {p.slice(1).toLocaleUpperCase()}
          </Link>
        ))}
      </div>

      <h2 className="nosifer absolute right-0 bottom-0 p-4 leading-12">
        FRONTEND
        <br />
        DEVELOPER
      </h2>
    </div>
  )
}
