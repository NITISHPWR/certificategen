import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TemplateFive() {
  const [clientid, setClientId] = useState(""); // Initialize clientId as an empty string
  const [tid, setTid] = useState(""); // Initialize Tid as an empty string
  const [textt, setTtext] = useState("");
  const [Header, setHeader] = useState("");
  const [subHeader, setSubHeader] = useState("");
  const [BGimg, setBgimg] = useState(null);
  const [Simg1, setSimg1] = useState(null);
  const [s1x, sets1x] = useState("");
  const [s1y, sets1y] = useState("");
  const [Simg2, setSimg2] = useState(null);
  const [s2x, sets2x] = useState("");
  const [s2y, sets2y] = useState("");
  const [Qx, setQx] = useState("");
  const [Qy, setQy] = useState("");
  const [Limg1, setLogoimg] = useState(null);
  const [L1x, setL1x] = useState("");
  const [L1y, setL1y] = useState("");
  const [Limg2, setLogoimg2] = useState(null);
  const [L2x, setL2x] = useState("");
  const [L2y, setL2y] = useState("");

  // State variables for resetting file inputs
  const [resetBgimg, setResetBgimg] = useState(false);
  const [resetSimg1, setResetSimg1] = useState(false);
  const [resetSimg2, setResetSimg2] = useState(false);
  const [resetLogoimg, setResetLogoimg] = useState(false);
  const [resetLogoimg2, setResetLogoimg2] = useState(false);

  // Function to enforce integer input
  const enforceIntegerInput = (e, setter) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setter(value);
    }
  };

  // Handle file input change
  const handleBgimgChange = (e) => {
    const file = e.target.files[0];
    setBgimg(file);
  };

  const handleSimg1Change = (e) => {
    const file = e.target.files[0];
    setSimg1(file);
  };

  const handleSimg2Change = (e) => {
    const file = e.target.files[0];
    setSimg2(file);
  };

  const handleLogoimgChange = (e) => {
    const file = e.target.files[0];
    setLogoimg(file);
  };

  const handleLogoimgChange2 = (e) => {
    const file = e.target.files[0];
    setLogoimg2(file);
  };

  // Create a navigate object
  const navigate = useNavigate();

  // Handle the back button click
  const handleBackButtonClick = () => {
    navigate("/");
  };

  const resetFileInputs = () => {
    setResetBgimg(true);
    setResetSimg1(true);
    setResetSimg2(true);
    setResetLogoimg(true);
    setResetLogoimg2(true);
    setTimeout(() => {
      setResetBgimg(false);
      setResetSimg1(false);
      setResetSimg2(false);
      setResetLogoimg(false);
      setResetLogoimg2(false);
    }, 1);
  };
  const handleSubmit = async (e) => {
    console.log("Submitting data...");
    e.preventDefault();
    // You can do something with the form data here
    // Set the clientId value here (replace 'YOUR_CLIENT_ID' with the actual value)
    let clientid = "101";
    setClientId(clientid); // Update the clientId state

    let tid = "t5";
    setTid(tid); // Update the clientId state

    try {
      // Create a FormData object to include file data
      const formData = new FormData();

      formData.append("clientid", clientid); // Append clientId to the formData
      formData.append("tid", tid); // Append Tid to the formData

      // Data object
      const data = {
        textt: textt,
        Header: Header,
        subHeader: subHeader,
        s1x: s1x,
        s1y: s1y,
        s2x: s2x,
        s2y: s2y,
        Qx: Qx,
        Qy: Qy,
        L1x: L1x,
        L1y: L1y,
        L2x: L2x,
        L2y: L2y,
      };
      // Append fields from the "data" object
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
        //console.log(`Appended ${key}: ${value} to formData`);
      }
      // Log the state and formData just before submission
      console.log("State values before submission:", {
        textt,
        Header,
        subHeader,
        s1x,
        s1y,
        s2x,
        s2y,
        Qx,
        Qy,
        L1x,
        L1y,
        L2x,
        L2y,
      });

      //Images object
      const images = {
        BGimg: BGimg,
        Simg1: Simg1,
        Simg2: Simg2,
        // Qimg: Qimg,
        Limg1: Limg1,
        Limg2: Limg2,
      };

      // Append fields from the "images" object
      for (const [key, value] of Object.entries(images)) {
        formData.append(key, value);
      }
      // Log the state and formData just before submission
      console.log("State values before submission:", {
        BGimg,
        Simg1,
        Simg2,
        //  Qimg,
        Limg1,
        Limg2,
      });

      // Log the FormData just before submission
      console.log("FormData before submission:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      // Send a POST request using Axios to the backend endpoint
      const response = await axios.post(
        "http://cms-staging.hyderabad.cdac.in:3111/templates",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file upload
          },
        }
      );
      // formData.append("BGimg", BGimg);
      // formData.append("Simg1", Simg1);
      // formData.append("Simg2", Simg2);
      // formData.append("Qimg", Qimg);
      // formData.append("Limg1", Limg1);

      // Log formData just before submitting

      // Add a delay of a few seconds (adjust as needed)
      // setTimeout(() => {
      //   console.log("FormData after delay:", formData);
      // }, 5000);
      //

      // // Append fields from the "images" object
      // for (const [key, value] of Object.entries(images)) {
      //   formData.append(key, value);
      // }

      console.log("Data submitted successfully!");
      console.log("clientid:", clientid);
      console.log("tid:", tid);
      //console.log("data:", data); // Updated to "data"
      // console.log("images:", images);
      //console.log("formData", formData);
      console.log("Data submitted successfully!");

      // Log more details about the successful response
      // console.log("Response Status:", response.status);
      // console.log("Response Data:", response.data);

      // Reset the form after successful submission
      resetForm();
      resetFileInputs();
    } catch (error) {
      // Original console.error statement
      console.error("Full Error:", error);
    }
  };

  // Function to reset all state values to their initial empty values
  const resetForm = () => {
    setClientId("");
    setTid("");
    setTtext("");
    setHeader("");
    setSubHeader("");
    setBgimg(null);
    setSimg1(null);
    sets1x("");
    sets1y("");
    setSimg2(null);
    sets2x("");
    sets2y("");
    setQx("");
    setQy("");
    setLogoimg(null);
    setL1x("");
    setL1y("");
    setLogoimg2(null);
    setL2x("");
    setL2y("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary bi bi-arrow-left blue-color"
            onClick={handleBackButtonClick}
            style={{ position: "absolute", top: 10, left: 20 }}
          >
            <i className="">Back</i>
          </button>
        </div>
      </div>
      <br />
      <br />
      <h2 className="mt-3">Certificate Template 5</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="clientid" value={clientid} />{" "}
        {/* Hidden input for clientId */}
        <input type="hidden" name="tid" value={tid} />{" "}
        {/* Hidden input for tId */}
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Template Text:</label>
          <div className="col-sm-5">
            <textarea
              id="textt"
              className="form-control"
              name="textt"
              rows="4"
              cols="50"
              value={textt}
              onChange={(e) => setTtext(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Header Content:</label>
          <div className="col-sm-5">
            <input
              type="text"
              name="Header"
              className="form-control"
              value={Header}
              onChange={(e) => setHeader(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Sub-Header Content:</label>
          <div className="col-sm-5">
            <input
              type="text"
              name="subHeader"
              className="form-control"
              value={subHeader}
              onChange={(e) => setSubHeader(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Background Image:</label>
          <div className="col-sm-5">
            <input
              type="file"
              name="BGimg"
              onChange={handleBgimgChange}
              className="form-control"
              key={resetBgimg ? "reset" : "bgimg"}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Signature 1 Image:</label>
          <div className="col-sm-5">
            <input
              type="file"
              name="Simg1"
              onChange={handleSimg1Change}
              className="form-control"
              key={resetSimg1 ? "reset" : "simg1"}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">s1x:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="s1x"
              className="form-control"
              value={s1x}
              onChange={(e) => enforceIntegerInput(e, sets1x)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">s1y:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="s1y"
              className="form-control"
              value={s1y}
              onChange={(e) => enforceIntegerInput(e, sets1y)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Signature 2 Image:</label>
          <div className="col-sm-5">
            <input
              type="file"
              name="Simg2"
              className="form-control"
              onChange={handleSimg2Change}
              key={resetSimg2 ? "reset" : "simg2"}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">s2x:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="s2x"
              className="form-control"
              value={s2x}
              onChange={(e) => enforceIntegerInput(e, sets2x)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">s2y:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="s2y"
              className="form-control"
              value={s2y}
              onChange={(e) => enforceIntegerInput(e, sets2y)}
              required
            />
          </div>
        </div>
        {/* <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Qimg:</label>
        <div className="col-sm-5">
          <input type="file" className="form-control" />
        </div>
      </div> */}
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            QR code x coordinate:
          </label>
          <div className="col-sm-5">
            <input
              type="number"
              name="Qx"
              className="form-control"
              value={Qx}
              onChange={(e) => enforceIntegerInput(e, setQx)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            QR code y coordinate:
          </label>
          <div className="col-sm-5">
            <input
              type="number"
              name="Qy"
              className="form-control"
              value={Qy}
              onChange={(e) => enforceIntegerInput(e, setQy)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Logo Image 1:</label>
          <div className="col-sm-5">
            <input
              type="file"
              className="form-control"
              name="Limg1"
              onChange={handleLogoimgChange}
              key={resetLogoimg ? "reset" : "logoimg"}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">L1x:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="L1x"
              className="form-control"
              value={L1x}
              onChange={(e) => enforceIntegerInput(e, setL1x)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">L1y:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="L1y"
              className="form-control"
              value={L1y}
              onChange={(e) => enforceIntegerInput(e, setL1y)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Logo Image 2:</label>
          <div className="col-sm-5">
            <input
              type="file"
              className="form-control"
              name="Limg2"
              onChange={handleLogoimgChange2}
              key={resetLogoimg2 ? "reset" : "logoimg"}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">L2x:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="L2x"
              className="form-control"
              value={L2x}
              onChange={(e) => enforceIntegerInput(e, setL2x)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">L2y:</label>
          <div className="col-sm-5">
            <input
              type="number"
              name="L2y"
              className="form-control"
              value={L2y}
              onChange={(e) => enforceIntegerInput(e, setL2y)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
