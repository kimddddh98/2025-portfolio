type ProjectDetailParams = {
  projectId: string
}

export default function ProjectDetailPage({
  params,
}: {
  params: ProjectDetailParams
}) {
  return (
    <main className="p-8">
      <h1>Detail {params.projectId}</h1>
      {/* 실제 상세 콘텐츠 */}
    </main>
  )
}
