import React from "react";

const PromoVideo = ({ movieLink }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "transparent"
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${movieLink}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${movieLink}&start=15`}
        title="Background Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "120%",
          height: "120%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      ></iframe>
    </div>
  );
};

export default PromoVideo;
