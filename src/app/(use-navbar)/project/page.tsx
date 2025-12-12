import ProjectWrap from '@/components/project/projectWrap'
import { PROJECTS } from '@/const/projects.const'

const ProjectPage = () => {
  return (
    <div className="flex h-full flex-wrap items-center justify-center gap-10">
      {PROJECTS.map((p, index) => (
        <ProjectWrap
          key={p.id}
          id={p.id}
          title={p.title}
          stack={p.stack}
          ogImage={p.ogImage}
          url={p.url}
        />
      ))}
    </div>
  )
}

export default ProjectPage
