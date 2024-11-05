import FormSubscribe from "../Utilities/FormSubscribe";

export default function Popup({ handlePopupClose, popupRef }) {
  return (
    <dialog className="popup" ref={popupRef}>
      <button aria-label="Close Popup" onClick={handlePopupClose} btn-close="">
        <i className="fa fa-xmark" aria-hidden="true"></i>
      </button>

      <h2 className="uppercase ta-cen text-accent">Get 10% Off Your Order</h2>
      <p className="margin-b-1">
        Sign up for our newsletter today and enjoy an exclusive 10% discount on
        your first order. Stay updated with the latest news, special offers, and
        more! Don't miss out on these savings!
      </p>
      <FormSubscribe />
      <p className="small bold lowercase ta-cen margin-bs-1">
        we respect your privacy
      </p>
    </dialog>
  );
}
