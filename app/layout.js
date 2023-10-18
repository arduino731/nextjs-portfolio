export const metadata = {
  title: 'Freelance Developer • Brian van Vlymen',
  description: 'Personal site and portfolio of freelance developer Brian van Vlymen.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
