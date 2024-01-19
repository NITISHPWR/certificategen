import React from "react";

export default function CertificateTemplateTwoP(props) {
  const { data } = props;
  const logoSize = "100px"; // Adjust the size as needed
  // Create variables to store default values
  const name = "John Doe";
  const course = "Sample Course";
  const startDate = "January 1, 2023";
  const endDate = "December 31, 2023";

  const certificateStyle = {
    backgroundImage: `url(${data.BGimg})`, // Set the background image
    backgroundSize: "cover", // Ensure the background image covers the entire container
    backgroundPosition: "center center", // Center the background image
    backgroundRepeat: "no-repeat", // Prevent background image from repeating
    width: "590px", // Adjust the width as needed
    height: "800px", // Adjust the height as needed
  };

  console.log("Received data prop:", data);
  return (
    <div className="certificate" style={certificateStyle}>
      {/* <img
            src={data.BGimg}
            alt="Certificate Background"
            className="background-img"
          /> */}
      <h1 className="header">{data.Header}</h1>
      <h2 className="sub-header">{data.subHeader}</h2>
      <p
        className="text"
        dangerouslySetInnerHTML={{
          //   __html: data.textt
          //     .replace("<<name>>", `<strong>${data.name}</strong>`)
          //     .replace("<<course>>", `<strong>${data.course}</strong>`)
          //     .replace("<<startDate>>", `<strong>${data.startDate}</strong>`)
          //     .replace("<<endDate>>", `<strong>${data.endDate}</strong>`),

          __html: data.textt
            .replace("<<name>>", `<strong>${name}</strong>`)
            .replace("<<course>>", `<strong>${course}</strong>`)
            .replace("<<startDate>>", `<strong>${startDate}</strong>`)
            .replace("<<endDate>>", `<strong>${endDate}</strong>`),
        }}
      ></p>
      <img
        src={data.Simg1}
        alt="Signature 1"
        className="signature"
        style={{ left: data.s1x, top: data.s1y }}
      />
      <img
        src={data.Simg2}
        alt="Signature 2"
        className="signature"
        style={{ left: data.s2x, top: data.s2y }}
      />
      <img
        src={data.Qimg}
        alt="QR Code"
        className="qr-code"
        style={{ left: data.Qx, top: data.Qy }}
      />
      <img
        src={data.Limg1}
        alt="CDAC Logo"
        className="logo"
        style={{
          left: data.L1x,
          top: data.L1y,
          width: logoSize,
          height: logoSize,
        }}
      />
      <img
        src={data.Limg2}
        alt="CDAC Logo 2"
        className="logo"
        style={{
          left: data.L2x,
          top: data.L2y,
          width: logoSize,
          height: logoSize,
        }}
      />
      {/* <div className="client-id">{data.clientid}</div>
      <div className="template-id">{data.tid}</div> */}
    </div>
  );
}
