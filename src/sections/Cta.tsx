import Button from "../components/Button"

const Cta = () => {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#0c1226]">Ready to stay consistent?</h2>
        <Button href="https://tally.so/r/68rbvA">Book a call</Button>
      </div>
    </section>
  )
}

export default Cta
