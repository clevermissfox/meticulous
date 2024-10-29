import LinkIcon from "./LinkIcon";

export default function SocialMediaIcons() {
  return (
    <div className="row ai-cen gap-1">
      <LinkIcon
        url="https://www.youtube.com/c/TheMeticulousManicuristNailTutorials"
        label="Meticulous Manicurist Youtube"
        iconWeight="fab"
        iconClass="fa-youtube"
      />
      <LinkIcon
        url="https://www.instagram.com/themeticulousmanicurist/"
        label="Meticulous Manicurist Instagram"
        iconWeight="fab"
        iconClass="fa-instagram"
      />
      <LinkIcon
        url="https://www.tiktok.com/@meticulousmanicurist"
        label="Meticulous Manicurist TikTok"
        iconWeight="fab"
        iconClass="fa-tiktok"
      />
      <LinkIcon
        url="https://www.facebook.com/MeticulousManicurist"
        label="Meticulous Manicurist Facebook"
        iconWeight="fab"
        iconClass="fa-facebook-f"
      />
    </div>
  );
}
