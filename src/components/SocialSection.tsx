import AnimateOnScroll from "./AnimateOnScroll";
import mockupChat from "@/assets/mockup-chat.png";

const SocialSection = () => {
  return (
    <section className="bg-white text-foreground section-y overflow-hidden">
      <div className="container-page grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
          <AnimateOnScroll>
            <img
              src={mockupChat}
              alt="App Pipol — chat de grupo"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full max-w-[380px] h-auto mockup-shadow"
            />
          </AnimateOnScroll>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <AnimateOnScroll>
            <span className="eyebrow text-muted-foreground">La tribu</span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <h2 className="display-lg mt-6 max-w-[14ch]">No vayas solo. Nunca.</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={160}>
            <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
              Cada plan tiene su chat. Coordiná, hacé vaquita, conocé antes de llegar.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
