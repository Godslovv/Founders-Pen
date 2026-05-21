import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#070c23] text-white">
      <div className="mx-auto flex w-full md:max-w-6xl flex-col gap-12 px-6 pb-64 pt-5 md:pb-80 md:pt-16 items-center text-center">
        <div className="flex flex-col gap-6 md:max-w-5xl max-w-4xl">
          <h1 className="font-display text-[36px] font-semibold leading-tight !text-white">
            Ghostwriting for builders and creators who want to stay consistent
            online
          </h1>
          <div className="marquee">
            <div className="marquee__track">
              <p className="marquee__item hidden md:block text-base text-white text-[18px]">
                Done-for-you Twitter & LinkedIn Content, delivered in batches
              </p>
            </div>
          </div>

          <p className="md:hidden text-base text-white text-[18px]">
            Done-for-you Twitter & LinkedIn Content, delivered in batches
          </p>
          <div>
            <Button href="https://tally.so/r/68rbvA">Book a call</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full -mb-px h-[180px] sm:h-[220px] md:h-[280px]">
        <svg
          className="block h-full w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96C360 110 1080 110 1440 96V120H0V96Z""
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
