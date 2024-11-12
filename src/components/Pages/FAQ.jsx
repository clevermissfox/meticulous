import { useEffect, useState } from "react";

const FAQData = [
  {
    id: 101,
    question: "How can I find a nail tech like you near me?",
    answer:
      "<p>I have an online training program where nail techs from all over the world learn my techniques. You can find these wonderful nail technicians who have completed my program and are meticulous-certified <a href='/network-map' class='bold'>Network Map</a>.</p>",
    isExpanded: false,
  },
  {
    id: 102,
    question: "Can you help me with my problematic toenails?",
    answer:
      "<p>I would be more than happy to help you and I would love to reply to every email & message free of charge, but because of the high amount we receive daily, we have had to prioritize our time and put systems in place to allow us to help more people.</p> <p class='margin-bs-half'> Book a virtual appointment with me for a video or email consultation so we can take care of your toenail or nail issues.</p>",
    isExpanded: false,
  },
  {
    id: 103,
    question: "How can I book an appointment with you?",
    answer:
      "<p>At this time, <strong>I currently am not accepting new clients.</strong></p> <p class='margin-bs-half'>If you still wish to receive some sort of assistance from me, please refer to the two previous questions above.</p>",
    isExpanded: false,
  },
  {
    id: 104,
    question: "Do you ship internationally?",
    answer:
      "<p>We do ship internationally. You can send an email to <a href='mailto:salonretail.thepowderroom@gmail.com' class='bold'>salonretail.thepowderroom@gmail.com</a> with the items you want, your address, your name, and your email address. From there we will discuss quotes. The shipping department will send you an invoice through PayPal.</p><p class='margin-bs-half'> Be aware that international shipping is expensive. We do not control the rate and only charge what they charge us.</p>",
    isExpanded: false,
  },
  {
    id: 105,
    question: "Why don't you wear gloves?",
    answer:
      "<p>I have been a nail technician for nearly 30 years and I have never contracted fungus, virus, or any other condition that was on a client. I have been successful at this by following EPA laws and regulations with cleaning and sanitizing my workstation, tools, and my hands between each client. It is not required by law to wear gloves within most, if not all, states within the U.S.<p/> <p class='margin-bs-half'> I will and have turned away clients that I am not legally able to work on such as bleeding or conditions that need to be addressed by a physician first. Toenail fungus needs a warm, dark, moist environment to grow and survive and you are very unlikely to catch it from touching a nail. I do not wear gloves so I am able to feel the nail, skin, and so on in order to provide the best service for my clients. They can trust my salon is safe. Hear my more in-depth response <a href='https://www.youtube.com/watch?v=NeEnnyzHcpk' class='bold'>here</a>.</p>",
    isExpanded: false,
  },
];

export default function FAQ() {
  const [faqData, setFaqData] = useState(FAQData);

  const toggleFAQ = (id) => {
    setFaqData(
      faqData.map((faq) =>
        faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : faq
      )
    );
  };

  useEffect(() => {
    faqData.forEach((faq) => {
      const panel = document.querySelector(`#section-${faq.id} > div`);
      if (panel) {
        if (faq.isExpanded) {
          panel.removeAttribute("inert");
        } else {
          panel.setAttribute("inert", "");
        }
      }
    });
  }, [faqData]);

  return (
    <section className="page-faq">
      <hgroup>
        <h1 className="ta-cen">Meticulous FAQs</h1>
      </hgroup>
      <ul className="faq-list margin-bs-1 margin-be-2 margin-i-auto">
        {faqData.map((faq) => (
          <li
            className={`faq-item ${faq.isExpanded ? "faq-item__expanded" : ""}`}
            key={faq.id}
          >
            <h2>
              <button
                type="button"
                aria-expanded={faq.isExpanded}
                className="accordion-trigger"
                aria-controls={`section-${faq.id}`}
                id={`accordion-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="accordion-title bg-accent text-neutral-100 row ai-cen jc-sb gap-1">
                  <p className="lg lh-1">{faq.question}</p>
                  <span className="accordion-icon" aria-hidden="true">
                    <i
                      className={`fa ${
                        faq.isExpanded ? "fa-minus" : "fa-plus"
                      } fa-sm`}
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </button>
            </h2>
            <div
              id={`section-${faq.id}`}
              role="region"
              aria-labelledby={`accordion-${faq.id}`}
              className="accordion-panel"
            >
              <div
                inert={!faq.isExpanded}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
