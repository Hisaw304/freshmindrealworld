import askYourselfData from "../../data/askYourselfData";
import { scrollTestimonials } from "../../data/scrollTestimonials";
import ScrollTestimonials from "./ScrollTestimonials";
import CTAButton from "../shared/CTAButton";

// import the CSS with non-tailwind classes
import "../../c/e106afa7b21e01c4.css";

const AskYourselfSection = () => {
  const { subtitle, title, description, cta, bgImage } = askYourselfData;

  return (
    <section className="w-full py-10 relative my-[80px] z-10">
      {/* Mobile scroll strip */}
      <ScrollTestimonials testimonials={scrollTestimonials} />

      <div
        className="split-info"
        style={{ opacity: 1, transform: "translateY(0px)" }}
      >
        {/* Mobile background */}
        <figure className="lg:hidden w-full absolute top-0 left-0 z-0 opacity-50">
          <img
            alt="Ask Yourself"
            src={bgImage}
            className="w-full opacity-35 lg:opacity-100 relative z-0"
          />
          <div className="top-fade-b pointer-events-none"></div>
          <div className="left-fade-b pointer-events-none"></div>
          <div className="right-fade-b pointer-events-none"></div>
          <div className="bottom-fade-b pointer-events-none"></div>
        </figure>

        {/* Text block */}
        <div className="w-full lg:w-[554px] z-10 relative flex flex-col justify-center items-end px-5">
          <h3 className="max-w-[554px] uppercase lg:px-0 text-center lg:text-left w-full mb-3 switzer">
            {subtitle}
          </h3>
          <h2 className="max-w-[554px] mb-8 px-0 text-center lg:text-left capitalize switzer tracking-[-1px] lg:tracking-[-3px] !text-[40px] lg:!text-[55px]">
            <span className="gradient-text texture-text">{title}</span>
          </h2>
          <p
            className="max-w-[554px] text-left switzer"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex lg:justify-start max-w-[554px] justify-center w-full mt-4">
            <CTAButton href={cta.href} image={cta.image} alt={cta.alt} />
          </div>
        </div>

        {/* Desktop background */}
        <figure className="hidden lg:block relative">
          <img
            alt="Ask Yourself"
            src={bgImage}
            className="w-full opacity-35 lg:opacity-100 relative z-0"
          />
          <div className="top-fade-b pointer-events-none"></div>
          <div className="left-fade-b pointer-events-none"></div>
          <div className="right-fade-b pointer-events-none"></div>
          <div className="bottom-fade-b pointer-events-none"></div>
        </figure>
      </div>
    </section>
  );
};

export default AskYourselfSection;
