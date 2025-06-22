import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./VideoModal.css";

const VideoModal = ({ open, onClose, src, poster, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!open && videoRef.current) {
      // Pause and unload video on close
      try {
        videoRef.current.pause();
        videoRef.current.removeAttribute("src");
        videoRef.current.load();
      } catch (e) {}
    }
    // Cleanup on unmount
    return () => {
      if (videoRef.current) {
        try {
          videoRef.current.pause();
          videoRef.current.removeAttribute("src");
          videoRef.current.load();
        } catch (e) {}
      }
    };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark" aria-label="Close"></i>
        </button>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: 16 }}
        />
        {title && <div className="video-modal-title">{title}</div>}
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
