import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#070c23] text-white">
      <div className="mx-auto flex w-full md:max-w-6xl flex-col gap-12 px-6 items-center text-center justify-center min-h-screen">
        <div className="flex flex-col gap-10 md:max-w-5xl max-w-4xl">
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
   <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white"></div>
    </section>
  );
};

export default Hero;
