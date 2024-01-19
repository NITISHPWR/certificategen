import React from "react";
import "./App.css";
import CertificateDesigner from "./components/CertificateDesigner";
import TemplateOne from "./components/TemplateOne";
import TemplateTwo from "./components/TemplateTwo";
import TemplateThree from "./components/TemplateThree";
import Records from "./records.json";
import LandscapeTemplates from "./components/LandscapeTemplates";
// import bgimg from "./components/images/blank-landscape.jpg";
// import signone from "./components/images/signone.png";
// import signtwo from "./components/images/signtwo.png";
// import qr from "./components/images/qr.png";
// import cdaclogo from "./components/images/cdaclogo.png";
// import logo2 from "./components/images/logo2.jpg";
// import logo3 from "./components/images/logo3.png";
//import templates from "./templates.json"; // Import the JSON data
import { template } from "./template";
import { templatesportrait } from "./templatesportrait";
import CertificateTemplateOne from "./components/CertificateTemplateOne";
import CertificateTemplateTwo from "./components/CertificateTemplateTwo";
import CertificateTemplateThree from "./components/CertificateTemplateThree";
import { Route, Routes } from "react-router-dom";
import CertificateTemplateOneP from "./components/CertificateTemplateOneP";
import CertificateTemplateTwoP from "./components/CertificateTemplateTwoP";
import CertificateTemplateThreeP from "./components/CertificateTemplateThreeP";
import BlankCertificate from "./components/BlankCertificate";
import BlankCertificateP from "./components/BlankCertificateP";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import TemplateFour from "./components/TemplateFour";
import TemplateFive from "./components/TemplateFive";
import TemplateSix from "./components/TemplateSix";
import Qr from "./components/Qr";
// const jsonData = {
//   textt:
//     "This is to certify that <<name>> has successfully completed the course <<course>> from <<startDate>> to <<endDate>>",

//   Header: "Certificate of Completion",

//   subHeader: "CDAC-HYDERABAD",

//   BGimg: bgimg, // Use the imported image variable
//   Simg1: signone, // Use the imported image variable
//   s1x: 100,
//   s1y: 400,

//   Simg2: signtwo, // Use the imported image variable
//   s2x: 500,
//   s2y: 400,

//   Qimg: qr, // Use the imported image variable
//   Qx: 325,
//   Qy: 400,

//   Limg1: cdaclogo, // Use the imported image variable
//   L1x: 630,
//   L1y: 90,

//   Limg2: logo2,
//   L2x: 660,
//   L2y: 90,

//   Limg3: logo3,
//   L3x: 550,
//   L3y: 90,

//   clientid: "1001",
//   tid: "t1",
// };

function App() {
  // Assuming templates is your JSON data
  const firstTemplate = template.find((template) => template.tid === "t1");

  const secondTemplate = template.find((template) => template.tid === "t2");
  const thirdTemplate = template.find((template) => template.tid === "t3");

  const firstTemplateP = templatesportrait.find(
    (template) => template.tid === "t1"
  );
  const secondTemplateP = templatesportrait.find(
    (template) => template.tid === "t2"
  );
  const thirdTemplateP = templatesportrait.find(
    (template) => template.tid === "t3"
  );

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/blankcertificate" element={<BlankCertificate />} />
          <Route path="/blankcertificatep" element={<BlankCertificateP />} />
          <Route path="/template-one" element={<TemplateOne />} />
          <Route path="/template-two" element={<TemplateTwo />} />
          <Route path="/template-three" element={<TemplateThree />} />
          <Route path="/template-four" element={<TemplateFour />} />
          <Route path="/template-five" element={<TemplateFive />} />
          <Route path="/template-six" element={<TemplateSix />} />
          <Route path="/" element={<CertificateDesigner />} />
        </Routes>{" "}
        {/* <Qr />
        {/* <BlankCertificate /> */}
        {/* <BlankCertificateP /> */}
        {/* <CertificateDesigner /> */}
        {/* <TemplateOne /> */}
        {/* <TemplateTwo /> */}
        {/* <TemplateThree /> */}
        {/* <TemplateFour /> */}
        {/* <TemplateFive /> */}
        {/* <div className="centered-container">
          {<CertificateTemplateOne data={firstTemplate} />}
        </div>
        <div className="centered-container">
          {<CertificateTemplateTwo data={secondTemplate} />}
        </div> */}
        {/* <div className="centered-container">
          {<CertificateTemplateThree data={thirdTemplate} />}
        </div> */}
        {/* <div className="centered-container">
          {<CertificateTemplateOneP data={firstTemplateP} />}
        </div>
        <div className="centered-container">
          {<CertificateTemplateTwoP data={secondTemplateP} />}
        </div>
        <div className="centered-container">
          {<CertificateTemplateThreeP data={thirdTemplateP} />}
        </div> */}
        {/* Your app content */}
        {/* {templates && templates.length > 0 ? (
          templates.map((template) => (
            <div className="centered-container" key={template.id}>
              <CertificateTemplateOne data={templates[0]} />
            </div>
          ))
        ) : (
          <p>No templates available.</p>
        )}

        {/* Your app content */}
        {/* {firstTemplate ? (
          <div className="centered-container">
            <CertificateTemplateOne data={firstTemplate} />
          </div>
        ) : (
          <p>No template with id 1 found.</p>
        )} */}
        {/* {secondTemplate ? (
          <div className="centered-container">
            <CertificateTemplateTwo data={secondTemplate} />
          </div>
        ) : (
          <p>No template with id 1 found.</p>
        )} */}
        {/* {Records &&
          Records.map((record) => {
            return (
              <div
                className="border border-primary container rounded-pill"
                key={record.id}
              >
                <strong>{record.title}</strong>
                <p>{record.content}</p>
                {record.tech &&
                  record.tech.map((data) => {
                    return <div key={record.id}>---{data.name}---</div>;
                  })}
              </div>
            );
          })}  */}
      </div>
    </>
  );
}

export default App;
