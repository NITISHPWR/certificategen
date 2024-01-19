import React, { useState } from "react";
import qrImage from "./images/qr.png";
import Draggable from "react-draggable";

export default function Qr(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (props.onLoad) {
      props.onLoad();
    }
  };

  const handleDrag = (e, data) => {
    if (props.onDrag) {
      props.onDrag({ x: data.x, y: data.y });
    }
  };

  return (
    <Draggable onDrag={handleDrag}>
      <div style={{ position: "absolute", top: "0px", left: "0px" }}>
        <div>
          <img
            src={qrImage}
            alt="QR Code"
            onLoad={handleImageLoad}
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      </div>
    </Draggable>
  );
}
