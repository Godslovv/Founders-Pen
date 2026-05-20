type LogoProps = {
  tone?: "light" | "dark"
}

const Logo = ({ tone = "light" }: LogoProps) => {
  const color = tone === "light" ? "!text-white" : "text-[#070c23]"

  return (
    <h1
      className={`font-display text-[26px] font-bold tracking-wide ${color}`}
    >
      Founders Pen
    </h1>
  )
}

export default Logo
