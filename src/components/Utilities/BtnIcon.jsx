export default function BtnIcon({
  label,
  btnClass,
  iconWeight = "fas",
  iconSize = "fa-sm",
  iconClass,
}) {
  return (
    <button
      aria-label={label}
      title={label}
      className={`btn-icon btn-primary ${(btnClass ?? "") && ` ${btnClass}`}`}
    >
      <i
        className={`${iconWeight} ${iconSize} ${iconClass}`}
        aria-hidden="true"
      ></i>
    </button>
  );
}
