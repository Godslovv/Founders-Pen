import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#070c23] text-white">
      <div className="flex w-full flex-row items-start justify-between px-6 py-8">
        <Logo tone="light" />
        <div className="flex flex-col gap-3 text-sm ">
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
  );
};

export default Footer;
