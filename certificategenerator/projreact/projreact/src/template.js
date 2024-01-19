import signone from "./components/images/signone.png";
import signtwo from "./components/images/signtwo.png";
import signthree from "./components/images/signthree.png";
import qr from "./components/images/qr.png";
import cdaclogo from "./components/images/cdaclogo.png";
import blanklandscape from "./components/images/blank-landscape.jpg";
import blank_landscape_two from "./components/images/blank_landscape_two.jpg";
import blank_landscape_three from "./components/images/blank_landscape_three.jpg";
import logo2 from "./components/images/logo2.jpg";
import logo3 from "./components/images/logo3.png";

export const template = [
  {
    textt:
      "This is to certify that <<name>> has successfully completed the course <<course>> from <<startDate>> to <<endDate>>",
    Header: "Certificate of Completion",
    subHeader: "CDAC-HYDERABAD",
    BGimg: blanklandscape,
    Simg1: signone,
    s1x: 100,
    s1y: 400,
    Qimg: qr,
    Qx: 325,
    Qy: 400,
    Limg1: cdaclogo,
    L1x: 650,
    L1y: 70,
    clientid: "1001",
    tid: "t1",
  },

  {
    textt:
      "This is to certify that <<name>> has successfully completed the training program <<course>> from <<startDate>> to <<endDate>>",
    Header: "Certificate of Training Completion",
    subHeader: "CDAC-HYDERABAD",
    BGimg: blank_landscape_two,
    Simg1: signone,
    s1x: 100,
    s1y: 400,
    Simg2: signtwo,
    s2x: 500,
    s2y: 400,
    Qimg: qr,
    Qx: 325,
    Qy: 400,
    Limg1: cdaclogo,
    L1x: 650,
    L1y: 50,
    Limg2: logo2,
    L2x: 650,
    L2y: 30,
    clientid: "1002",
    tid: "t2",
  },
  {
    textt:
      "This is to certify that <<name>> has successfully completed the workshop <<course>> from <<startDate>> to <<endDate>>",
    Header: "Workshop Completion Certificate",
    subHeader: "CDAC-HYDERABAD",
    BGimg: blank_landscape_three,
    Simg1: signone,
    s1x: 50,
    s1y: 400,
    Simg2: signtwo,
    s2x: 200,
    s2y: 400,
    Simg3: signthree,
    s3x: 550,
    s3y: 400,
    Qimg: qr,
    Qx: 390,
    Qy: 400,
    Limg1: cdaclogo,
    L1x: 50,
    L1y: 30,
    Limg2: logo2,
    L2x: 580,
    L2y: 30,
    Limg3: logo3,
    L3x: 680,
    L3y: 30,
    clientid: "1003",
    tid: "t3",
  },
];
