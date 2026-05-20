import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="bg-[#070c23] text-white py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <Logo tone="light" />
        <div className="flex flex-col gap-3 text-sm">
          <a className="hover:text-white/70" href="#terms">
            Terms & Conditions
          </a>
          <a className="hover:text-white/70" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:text-white/70" href="#contact">
            Contact us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
