export default function NetworkMap() {
  return (
    <section className="page-network-map">
      <div className="wrapper">
        <h1 className="ta-cen">Meticulous Manicurist Graduates Network Map</h1>
        <div className="map-container margin-bs-1">
          <iframe
            src="https://batchgeo.com/map/3f277265ed229e51a0eeb302dcc28852"
            frameBorder="0"
            width="100%"
            style={{
              border: "1px solid #aaa",
              minHeight: "600px",
              display: "block",
            }}
          ></iframe>
        </div>
        <p className="ta-cen lg ls-1 margin-bs-half">
          <a
            href="https://batchgeo.com/map/3f277265ed229e51a0eeb302dcc28852"
            target="_blank"
          >
            View Meticulous Manicurist Network in a full-screen map
          </a>
        </p>
      </div>
    </section>
  );
}
