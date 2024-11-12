export default function AcademyPayment() {
  return (
    <form className=" form-academy-payment row gap-1">
      <select
        name="location"
        id="location"
        className="padding-is-half"
        required
      >
        <option value="" disabled selected hidden>
          Location
        </option>
        <option value="USA">USA</option>
        <option value="UK CA">UK CA</option>
      </select>
      <select name="payment" id="payment" className="padding-is-half" required>
        <option value="" disabled selected hidden>
          Payment Options
        </option>
        <option value="Purchase Course">Purchase Course</option>
        <option value="Payment Plan">Payment Plan</option>
      </select>
      <button className="btn-primary btn-primary__inverted btn-payment-options">
        continue
      </button>
    </form>
  );
}
