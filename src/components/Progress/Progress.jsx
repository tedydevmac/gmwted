import React, { useEffect, useState } from "react";

export default Progress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.progressBar, width: `${scrollTop}%` }} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "80px",
    top: "84px",
    borderRadius: "80px",
    zIndex: 1,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "green",
    transition: "width 0.25s",
  },
};