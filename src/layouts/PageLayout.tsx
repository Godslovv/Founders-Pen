import type { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../sections/Header"

type PageLayoutProps = {
  children: ReactNode
  variant?: "light" | "dark"
}

const PageLayout = ({ children, variant = "light" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen ${variant === "dark" ? "bg-[#0b1020]" : "bg-white"}`}>
      <Header variant={variant} />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout
