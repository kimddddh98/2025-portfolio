'use client'

import { useEffect, useState } from 'react'
import { setCookie } from 'cookies-next'
import styles from '@/styles/navBar.module.scss'
import Image from 'next/image'
const ThemeButton = ({ theme }: { theme?: string }) => {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(() => {
    if (!!theme) {
      return theme === 'dark'
    }

    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return theme === 'dark'
  })

  const toggleTheme = (mode: 'dark' | 'light') => {
    setDark(mode === 'dark')
    setCookie('theme', mode, { maxAge: 31536000 })
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted && !theme) return null

  return (
    <div className="bg-ap-btn-light dark:bg-ap-btn-dark fixed right-5 bottom-5 z-10 flex gap-1 rounded-full px-2 py-1 text-white opacity-90 backdrop-blur-lg">
      <button
        className={`${styles.themeButton} ${!dark ? styles.themeButtonSelected : ''}`}
        onClick={() => toggleTheme('light')}
      >
        <Image
          className=""
          src="/light-mode-icon.svg"
          alt="light-mode Icon"
          width={20}
          height={20}
        />
      </button>
      <button
        className={`${styles.themeButton} ${dark ? styles.themeButtonSelected : ''}`}
        onClick={() => toggleTheme('dark')}
      >
        <Image
          className=""
          src="/dark-mode-icon.svg"
          alt="light-mode Icon"
          width={20}
          height={20}
        />
      </button>
    </div>
  )
}

export default ThemeButton
