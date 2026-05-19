import SectionHeading from "../components/SectionHeading"
import testimonialsVideo from "../assets/Client Testimonials.mp4"

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <SectionHeading title="What Clients Are Saying" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="overflow-hidden rounded-[28px]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={testimonialsVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
