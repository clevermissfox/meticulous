export default function LinkIcon({
  url = "#",
  label,
  linkClass,
  iconWeight = "fas",
  iconSize = "fa-sm",
  iconClass,
}) {
  return (
    <a
      href={url}
      aria-label={label}
      title={label}
      target="_blank"
      className={`btn-icon btn-primary ${(linkClass ?? "") && ` ${linkClass}`}`}
    >
      <i
        className={`${iconWeight} ${iconSize} ${iconClass}`}
        aria-hidden="true"
      ></i>
    </a>
  );
}
