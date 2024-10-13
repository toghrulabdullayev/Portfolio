import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // shows the loading progress of a three.js model
  const { progress } = useProgress();

  // to render jsx in Canvas it should be wrapped with an Html component from drei
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
