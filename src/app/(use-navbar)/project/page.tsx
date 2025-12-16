import ProjectWrap from '@/components/project/projectWrap'
import { PROJECTS } from '@/const/projects.const'

const ProjectPage = () => {
  return (
    <div className="flex h-full justify-center">
      <div className="grid h-full w-full max-w-7xl grid-cols-1 content-center items-center gap-16 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  )
}

export default ProjectPage
