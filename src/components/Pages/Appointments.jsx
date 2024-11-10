import BookingService from "../Utilities/BookingService";

export default function Appointments() {
  return (
    <>
      <section className="page-appointment">
        <div className="wrapper">
          <h1 className="ta-cen ">
            Schedule an appointment with <br />
            <span className="lg text-accent">The Meticulous Manicurist</span>
          </h1>

          <section className="margin-bs-2 grid onehalf-one-col gap-1">
            <div>
              <p>
                Welcome to my scheduling page. My passion is to help people and
                give them the best pedicure service and information they need to
                meet their foot care goals. I look forward to meeting you and
                helping you with your foot care needs!
              </p>
              <p className="margin-bs-1">
                <span className="bold">Pedicure Service Deposit:</span> Choose
                any time to fill out your client in-take form and pay your
                deposit. Click Register for an Account on the confirmation page.{" "}
                <span className="underline">Deposits are non-refundable.</span>
              </p>
              <p className="margin-bs-1">
                {" "}
                I will contact you after I review your form with a link to book
                your appointment. You will login to your account and book your
                appointment. Additional instructions are on the form.
              </p>
            </div>
            <div>
              <img
                src="/images/lori-halloway.webp"
                alt=""
                className="br-default"
              />
            </div>
          </section>

          <section className="margin-bs-2 grid-booking-wrapper">
            <BookingService
              bookingTitle={
                "Pedicure Deposit<br/> <span class='unbold'>(Required for Booking)</span>"
              }
              timeAndPrice={"5 minutes @ $50.00"}
              serviceName="Pedicure Services:"
              children={
                <>
                  <p className="margin-bs-1half">
                    Book ANY 5-minute Deposit Slot. This is NOT your appointment
                    date. The deposit is applied to the the overall cost of
                    whichever pedicure service we deem as appropriate for your
                    feet.
                  </p>
                  <p className="margin-bs-half">
                    After I review your New Pedicure Client form, I will text
                    you a link to with my availability options to book your
                    actual pedicure service where you will pay the remaining
                    balance of the service. The deposit is{" "}
                    <span className="underline">non-refundable</span> and
                    applied toward your service.
                  </p>
                </>
              }
              innerChildren={
                <>
                  <ul className="margin-bs-quarter">
                    <li>Regular Pedicure $75</li>
                    <li>Customized Pedicure $90</li>
                    <li>Specialized Pedicure $115</li>
                  </ul>

                  <p className="margin-bs-1">
                    <p className="lg bold">Appointment Location:</p>

                    <address className="margin-bs-quarter">
                      Premier Wellness Center & Aglow Med Spa
                      <br /> 42211 N 41st Dr a109
                      <br />
                      Phoenix, AZ 85068
                    </address>
                  </p>
                </>
              }
            />
            <BookingService
              bookingTitle={"Virtual Consulation"}
              timeAndPrice={"15 minutes @ $30.00"}
              children={
                <>
                  <p className="margin-bs-1half">
                    I look forward to assisting you with your foot care
                    questions, business questions, troubleshooting, and finding
                    a solution for any issue you are having.
                  </p>
                  <p className="margin-bs-half">
                    Be prepared with your questions. Please take notes as email
                    follow-ups or additional questions will require additional
                    payment. Have photos, if necessary ready to save time.
                  </p>
                  <p className="margin-bs-half">
                    Calls will end at 15 min. You can schedule additional time,
                    if available, or schedule on a different day. Missed
                    appointments will not be rescheduled for any reason.
                  </p>
                  <p className="margin-bs-half">
                    When you go to schedule, you will see a drop-down menu
                    titled “Set your time zone to continue”. By setting your
                    time zone, you will see my available appointments in your
                    time zone. Please sign up for a Zoom account to be invited
                    to the meeting
                  </p>
                </>
              }
            />
            <BookingService
              bookingTitle={"One-on-One Virtual Custom Training"}
              timeAndPrice={"1 hour @ $100.00"}
              children={
                <p className="margin-bs-1half">
                  I can help you with any business skills, techniques, and
                  troubleshooting. You will have the opportunity to email me a
                  list of what you would like help with so I can prepare for our
                  time.
                </p>
              }
            />
            <BookingService
              bookingTitle={"Email Consultation"}
              timeAndPrice={"30 minutes @ $30.00"}
              children={
                <>
                  <p className="margin-bs-1half">
                    As much as I would love to answer every email free of
                    charge, the number of emails I receive on a daily basis has
                    made that an unattainable goal. I will be happy to provide
                    an answer for your concerns.
                  </p>
                  <p className="margin-bs-half">
                    All you have to do is schedule an appointment & I will
                    respond to your email. It may take several days for me to
                    get to your email, but rest assured you will hear from me.
                    After you make your purchase, send your email to{" "}
                    <a
                      href="mailto:lori@themeticulousmanicurist.com"
                      className="underline"
                    >
                      lori@themeticulousmanicurist.com
                    </a>{" "}
                    with <span className="bold">"Email Appointment"</span> in
                    the subject line. Please allow a few days for a response.
                    Appointment is not a physical time to meet, but just a way
                    to track your purchase.
                  </p>
                </>
              }
            />
          </section>
        </div>
      </section>
    </>
  );
}
