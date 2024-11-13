import { useEffect, useState } from "react";
import axios from "axios";

export default function Tutorials() {
  const key = "AIzaSyB0yFd4uESFN9RmsIexWcYUOFtqdf85x_Q";
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchVideos = async (pageToken = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: key,
            channelId: "UC8O6B9XeAoG10cKUdYGC3YQ", // The Meticulous Manicurist channel ID
            part: "snippet",
            order: "date",
            maxResults: 12,
            type: "video",
            pageToken: pageToken,
          },
        }
      );

      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const loadMore = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  const getVideoUrl = (videoId) => `https://www.youtube.com/watch?v=${videoId}`;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  function decodeHtmlEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  return (
    <section className="page-tutorials">
      <div className="wrapper">
        <hgroup>
          <h1 className="ta-cen">
            <a
              href="http://www.youtube.com/@meticulousmanicurist"
              target="_blank"
            >
              Meticulous Manicurist Tutorials
            </a>
          </h1>
          <h2 className="ta-cen">New videos every friday</h2>
        </hgroup>
        <ul className="video-grid margin-bs-1">
          {videos.map((video, index) => (
            <li key={`${video.id.videoId}-${index}`} className="video-item">
              <a
                href={getVideoUrl(video.id.videoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="display-block"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="br-default"
                />
                <div className="video-details">
                  <p className="lg margin-bs-half">
                    {decodeHtmlEntities(video.snippet.title)}
                  </p>
                  <p className="small margin-bs-half">
                    {formatDate(video.snippet.publishedAt)}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {nextPageToken && !loading && (
          <button
            onClick={loadMore}
            className="btn-primary btn-primary__styled margin-i-auto margin-bs-1 display-block"
          >
            Load More
          </button>
        )}
        {loading && <p className="ta-cen lg bold margin-bs-1">Loading...</p>}
      </div>

      <a
        href="#"
        className="btn-back-to-top btn-icon btn-primary"
        aria-label="Back to Top"
      >
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </a>
    </section>
  );
}
