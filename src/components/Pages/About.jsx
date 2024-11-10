import Slideshow from "../Utilities/Slideshow";

export default function About() {
  return (
    <section className="page-about">
      <div className="wrapper">
        <h1 className="visually-hidden">About the Meticulous Manicurist</h1>
        <h2>
          From nearly having to end my career, to&shy;
          <span className="text-accent "> changing the nail industry.</span>
        </h2>
        <div>
          <p className="margin-bs-1">
            After my cervical spinal fusion in 2014, I feared I would have to
            retire from my career as a nail technician. I decided that if I
            wasn’t able to work, I would live vicariously through others by
            sharing my knowledge so they could provide the same quality services
            to others.
          </p>
          <p className="margin-bs-1">
            To make this happen, I created a YouTube channel known as{" "}
            <a
              href="https://www.youtube.com/channel/UC8O6B9XeAoG10cKUdYGC3YQ"
              target="_blank"
              className="text-accent"
            >
              The Meticulous Manicurist Nail Tutorials
            </a>
            . With it, I was able to create videos and share my decades of
            pedicure and manicure knowledge with the world.
          </p>
          <p className="margin-bs-1">
            As my channel began to grow, I simultaneously put energy into
            developing a hand rest for nails in hopes it would save my career.
            After building the hand rest in my garage, various modifications,
            patent prep + submission, I finally received my USPTO patent on{" "}
            <a
              href="https://theergolift.com/"
              target="_blank"
              className="text-accent"
            >
              The Ergo Lift
            </a>
            , which went on to save my career.
          </p>
          <p className="margin-bs-1">
            I support the education, growth, and collaboration of nail
            technicians and nail lovers all over the world through tutorials. I
            hope to enrich perception and attitudes to create connections
            between nail tech and clients, by teaching there is more to this
            industry than just doing nails.
          </p>
        </div>
        <section className="margin-bs-2">
          <Slideshow />
        </section>
      </div>
    </section>
  );
}
