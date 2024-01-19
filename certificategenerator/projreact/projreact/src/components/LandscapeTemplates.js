import React, { useState } from "react";
import Image0 from "./images/blank-landscape.jpg";
import Image1 from "./images/landscape_one.png"; // Import your image files here
import Image2 from "./images/landscape_two.png";
import Image3 from "./images/landscape_three.png";
import CertificateEditor from "./CertificateEditor"; // Import your CertificateEditor component
import TemplateOne from "./TemplateOne";
import { useNavigate } from "react-router-dom";

export default function LandscapeTemplates() {
  // Initialize a piece of state called selectedCertificate and a function to update it
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const imageSize = {
    width: "250px", // Adjust the width as needed (e.g., 250px)
    height: "auto", // Adjust the height as needed
  };

  const containerStyle = {
    border: "2px solid #000", // Dark border
    padding: "8px", // Add padding for spacing
    margin: "5px",
  };
  // Create a navigate object
  const navigate = useNavigate();

  // Define a function to handle selecting a certificate image
  const handleSelectCertificate = (certificateImage) => {
    // Set the selected certificate when a user clicks on a template
    setSelectedCertificate(certificateImage);
  };

  // Define a function to handle editing a certificate
  const handleEditCertificateBlank = () => {
    // Use history.push to navigate to TemplateOne.js when "Edit" is clicked
    navigate("/blankcertificate");
  };

  // Define a function to handle editing a certificate
  const handleEditCertificate = () => {
    // Use history.push to navigate to TemplateOne.js when "Edit" is clicked
    navigate("/template-one");
  };

  // Define a function to handle editing a certificate
  const handleEditCertificateTwo = () => {
    // Use history.push to navigate to TemplateOne.js when "Edit" is clicked
    navigate("/template-two");
  };

  // Define a function to handle editing a certificate
  const handleEditCertificateThree = () => {
    // Use history.push to navigate to TemplateOne.js when "Edit" is clicked
    navigate("/template-three");
  };
  return (
    <div style={containerStyle}>
      {/* Conditionally render either the CertificateEditor or certificate templates */}
      {selectedCertificate ? (
        <CertificateEditor
          certificateImage={selectedCertificate}
          onCancel={() => setSelectedCertificate(null)}
        />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <img
                src={Image0}
                alt="blank"
                className="img-fluid"
                style={imageSize}
                onClick={() => handleSelectCertificate(Image0)}
              />
              <div>
                <button
                  className="btn btn-primary mt-2" // Bootstrap primary button style
                  onClick={handleEditCertificateBlank}
                >
                  Use Template
                </button>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <img
                src={Image1}
                alt="Landscape Template 1"
                className="img-fluid"
                style={imageSize}
                onClick={() => handleSelectCertificate(Image1)}
              />
              <div>
                <button
                  className="btn btn-primary mt-2" // Bootstrap primary button style
                  onClick={handleEditCertificate}
                >
                  Use Template
                </button>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <img
                src={Image2}
                alt="Landscape Template 2"
                className="img-fluid"
                style={imageSize}
                onClick={() => handleSelectCertificate(Image2)}
              />
              <div>
                <button
                  className="btn btn-primary mt-2" // Bootstrap primary button style
                  onClick={handleEditCertificateTwo}
                >
                  Use Template
                </button>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <img
                src={Image3}
                alt="Landscape Template 3"
                className="img-fluid"
                style={imageSize}
                onClick={() => handleSelectCertificate(Image3)}
              />
              <div>
                <button
                  className="btn btn-primary mt-2" // Bootstrap primary button style
                  onClick={handleEditCertificateThree}
                >
                  Use Template
                </button>
              </div>
            </div>

            {/* You can add similar code for additional certificate templates here */}
          </div>
        </div>
      )}
    </div>
  );
}
