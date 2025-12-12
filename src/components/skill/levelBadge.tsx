import { SkillLevel } from '@/types/skillLevel.type'
import React from 'react'

export default function LevelBadge({ level }: { level: SkillLevel }) {
  const baseStyle =
    'px-2 py-1 text-xs rounded-full border backdrop-blur-md select-none transition-colors duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,.1)]'

  const lightModeStyle: Record<SkillLevel, string> = {
    Proficient: 'bg-green-500/30 text-white border-green-400/40',
    Intermediate: 'bg-blue-500/30 text-white border-blue-400/40',
    Familiar: 'bg-yellow-500/30 text-white border-yellow-400/40',
  }

  const darkModeStyle: Record<SkillLevel, string> = {
    Proficient:
      'dark:bg-green-400/30 dark:border-green-300/40 dark:text-green-100',
    Intermediate:
      'dark:bg-blue-400/20 dark:border-blue-300/30 dark:text-blue-100',
    Familiar:
      'dark:bg-yellow-400/20 dark:border-yellow-300/30 dark:text-yellow-100',
  }

  return (
    <span
      className={`${baseStyle} ${lightModeStyle[level]} ${darkModeStyle[level]}`}
    >
      {level}
    </span>
  )
}
