import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#070c23] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-14 md:pb-32 md:pt-16 items-center text-center">
        <div className="flex flex-col gap-6 md:max-w-5xl">
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl !text-white">
            Ghostwriting for builders and creators who want to stay consistent online
          </h1>
          <p className="text-base text-white/70">
            Done-for-you Twitter and LinkedIn content, delivered in batches.
          </p>
          <div>
          <Button href="#contact">Book a call</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 72C240 120 480 120 720 72C960 24 1200 24 1440 72V120H0V72Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
