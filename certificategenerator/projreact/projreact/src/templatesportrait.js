import signone from "./components/images/signone.png";
import signtwo from "./components/images/signtwo.png";
import signthree from "./components/images/signthree.png";
import qr from "./components/images/qr.png";
import cdaclogo from "./components/images/cdaclogo.png";
import blanklandscape from "./components/images/blank-landscape.jpg";
import blank_portrait_three from "./components/images/blank_portrait_three.jpg";
import blank_portrait_one from "./components/images/blank_portrait_one.jpg";
import blank_portrait_two from "./components/images/blank_portrait_two.jpg";
import logo2 from "./components/images/logo2.jpg";
import logo3 from "./components/images/logo3.png";
import landscape_two from "./components/images/landscape_two.png";
export const templatesportrait = [
  {
    textt:
      "This is to certify that <<name>> has successfully completed the course <<course>> from <<startDate>> to <<endDate>>",
    Header: "Certificate of Completion",
    subHeader: "CDAC-HYDERABAD",
    BGimg: blank_portrait_one,
    Simg1: signone,
    s1x: 50,
    s1y: 550,
    Qimg: qr,
    Qx: 210,
    Qy: 550,
    Limg1: cdaclogo,
    L1x: 440,
    L1y: 50,
    clientid: "1001",
    tid: "t1",
  },
  {
    textt:
      "This is to certify that <<name>> has successfully completed the training program <<course>> from <<startDate>> to <<endDate>>",
    Header: "Certificate of Training",
    subHeader: "CDAC-HYDERABAD",
    BGimg: blank_portrait_two,
    Simg1: signone,
    s1x: 50,
    s1y: 550,
    Simg2: signtwo,
    s2x: 350,
    s2y: 550,
    Qimg: qr,
    Qx: 210,
    Qy: 550,
    Limg1: cdaclogo,
    L1x: 70,
    L1y: 90,
    Limg2: logo2,
    L2x: 420,
    L2y: 90,
    clientid: "1002",
    tid: "t2",
  },
  {
    textt:
      "This is to certify that <<name>> has successfully completed the workshop <<course>> from <<startDate>> to <<endDate>>",
    Header: "Certificate of Participation",
    subHeader: "CDAC-HYDERABAD",
    BGimg: blank_portrait_three,
    Simg1: signone,
    s1x: 60,
    s1y: 520,
    Simg2: signtwo,
    s2x: 335,
    s2y: 520,
    Simg3: signthree,
    s3x: 225,
    s3y: 660,
    Qimg: qr,
    Qx: 225,
    Qy: 520,
    Limg1: cdaclogo,
    L1x: 60,
    L1y: 50,
    Limg2: logo2,
    L2x: 250,
    L2y: 50,
    Limg3: logo3,
    L3x: 420,
    L3y: 50,
    clientid: "1003",
    tid: "t3",
  },
];
