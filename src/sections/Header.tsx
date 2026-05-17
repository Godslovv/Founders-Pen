import Logo from "../components/Logo"
import { navLinks } from "../constants/content"

type HeaderProps = {
  variant?: "light" | "dark"
}

const Header = ({ variant = "dark" }: HeaderProps) => {
  const textColor = variant === "dark" ? "text-white" : "text-[#0c1226]"

  return (
    <header className="w-full justify-items-center pt-1">
      <div className={`flex w-full max-w-7xl items-center justify-between px-2 py-6 ${textColor}`}>
        <Logo tone={variant === "dark" ? "light" : "dark"} />
        {variant === "dark" ? (
          <>
            <nav className="hidden items-center gap-14 text-sm md:flex">
              {navLinks.map((link) => (
                <a key={link.href} className="hover:opacity-70 text-2xl" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </>
        ) : null}
      </div>
    </header>
  )
}

export default Header
