import { ProjectCardType } from '@/const/projects.const'
import styles from '@/styles/project.module.scss'
import Link from 'next/link'

export default function ProjectWrap({
  id,
  title,
  stack,
  ogImage,
  url,
}: ProjectCardType) {
  return (
    <Link
      href={`/project/${id}`}
      className={`${styles.projectWrap} border border-white/50 dark:border-black/20`}
      style={{
        backgroundImage: `linear-gradient( var(--project-card-gradient), var(--project-card-gradient)),url(${ogImage})`,
      }}
    >
      <div className="flex min-h-28 flex-1 flex-col self-end rounded-2xl bg-black/50 px-4 py-2 shadow-lg dark:bg-black/30">
        <h3 className="text-lg font-medium text-white drop-shadow">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-black/40 px-2 py-0.5 text-[14px] text-white/80 backdrop-blur-md dark:bg-black/20"
            >
              {tech}
            </span>
          ))}
          {stack.length > 4 && (
            <span className="rounded-md bg-black/40 px-2 py-0.5 text-[14px] text-white/80 backdrop-blur-md dark:bg-black/20">
              More +
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
