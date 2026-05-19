import profileImage from "../assets/Pics.jpg";
import img1 from "../assets/sign.png";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[320px_1fr]">
        <div className="flex items-start justify-center">
          <img
            src={profileImage}
            alt="Founder profile"
            className="h-96 w-64 rounded-3xl border-4 border-[#0c1226] object-cover shadow-[0_16px_30px_rgba(12,18,38,0.18)]"
          />
        </div>
        <div className="space-y-5 text-base text-[#3d4153]">
          <h3 className="font-display text-2xl font-extrabold text-[#0c1226]">
            How this started
          </h3>
          <p>I didn't plan to become a ghostwriter.</p>

          <p>
            I started out writing for Fairblock, a Web3 Project, where I helped
            turn complex topics into clear, simple content.
          </p>
          <p>
            After that, I worked with a ghostwriting agency, writing across
            different voices and styles.
          </p>
          <p>
            And it became clear that builders and creators don't struggle with
            ideas, but with consistency.
          </p>
          <p>
            So I built Founders Pen to help them stay consistent online with
            simple ghostwritten content systems that make posting feel
            effortless instead of forced.
          </p>
          <div className="pt-6">
            <img src={img1} alt="Signature" className="h-32 w-56" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
