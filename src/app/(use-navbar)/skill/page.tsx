'use client'

import LevelBadge from '@/components/skill/levelBadge'
import { SkillLevel } from '@/types/skillLevel.type'
import React from 'react'

const SkillItem = ({ name, level }: { name: string; level: SkillLevel }) => (
  <div className="flex items-center justify-between py-1">
    <span className="text-sm">{name}</span>
    <LevelBadge level={level} />
  </div>
)

// 스킬 카테고리 박스
const SkillCard = ({
  title,
  skills,
}: {
  title: string
  skills: { name: string; level: SkillLevel }[]
}) => (
  <div className="bg-background/10 shadow-background/10 flex flex-col gap-3 rounded-2xl border border-white/60 p-5 text-white shadow-lg backdrop-blur-xl dark:bg-white/5">
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>

    <div className="flex flex-col gap-1">
      {skills.map((skill, i) => (
        <SkillItem key={i} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
)

// 전체 스킬 페이지
export default function SkillPage() {
  return (
    <div className="flex h-full items-center justify-center gap-10">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        {/* Markup */}
        <SkillCard
          title="Markup"
          skills={[
            { name: 'HTML5', level: 'Intermediate' },
            { name: 'CSS3', level: 'Intermediate' },
            { name: 'SCSS / Sass', level: 'Proficient' },
            { name: 'TailwindCSS', level: 'Intermediate' },
            { name: 'Responsive Design', level: 'Intermediate' },
          ]}
        />

        {/* Frontend Framework */}
        <SkillCard
          title="Frontend Framework"
          skills={[
            { name: 'React', level: 'Intermediate' },
            { name: 'Next.js', level: 'Proficient' },
            { name: 'TypeScript', level: 'Proficient' },
            { name: 'React Native', level: 'Proficient' },
            { name: 'Expo', level: 'Familiar' },
          ]}
        />

        {/* State Management */}
        <SkillCard
          title="State Management"
          skills={[
            { name: 'Zustand', level: 'Intermediate' },
            { name: 'React Query', level: 'Proficient' },
            { name: 'Redux Toolkit', level: 'Familiar' },
          ]}
        />

        {/* Backend / DB */}
        <SkillCard
          title="Backend / Database"
          skills={[
            { name: 'Node.js', level: 'Proficient' },
            { name: 'NestJS', level: 'Familiar' },
            { name: 'SQLite', level: 'Proficient' },
            { name: 'PostgreSQL', level: 'Familiar' },
            { name: 'Drizzle ORM', level: 'Proficient' },
            { name: 'Firebase', level: 'Familiar' },
          ]}
        />

        {/* Tools */}
        <SkillCard
          title="Tools"
          skills={[
            { name: 'Git / GitHub', level: 'Proficient' },
            { name: 'Vercel', level: 'Proficient' },
            { name: 'Expo EAS', level: 'Proficient' },
            { name: 'Jira / Notion', level: 'Familiar' },
          ]}
        />
      </div>
    </div>
  )
}
