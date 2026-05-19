import { motion } from "framer-motion"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#070c23] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-14 md:pb-32 md:pt-16 items-center text-center">
        <div className="flex flex-col gap-6 md:max-w-5xl max-w-sm">
          <h1 className="text-[36px] font-semibold leading-tight !text-white">
            Ghostwriting for builders and creators who want to stay consistent online
          </h1>
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: "-100%" }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              <p className="text-base text-white text-[18px] mr-8">
                Done For You Twitter & LinkedIn Content, delivered in Batches
              </p>
              <p className="text-base text-white text-[18px]">
                Done For You Twitter & LinkedIn Content, delivered in Batches
              </p>
            </motion.div>
          </div>
          <div>
          <Button href="https://tally.so/r/68rbvA">Book a call</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-white">
        <svg
          className="block h-[120px] w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
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
