export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[oklch(0.1_0.02_250)] text-white">
      {children}
    </div>
  )
}
