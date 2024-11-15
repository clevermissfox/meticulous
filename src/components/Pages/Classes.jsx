const CLASSES_DATA = [
  {
    id: 101,
    img: "https://academy.themeticulousmanicurist.com/wp-content/uploads/2020/03/GMMA.jpeg",
    title:
      "Global Meticulous Manicurist Network- Pedicure Certification Course",
    description:
      "This Course Pack combines 17 Courses valued at over $6,000. Join my Network and learn to provide the type of care people need most and skyrocket your career.",
    price: 997,
    link: "https://academy.themeticulousmanicurist.com/courses/global-meticulous-manicurist-online-training-course/",
  },
  {
    id: 102,
    img: "https://academy.themeticulousmanicurist.com/wp-content/uploads/2020/03/acrylic-nails.jpeg",
    title: "Acrylic Nails Course",
    description:
      "Acrylic Nails techniques to help avoid lifting, rebalance a nail, improve service time, and more!",
    price: 199,
    link: "https://academy.themeticulousmanicurist.com/courses/acrylic-nails-course/",
  },
  {
    id: 103,
    img: "https://academy.themeticulousmanicurist.com/wp-content/uploads/2020/03/electric-file-pedicure.jpeg",
    title: "Electric File Pedicure Online Training Course",
    description:
      "Learn how & when to use an electric file during a pedicure service.",
    price: 199,
    link: "https://academy.themeticulousmanicurist.com/courses/electric-file-online-training-course/",
  },
];
export default function Classes() {
  return (
    <section className="page-classes">
      <div className="wrapper">
        <h1 className="ta-cen">Meticulous Classes</h1>
        <ul className="products-wrapper margin-bs-1">
          {CLASSES_DATA.map((course) => (
            <li className="product-item">
              <a href={course.link}>
                <figure>
                  <img src={course.img} alt="" />
                </figure>
              </a>
              <div className="product-info margin-bs-half">
                <h2>{course.title}</h2>
                <p>${course.price}</p>
                <p className="margin-bs-1">{course.description}</p>

                <a
                  href={course.link}
                  className=" ta-cen btn-primary btn-primary__styled margin-bs-auto"
                >
                  course details
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
