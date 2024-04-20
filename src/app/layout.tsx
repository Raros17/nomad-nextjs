import "../styles/global.css"
import Navigation from "../components/navigation";
import { Oswald} from "next/font/google";



const oswald = Oswald({
  weight:['300','500','700'],
  subsets:['latin']
})


export const metadata = {
  title:{
    template:"%s | Next Movies",
    default:"Next JS APP"
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
      <body className={oswald.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
