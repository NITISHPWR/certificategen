import "./App.css";
import CertificateDesigner from "./components/CertificateDesigner";
import TemplateOne from "./components/TemplateOne";
import TemplateTwo from "./components/TemplateTwo";
import TemplateThree from "./components/TemplateThree";
import CertificateTemplateOne from "./components/CertificateTemplateOne";
import Records from "./records.json";
import bgimg from "./components/images/blank-landscape.jpg";
import signone from "./components/images/signone.png";
import signtwo from "./components/images/signtwo.png";
import qr from "./components/images/qr.png";
import cdaclogo from "./components/images/cdaclogo.png";
import logo2 from "./components/images/logo2.jpg";
import logo3 from "./components/images/logo3.png";
import templates from "./templates.json"; // Import the JSON data
import CertificateTemplateTwo from "./components/CertificateTemplateTwo";
import CertificateTemplateThree from "./components/CertificateTemplateThree";
const jsonData = {
  textt:
    "This is to certify that <<name>> has successfully completed the course <<course>> from <<startDate>> to <<endDate>>",

  Header: "Certificate of Completion",

  subHeader: "CDAC-HYDERABAD",

  BGimg: bgimg, // Use the imported image variable
  Simg1: signone, // Use the imported image variable
  s1x: 100,
  s1y: 400,

  Simg2: signtwo, // Use the imported image variable
  s2x: 500,
  s2y: 400,

  Qimg: qr, // Use the imported image variable
  Qx: 325,
  Qy: 400,

  Limg1: cdaclogo, // Use the imported image variable
  L1x: 630,
  L1y: 90,

  Limg2: logo2,
  L2x: 660,
  L2y: 90,

  Limg3: logo3,
  L3x: 550,
  L3y: 90,

  clientid: "1001",
  tid: "t1",
};

function App() {
  // Assuming templates is your JSON data
  const firstTemplate = templates.find((template) => template.tid === "t1");
  const secondTemplate = templates.find((template) => template.tid === "t2");

  return (
    <>
      <div className="App">
        {/* <CertificateDesigner /> */}
        {/* <TemplateOne /> */}
        {/* <TemplateTwo /> */}
        {/* <TemplateThree /> */}
        <div className="centered-container">
          <CertificateTemplateOne data={jsonData} bgImgPath={bgimg} />
        </div>
        {/* <div className="centered-container">
          <CertificateTemplateTwo data={jsonData} bgImgPath={bgimg} />
        </div>
        <div className="centered-container">
          <CertificateTemplateThree data={jsonData} bgImgPath={bgimg} />
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
