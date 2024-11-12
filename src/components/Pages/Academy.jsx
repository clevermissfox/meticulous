import AcademyPayment from "../Utilities/AcademyPayment";

export default function Academy() {
  return (
    <section className="page-academy">
      <div className="wrapper">
        <hgroup className="ta-cen">
          <h1>
            <span className="lowercase ls-1 text-accent">
              Meticulous Manicurist
            </span>
            <span className="uppercase lg ls-1 display-block">
              nail academy
            </span>
          </h1>
          <p className="lg lowercase margin-bs-quarter">
            online pedicure & manicure training
          </p>
        </hgroup>
        <div className="margin-bs-1">
          <p>
            Open to Licensed US Nail Technicians, Cosmetologists, Nurses,
            Podiatrists, UK Level 2 Nail Technicians, and ANY other country that
            doesn’t require licensing.
          </p>

          <p className="margin-bs-half lg bold">Start your new career today!</p>
          <a
            href="https://academy.themeticulousmanicurist.com/online-advanced-pedicure-course/"
            className="btn-primary btn-primary__inverted margin-bs-quarter"
          >
            Enroll now
          </a>
          <div className="margin-bs-1">
            <AcademyPayment />
          </div>
        </div>

        <div className="card bg-accent margin-bs-2">
          <h2 className="ta-cen text-neutral-100">
            The Meticulous Manicurist Methods
          </h2>
          <ul className="row fw-wrap margin-bs-1 gap-1">
            <li className="card bg-neutral-100">
              <h3 className=" lowercase">Premium Training</h3>
              <p className="margin-bs-1">
                Unlock the secrets of unparalleled nail technology with our
                step-by-step, tried-and-true techniques. We offer insights that
                promise transformation. Embark on a journey of knowledge,
                finesse, and passion, and emerge with skills that don't just
                impress but resonate!
              </p>
            </li>
            <li className="card bg-neutral-100">
              <h3 className=" lowercase">Online on your time</h3>
              <p className="margin-bs-1">
                Dive into a comprehensive 22-hour learning experience
                meticulously crafted for nail technicians like you. Our courses
                are segmented into digestible, self-paced modules, ensuring you
                easily grasp every nuance. Elevate your expertise, refine your
                touch, and command mastery, all on a schedule that complements
                your rhythm.
              </p>
            </li>
            <li className="card bg-neutral-100">
              <h3 className=" lowercase">Reinforced Learning</h3>
              <p className="margin-bs-1">
                Unlock lifetime access to your chosen course(s), a treasure
                trove you can revisit whenever inspiration strikes or a
                refresher beckons. This evergreen resource ensures your advanced
                skills remain intact and continue to gleam with precision and
                prowess.
              </p>
            </li>
          </ul>
        </div>
        <div className="margin-bs-2">
          <div className="grid two-even-col gap-1">
            <div>
              <h2> Training Courses for Realistic Outcomes</h2>
              <p className="margin-bs-half">
                Join me in building a thriving network of Nail Technicians who
                are passionate about providing exceptional care to their
                clients. Say goodbye to turning clients away and hello to
                meeting the needs of every individual. From Regular Wellness
                Pedicures to Specialized Restorative Pedicures, the techniques I
                teach cover everything in between. With a staggering 313 million
                channel views, it’s evident that the public trusts our
                expertise. Nail technicians trained under the Meticulous
                Manicurist banner are highly sought-after, representing the
                ultimate gold standard of care and assurance.
              </p>
            </div>
            <div>
              <h2>Built on Experience</h2>
              <p className="margin-bs-half">
                Immerse yourself in the world of nail technology and become an
                expert in the field. With years of experience, “The Meticulous
                Manicurist” Lori Halloway offers advanced techniques that are
                innovative and transformative. Whether you’re a beginner or an
                experienced professional, our academy provides personalized
                guidance and expert insights to help you elevate your craft.
                Learn and master the art of pedicures, ensuring every moment
                with a client exudes excellence. These techniques and results
                are sure to impress! Plus, our course respects the National
                Occupational Standards in the UK, making it easy to obtain
                insurance with your certification.
              </p>
            </div>
          </div>
          <a
            href="https://academy.themeticulousmanicurist.com/online-nail-technician-courses/"
            className="btn-primary btn-primary__inverted margin-bs-1 margin-i-auto display-block maxw-fit"
          >
            All Classes
          </a>
        </div>
      </div>
      <div className="margin-bs-2 bg-accent padding-b-1half">
        <div className="wrapper">
          <h2 className="ta-cen">
            All Challenges as a Nail Technician are Solved with our{" "}
            <span className="text-neutral-100">STAR&#8209;NT Course</span>
          </h2>
          <div className="margin-bs-1 card-inner">
            <p>
              Dive deep into offering the care your clients truly need to
              reverse age-related toenail conditions. Break the cycle of “no
              solutions” with proven methods that genuinely work, showcasing
              your commitment to exceptional client care.
            </p>
            <p className="margin-bs-half">
              If you possess a deep-seated compassion for helping people
              overcome toenail conditions, you’re the perfect fit for our
              network. Join us in making a tangible difference in clients’
              lives.
            </p>
            <p className="margin-bs-half">
              Discover the secrets to maintaining a safe and healthy salon
              environment. Learn about proper ventilation, safe tool handling,
              and allergy prevention. Learn proven patron protection and stay in
              your scope of practice.
            </p>
            <p className="margin-bs-half">
              Are you a visual learner eager to bolster your confidence? Our
              course allows you to watch, re-watch, and internalize lessons to
              deliver unparalleled care to your clientele.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="card margin-bs-2 bg-accent text-neutral-100">
          <h2>Meticulous Manicurist Mission Statement</h2>
          <div className="margin-bs-1">
            <p>
              Meticulous Manicurist Mission Statement At the Meticulous
              Manicurist Online Nail Academy, we are dedicated to empowering
              individuals to transform the world of nail care. Led by Lori
              Halloway, a globally recognized leader with 30 years of
              experience, our academy provides premium, transformative education
              that inspires both aspiring and seasoned nail technicians to
              achieve professional excellence. Our mission is to empower our
              students with unparalleled skills and knowledge, enabling them to
              deliver exceptional care and bring hope and comfort to their
              clients. Through our diverse course offerings, from wellness
              pedicures to specialized restorative treatments, we aim to meet
              the diverse needs of our clientele and ensure our graduates are
              highly sought after in the industry. Our academy stands for
              innovation, quality, and the relentless pursuit of excellence in
              nail technology, inspiring our students to not only succeed
              professionally but also make a meaningful impact in the lives of
              others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
