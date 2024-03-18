export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
         {children} 
         &copy; NextJs is Great!
      </div>
    )
  }
  