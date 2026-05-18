type LogoProps = {
  tone?: "light" | "dark"
}

const Logo = ({ tone = "light" }: LogoProps) => {
  const color = tone === "light" ? "!text-white" : "text-[#0c1226]"

  return (
    <h1
      className={`font-['Cormorant_Garamond'] text-5xl font-bold tracking-wide ${color}`}
    >
      Founders Pen
    </h1>
  )
}

export default Logo
