export default function Banner({ handleClose }) {
  return (
    <div className="banner padding-i-1 padding-b-half bg-accent text-white">
      <p className="ta-cen xsmall">
        <a href="#">Schedule a virtual appointment with me</a>
      </p>
      <button
        btn-close=""
        aria-label="Close banner"
        className="padding-b-quarter padding-i-half"
        onClick={handleClose}
      >
        <i className="fa fa-xmark fa-sm" aria-hidden="true"></i>
      </button>
    </div>
  );
}
