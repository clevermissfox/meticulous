export default function BtnIcon({
  onClick = null,
  label,
  btnClass,
  iconWeight = "fas",
  iconSize = "fa-sm",
  iconClass,
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`${(btnClass ?? "") && ` ${btnClass}`}`}
    >
      <i
        className={`${iconWeight} ${iconSize} ${iconClass}`}
        aria-hidden="true"
      ></i>
    </button>
  );
}
