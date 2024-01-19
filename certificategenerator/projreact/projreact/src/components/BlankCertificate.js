import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { ItemTypes } from "./constants";
import DragTextbox from "./DragTextbox";
import "./BlankCertificate.css";
import HeaderTextbox from "./HeaderTextbox";
import SubHeaderTextbox from "./SubHeaderTextbox";
import Qr from "./Qr";
import axios from "axios";

export default function BlankCertificate() {
  const [draggedFile, setDraggedFile] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [isHeaderAdded, setIsHeaderAdded] = useState(false);
  const [headerContent, setHeaderContent] = useState("");
  const [BGimg, setBGimg] = useState(null);
  // Create a state variable for the header object
  // Add a state variable to track whether the new tab is opened
  const [newTabOpened, setNewTabOpened] = useState(false);

  const [header, setHeaderObject] = useState({
    content: "", // Header content
    x: 0, // Initial x-position
    y: 0, // Initial y-position
  });
  const [subheaderContent, setSubheaderContent] = useState("");
  const [subheader, setSubheaderObject] = useState({
    content: "", // Subheader content
    x: 0, // Initial x-position
    y: 0, // Initial y-position
  });

  const [textboxCoordinates, setTextboxCoordinates] = useState([]);
  const [textarea, setTextareaObject] = useState({
    content: "", // Subheader content
    x: 0, // Initial x-position
    y: 0, // Initial y-position
  });

  const [content, setTextboxValues] = useState([]);
  const [qrImageCoordinates, setQrImageCoordinates] = useState({ x: 0, y: 0 });
  const [qrImagePosition, setQrImagePosition] = useState({ x: 0, y: 0 });
  // Add a state variable to track whether the preview mode is active
  const [previewMode, setPreviewMode] = useState(false);

  const [qrImage, setQrImage] = useState(null);
  const [qrImageLoaded, setQrImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [textboxes, setTextboxes] = useState([]);
  const [selectedLogos, setSelectedLogos] = useState([]);
  const [selectedSignatures, setSelectedSignatures] = useState([]);
  const [textboxAdded, setTextboxAdded] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [subheaderVisible, setSubHeaderVisible] = useState(false);
  const [backgroundImageUploaded, setBackgroundImageUploaded] = useState(false);
  const [logoButtonDisabled, setLogoButtonDisabled] = useState(true);
  const [signatureButtonDisabled, setSignatureButtonDisabled] = useState(true);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);
  const [addHeaderButtonDisabled, setAddHeaderButtonDisabled] = useState(false);
  const [addSubHeaderButtonDisabled, setAddSubHeaderButtonDisabled] =
    useState(true);
  const [signaturesSelected, setSignaturesSelected] = useState(false);
  const [addSubHeaderButtonVisible, setAddSubHeaderButtonVisible] =
    useState(false);
  const [addTextboxButtonVisible, setAddTextboxButtonVisible] = useState(false);
  const [selectLogosButtonVisible, setSelectLogosButtonVisible] =
    useState(false);
  const [selectSignaturesButtonVisible, setSelectSignaturesButtonVisible] =
    useState(false);
  const [saveButtonVisible, setSaveButtonVisible] = useState(false);
  const [headerAdded, setHeaderAdded] = useState(false);
  const [headerPosition, setHeaderPositionState] = useState({ x: 0, y: 0 });
  const [subheaderPosition, setSubheaderPosition] = useState({ x: 0, y: 0 });
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showDeleteSignaturesButton, setShowDeleteSignaturesButton] =
    useState(false);
  const [addTextboxButtonDisabled, setAddTextboxButtonDisabled] =
    useState(false);
  const [logosSelected, setLogosSelected] = useState(false);
  const [selectSignaturesVisible, setSelectSignaturesVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: Select Logos, 1: Select Signatures
  const [selectSignatureClicked, setSelectSignatureClicked] = useState(false);
  const [imageObjects, setImageObjects] = useState([]);
  useEffect(() => {
    if (qrImageLoaded) {
      const alertTimeout = setTimeout(() => {
        alert("Drag the QR image to the desired location on the template");
      }, 500);

      return () => clearTimeout(alertTimeout);
    }
  }, [qrImageLoaded]);

  // Toggle the visibility of the subheader text
  const toggleSubHeaderVisibility = () => {
    setSubHeaderVisible(!subheaderVisible);
  };

  const logoInputRef = useRef(null);
  const signatureInputRef = useRef(null);
  const certificateRef = useRef(null);

  const handleQrImageLoad = () => {
    setQrImageLoaded(true);
  };

  const setHeaderPosition = (position) => {
    setHeaderPositionState(position);
  };

  const handleSubheaderPositionChange = (newPosition) => {
    setSubheaderPosition(newPosition);
  };

  const handleTextboxPositionChange = (index, newPosition) => {
    const updatedCoordinates = [...textboxCoordinates];
    updatedCoordinates[index] = newPosition;
    setTextboxCoordinates(updatedCoordinates);
  };

  // Callback to update the header content state
  const handleHeaderChange = (newHeaderText) => {
    // Update the header content
    setHeaderContent(newHeaderText);

    // Update the header object
    setHeaderObject({
      ...header,
      content: newHeaderText,
    });
  };

  // Callback to update the subheader content state
  const handleSubheaderContentChange = (newSubheaderText) => {
    setSubheaderContent(newSubheaderText); // Update the subheader content
  };

  // Function to update the content, x, and y values of the DragTextbox
  const handleTextboxChange = (newContent, x, y) => {
    setTextboxValues({ content: newContent, x: x, y: y });
  };

  const handleHeaderStop = (data) => {
    const updatedHeaderObject = {
      ...header,
      x: data.x,
      y: data.y,
    };
    setHeaderObject(updatedHeaderObject);
  };

  const handleSaveButtonClick = () => {
    //saveCertificateData();
    if (backgroundImageUploaded) {
      // alert("Save button is working!");
      console.log("BGimg:", BGimg.file);
      console.log("BGimg.file type:", typeof BGimg.file);

      // ... rest of your code for saving the certificate
    } else {
      alert("Please select a background image before saving.");
    }

    console.log("header :", {
      content: header.content,
      x: headerPosition.x,
      y: headerPosition.y,
    });
    console.log("subheader:", {
      content: subheaderContent,
      x: subheaderPosition.x,
      y: subheaderPosition.y,
    });

    // Textboxes
    const text = [];

    textboxCoordinates.forEach((coordinates, index) => {
      const textarea = {
        contentt: content[index] || "",
        xt: coordinates.x,
        yt: coordinates.y,
      };

      text.push(textarea);
    });
    console.log("textarea:", text[0]);

    console.log("Image Objects:", imageObjects);

    // Create the data object
    const data = {
      tid: "t12",
      BGimg: {
        imageFile: BGimg.file,
        fileName: BGimg.imageName, // Include the file name
      },
      header: {
        contenth: headerContent,
        xh: headerPosition.x,
        yh: headerPosition.y,
      },
      subheader: {
        contents: subheaderContent,
        xs: subheaderPosition.x,
        ys: subheaderPosition.y,
      },
      textareas: text[0],
      images: imageObjects,
    };

    const formData = new FormData();
    // Append your data to the FormData object

    textboxCoordinates.forEach((coordinates, index) => {
      const textarea = {
        content: content[index] || "",
        x: coordinates.x,
        y: coordinates.y,
      };

      text.push(textarea);
    });

    formData.append("tid", data.tid); // Ensure that tid is treated as a string
    formData.append("files", BGimg.file);
    formData.append("BGimgFileName", BGimg.imageName);
    // assuming "BGimgFileName" is the field name for the file name

    // Add the coordinates of the QR image to the formData
    // Add the coordinates of the QR image to the formData
    formData.append("qrX", qrImagePosition.x);
    formData.append("qrY", qrImagePosition.y);
    // Header
    formData.append("contenth", data.header.contenth);
    formData.append("xh", data.header.xh);
    formData.append("yh", data.header.yh);

    // Subheader
    formData.append("contents", data.subheader.contents);
    formData.append("xs", data.subheader.xs);
    formData.append("ys", data.subheader.ys);

    text.forEach((textarea, index) => {
      if (index === 0) {
        formData.append(`contentt`, textarea.contentt);
        formData.append(`xt`, textarea.xt);
        formData.append(`yt`, textarea.yt);
      }
    });

    // imageObjects.forEach((image, index) => {
    //   // Append image data to the formData
    //   // formData.append(`images[${index}].url`, image.url);
    //   // Append the file
    //   formData.append(`image[${index}].name`, image.name);
    //   formData.append(`image[${index}].x`, image.x);
    //   formData.append(`image[${index}].y`, image.y);
    // });

    imageObjects.forEach((image, index) => {
      // Append the file
      //  formData.append("image["+${index}+"].file", image.file); // assuming image.file contains the file object
      // formData.append("image["+${index}+"].name", image.name);
      // formData.append("image["+{index}+"].x", image.x);
      // formData.append("image["+${index}+"].y", image.y);

      formData.append("files", image.file);
      formData.append("name" + index, image.name);
      formData.append("x" + index, image.x);
      formData.append("y" + index, image.y);
    });
    // For now, you can log the 'data' object for testing

    console.log("=============================================");
    console.log("Printing FormData:");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    let mywindow;
    axios
      .post("http://cms-staging.hyderabad.cdac.in:3111/BlankCert", formData)
      .then((response) => {
        // Handle the success response from the server
        console.log("Certificate data saved successfully", response.data);

        // Assuming the response contains additional data needed for the second request
        const responseData = response.data;

        // Extract the tid from the response data
        const { tid } = responseData.certificate;

        if (!tid) {
          console.error(
            "Error: 'tid' not found in the response data.",
            responseData
          );
          return; // Exit the function if tid is not found
        }

        // Create the data object for the second request
        const previewData = {
          templateId: tid,
          dynamicData: {
            name: "User",
          },
        };

        // Make a second POST request to the PreviewL endpoint with JSON data
        // Make a second POST request to the PreviewL endpoint with JSON data
        axios
          .post(
            "http://cms-staging.hyderabad.cdac.in:3111/BlankCertSingle/PreviewL",
            previewData,
            {
              responseType: "arraybuffer", // Set the responseType to arraybuffer
            }
          )
          .then((previewResponse) => {
            // Handle the success response from the second request
            console.log("Preview data sent successfully", previewResponse.data);

            // Create a Blob from the PDF data
            const blob = new Blob([previewResponse.data], {
              type: "application/pdf",
            });

            // Create a URL for the Blob
            const url = URL.createObjectURL(blob);

            // Open a new window or tab with the PDF
            mywindow = window.open(url, "_blank");
          })
          .catch((previewError) => {
            // Handle errors from the second request
            console.error("Error saving preview data", previewError);
          });
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error saving certificate data", error);
        // You can also show an error message to the user.
      });
  };
  // Add useEffect to handle the new tab logic
  useEffect(() => {
    // Check if the new tab is opened
    if (newTabOpened) {
      // Reset the state to indicate that the new tab has been handled
      setNewTabOpened(false);
      // Perform any additional actions related to the new tab if needed
    }
  }, [newTabOpened]);

  const handleTextContentChange = (index, newTextContent) => {
    const updatedValues = [...content];
    updatedValues[index] = newTextContent;
    setTextboxValues(updatedValues);
  };

  // const handleBackgroundImageChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   const imageName = selectedImage ? selectedImage.name : "No image selected";
  //   setBGimg({ imageName });
  //   setBackgroundImage(URL.createObjectURL(selectedImage));
  //   setBackgroundImageUploaded(true);
  // };

  const handleBackgroundImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const imageName = selectedImage ? selectedImage.name : "No image selected";

    setBGimg({ file: selectedImage, imageName });
    setBackgroundImage(URL.createObjectURL(selectedImage));
    setBackgroundImageUploaded(true);
  };

  const handleAddHeaderClick = () => {
    setHeaderAdded(true);
    setHeaderVisible(true);

    setAddHeaderButtonDisabled(true);
    setAddSubHeaderButtonVisible(true);
    setAddTextboxButtonVisible(false);
    setSelectLogosButtonVisible(false);
    setSelectSignaturesButtonVisible(false);
    setSaveButtonVisible(false);

    setLogoButtonDisabled(false);
    setSignatureButtonDisabled(false);

    setAddSubHeaderButtonDisabled(false);
    setLogoButtonDisabled(true);
    setSignatureButtonDisabled(true);

    setAddSubHeaderButtonVisible(true);
  };

  const handleAddSubHeaderClick = () => {
    setAddSubHeaderButtonDisabled(true);

    setAddTextboxButtonVisible(true);
    setSelectLogosButtonVisible(false);
    setSelectSignaturesButtonVisible(false);
    setSaveButtonVisible(false);

    setLogoButtonDisabled(true);
    setSignatureButtonDisabled(true);

    setSaveButtonDisabled(true);

    toggleSubHeaderVisibility();
  };

  const handleAddTextboxClick = () => {
    // Call the addTextbox function to add a new textbox with initial position (0, 0)
    addTextbox(0, 0);

    // Update visibility and disable states as needed
    setAddTextboxButtonDisabled(true); // Disable the button after clicking
    setSelectLogosButtonVisible(true);
    setSelectSignaturesButtonVisible(false);
    setSaveButtonVisible(false);

    setLogoButtonDisabled(false);
    setSignatureButtonDisabled(false);
    setSaveButtonDisabled(true);
    setTextboxAdded(true); // Ensure that textboxAdded state is updated
  };

  const handleSelectLogosClick = () => {
    setSelectSignaturesButtonVisible(true);
    setCurrentStep(1); // Move to the next step (Select Signatures)
  };

  const handleSelectSignaturesClick = () => {
    setSelectSignatureClicked(true);
    setSaveButtonVisible(true);
    setSaveButtonDisabled(false); // Enable the Save button when signatures are selected
  };

  const handleDeleteAllSignaturesClick = () => {
    setSelectedSignatures([]);
    setShowDeleteSignaturesButton(false);
    signatureInputRef.current.value = null;
    setSaveButtonDisabled(true); // Disable the Save button when signatures are deleted
  };

  const handleSignatureImageChange = (event) => {
    const selectedSignatureFiles = [...event.target.files];
    const newSignatures = selectedSignatureFiles.map((signature) => ({
      url: URL.createObjectURL(signature),
      x: 0,
      y: 0,
    }));

    setSelectedSignatures([...selectedSignatures, ...newSignatures]);
    setShowDeleteSignaturesButton(
      selectedSignatures.length + newSignatures.length > 1
    );
    setSignaturesSelected(true);
    setSaveButtonVisible(true);
    setSaveButtonDisabled(false);
  };

  const handleDeleteAllLogosClick = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete all logos and signatures?"
    );

    if (shouldDelete) {
      setSelectedLogos([]);
      setShowDeleteButton(false);
      logoInputRef.current.value = null;
    }
  };

  const handleLogoImageChange = (event) => {
    // Clear the imageObjects array before adding new logos
    setImageObjects([]);
    const selectedLogosFiles = [...event.target.files];
    const newLogos = selectedLogosFiles.map((logo, index) => ({
      file: logo,
      url: URL.createObjectURL(logo),
      name: logo.name,
      x: 0,
      y: 0,
    }));
    // Add the new logos to the imageObjects array
    setImageObjects([...imageObjects, ...newLogos]);
    // Remove the "id" property from the new logos before adding them to the selectedLogos state
    const newLogosWithoutId = newLogos.map(({ id, ...rest }) => rest);
    setSelectedLogos([...selectedLogos, ...newLogosWithoutId]);
    setShowDeleteButton(true);
  };

  // const handleSignatureDrag = (e, data, signature) => {
  //   const certificateRect = certificateRef.current.getBoundingClientRect();
  //   const x = data.x - certificateRect.left;
  //   const y = data.y - certificateRect.top;

  //   const updatedSignatures = selectedSignatures.map((s) =>
  //     s === signature ? { ...s, x, y } : s
  //   );
  //   setSelectedSignatures(updatedSignatures);
  // };

  const handleLogoDrag = (e, data, logo) => {
    const certificateRect = certificateRef.current.getBoundingClientRect();
    const x = data.x - certificateRect.left;
    const y = data.y - certificateRect.top;
    // Find the index of the logo in the imageObjects array
    const logoIndex = imageObjects.findIndex((img) => img.url === logo.url);
    if (logoIndex !== -1) {
      // Update the x and y coordinates for the logo in the array
      const updatedImageObjects = [...imageObjects];
      updatedImageObjects[logoIndex] = {
        ...updatedImageObjects[logoIndex],
        x,
        y,
      };

      // Update the state with the new array
      setImageObjects(updatedImageObjects);
    }
    const updatedLogos = selectedLogos.map((l) =>
      l === logo ? { ...l, x, y } : l
    );
    setSelectedLogos(updatedLogos);
  };

  const handleHeaderDrag = (e, data) => {
    const updatedHeaderObject = {
      ...header,
      x: data.x,
      y: data.y,
    };
    setHeaderObject(updatedHeaderObject);
  };

  // const certificateStyles = {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: "contain",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center",
  //   position: "relative",
  // };
  const certificateStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 0%", // Set background position to top-left corner
    position: "relative",
  };

  const paddingStyle = {
    paddingBottom: "20px",
  };

  const addTextbox = (x, y) => {
    const newTextbox = { x, y };
    setTextboxes([...textboxes, newTextbox]);
    setTextboxAdded(true);
  };

  // const handleQrImageDrag = (e, data) => {
  //   const certificateRect = certificateRef.current.getBoundingClientRect();
  //   const x = data.x - certificateRect.left;
  //   const y = data.y - certificateRect.top;

  //   setQrImage({ ...qrImage, x, y });
  // };
  // const handleQrImageDrag = (e, data) => {
  //   const certificateRect = certificateRef.current.getBoundingClientRect();
  //   const x = data.x - certificateRect.left;
  //   const y = data.y - certificateRect.top;

  //   setQrImage({ ...qrImage, x, y });
  // };

  const handleQrImageDrag = (e, data) => {
    const certificateRect = certificateRef.current.getBoundingClientRect();
    const x = data.x - certificateRect.left;
    const y = data.y - certificateRect.top;

    setQrImage({ ...qrImage, x, y });
    setQrImagePosition({ x, y }); // Update the QR image position
  };

  // const saveCertificateData = () => {
  //   if (backgroundImageUploaded) {
  //     //Create a data object with the JSON objects you want to send
  //     const data = {
  //       Bgimg: BGimg,
  //       header: {
  //         content: content,
  //         x: headerPosition.x,
  //         y: headerPosition.y,
  //       },
  //       Subheader: {
  //         content: subheaderContent,
  //         x: subheaderPosition.x,
  //         y: subheaderPosition.y,
  //       },
  //       textarea: {
  //         content: textarea.content,
  //         x: textarea.x,
  //         y: textarea.y,
  //       },
  //       // ImageObjects: imageObjectsData,
  //     };
  //     //Send a POST request to your backend API
  //     axios
  //       .post("your-backend-api-url", data)
  //       .then((response) => {
  //         // Handle the success response from the server
  //         console.log("Certificate data saved successfully", response.data);
  //         // You can add additional logic here, such as showing a success message to the user.
  //       })
  //       .catch((error) => {
  //         // Handle any errors that occur during the request
  //         console.error("Error saving certificate data", error);
  //         // You can also show an error message to the user.
  //       });
  //   } else {
  //     alert("Please select a background image before saving.");
  //   }
  // };

  return (
    <>
      <div className="certificate-container">
        {/* Left Div */}
        <div className="left-div">
          <div
            className={`drop-zone ${backgroundImage ? "uploaded" : ""}`}
            style={certificateStyles}
            ref={certificateRef}
          >
            {backgroundImageUploaded && (
              <Qr
                onLoad={handleQrImageLoad}
                onDrag={(position) => setQrImagePosition(position)}
              />
            )}

            {qrImage && (
              <Draggable onDrag={(e, data) => handleQrImageDrag(e, data)}>
                <div className="draggable-qr-image">
                  <img
                    src={qrImage.url}
                    alt="QR Image"
                    title="Drag the QR image to the certificate template"
                    style={{
                      width: "100px",
                      height: "auto",
                      margin: "10px",
                      cursor: "grab",
                    }}
                    onLoad={handleQrImageLoad}
                  />
                </div>
              </Draggable>
            )}

            {headerVisible && (
              <Draggable
                defaultPosition={headerPosition}
                onDrag={handleHeaderDrag}
                onStop={handleHeaderStop} // Add this line
              >
                <HeaderTextbox
                  onHeaderChange={handleHeaderChange}
                  headerContent={headerContent} // Pass headerContent as a prop
                  setHeaderPosition={setHeaderPosition}
                />
              </Draggable>
            )}
            {subheaderVisible && (
              <SubHeaderTextbox
                onSubheaderContentChange={handleSubheaderContentChange}
                onPositionChange={handleSubheaderPositionChange}
                subheaderContent={subheaderContent}
              />
            )}
            {textboxes.map((textbox, index) => (
              <DragTextbox
                key={index}
                index={index}
                position={textboxCoordinates[index] || { x: 0, y: 0 }}
                onTextContentChange={(newTextContent) =>
                  handleTextContentChange(index, newTextContent)
                }
                onPositionChange={(newPosition) =>
                  handleTextboxPositionChange(index, newPosition)
                }
              />
            ))}

            {selectedLogos.map((logo, index) => (
              <div key={index}>
                <Draggable onDrag={(e, data) => handleLogoDrag(e, data, logo)}>
                  <div
                    className="draggable-logo"
                    style={{ position: "absolute", top: "0px", left: "0px" }}
                  >
                    <img
                      src={logo.url}
                      alt={`Logo ${index}`}
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
                </Draggable>
              </div>
            ))}

            {/* {selectedSignatures.map((signature) => (
              <div key={signature.id}>
                <Draggable
                  defaultPosition={{ x: 0, y: 0 }} // Adjusted initial positions
                  onDrag={(e, data) => handleSignatureDrag(e, data, signature)}
                  style={{ position: "absolute", top: "0px", left: "0px" }}
                >
                  <div className="draggable-signature">
                    <img
                      src={signature.url}
                      alt={`signature ${signature.id}`}
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
                </Draggable>
              </div>
            ))} */}

            {draggedFile && !backgroundImage ? <p>Uploading image...</p> : null}
          </div>
        </div>

        {/* Right Div */}
        <div
          className="right-div certificate-maker"
          style={{ border: "2px solid #333", padding: "15px" }}
        >
          <div style={paddingStyle}>
            <label className="select-background-label">
              Select Background Image for Certificate :
              <input
                type="file"
                accept="image/*"
                onChange={handleBackgroundImageChange}
              />
            </label>
          </div>
          {backgroundImage && (
            <div style={paddingStyle}>
              {!isHeaderAdded && (
                <>
                  <button
                    onClick={handleAddHeaderClick}
                    style={{ marginRight: "10px" }}
                    disabled={addHeaderButtonDisabled}
                  >
                    Add Header
                  </button>
                  {addSubHeaderButtonVisible && (
                    <button
                      onClick={handleAddSubHeaderClick}
                      style={{ marginRight: "10px" }}
                      disabled={addSubHeaderButtonDisabled}
                    >
                      Add SubHeader
                    </button>
                  )}
                  {addTextboxButtonVisible && (
                    <button
                      onClick={handleAddTextboxClick}
                      style={{ marginRight: "10px" }}
                      disabled={addTextboxButtonDisabled}
                    >
                      Add Textbox
                    </button>
                  )}
                  {currentStep === 0 && (
                    <div style={paddingStyle}>
                      {/* Render the logo selection UI */}
                      {selectLogosButtonVisible && (
                        <>
                          <label
                            htmlFor="logoInput"
                            style={{ marginTop: "10px" }}
                            className="select-background-label"
                          >
                            Select Logos And Signatures Images (Multiple):
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={handleLogoImageChange}
                              ref={logoInputRef}
                            />
                          </label>
                          {showDeleteButton && (
                            <>
                              <button
                                onClick={handleDeleteAllLogosClick}
                                style={{ marginLeft: "10px" }}
                              >
                                Delete All Logos And Signatures
                              </button>
                              <div style={paddingStyle}>
                                {/* Render the save button */}
                                <br />
                                <button onClick={handleSaveButtonClick}>
                                  Save
                                </button>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div style={paddingStyle}>
                      {/* Render the save button */}
                      <br />
                      <button onClick={handleSaveButtonClick}>Save</button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
