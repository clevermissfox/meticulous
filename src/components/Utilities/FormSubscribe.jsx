import { useId } from "react";

export default function FormSubscribe() {
  const id = useId();
  return (
    <form className="form-subscribe">
      <label htmlFor={`${id}-fname`} className="visually-hidden">
        First Name:
      </label>
      <input id={`${id}-fname`} type="text" placeholder="first name" />

      <label htmlFor={`${id}-lname`} className="visually-hidden">
        Last Name:
      </label>
      <input id={`${id}-lname`} type="text" placeholder="last name" />

      <label htmlFor={`${id}-email`} className="visually-hidden">
        Email Address:
      </label>
      <input id={`${id}-email`} type="email" placeholder="email address" />

      <button type="submit" className="btn-primary">
        Subscribe
      </button>
    </form>
  );
}
