import Navigation from "../components/navigation"

export const metadata = {
  title:{
    templete:"%s | Next Movies",
    default:"Next "

  },
  description: 'Best movie of best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
