export default function Banner({ handleClose }) {
  return (
    <div className="banner padding-i-1 padding-b-half ">
      <p className="ta-cen small">
        <a href="#">Schedule a virtual appointment with me</a>
      </p>
      <button
        btn-close=""
        aria-label="Close banner"
        className="padding-half"
        onClick={handleClose}
      >
        <i className="fa fa-xmark fa-sm" aria-hidden="true"></i>
      </button>
    </div>
  );
}
