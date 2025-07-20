import Sidebar from '@/components/Sidebar'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-bgPrimary flex h-screen">
      <Sidebar />

      <main className="px-3xl w-full overflow-y-auto">{children}</main>
    </div>
  )
}
