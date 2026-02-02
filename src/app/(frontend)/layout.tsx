import './globals.css'

export const metadata = {
  title: 'Pacific Green Technologies',
  description: 'Clean energy solutions for a sustainable future',
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
