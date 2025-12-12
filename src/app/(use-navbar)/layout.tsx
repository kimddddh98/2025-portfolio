import NavBar from '@/components/common/navBar'
import PageFrame from '@/components/common/pageFrame'

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <NavBar />
      <PageFrame>{children}</PageFrame>
    </div>
  )
}
