const express = require('express');
const router = express.Router();
const BlankCertSchema = require('../models/BlankCertSchema'); // Importing your Mongoose model
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const multer = require('multer');
//const upload = multer({ dest: '../images/' })

const images = [];
const imageDirPath = "images/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imageDirPath)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const uploads = multer({ storage: storage })

router.post("/", uploads.array("files"), saveCertDetails);

async function saveCertDetails(req, res){
    console.log(req.files);
    console.log(req.body);
    try {

       if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
       } else
       {
	const tid = req.body.tid;
	const header = {"content" : req.body.contenth, "x": req.body.xh, "y": req.body.yh}
	const subheader =  {"content" : req.body.contents, "x": req.body.xs, "y": req.body.ys};
	const text = {"content" : req.body.contentt, "x": req.body.xt, "y": req.body.yt};
	const BGimg = imageDirPath +  req.body.BGimgFileName;
	const Qimg =  imageDirPath + "1245.png";

	for (var i = 0; i < (req.files.length-1); i++) {
	   images[i] = {"imageName": imageDirPath + req.body['name'+i], "x": req.body['x'+i], "y": req.body['y'+i] };
	}
	images[req.files.length-1] = {"imageName": imageDirPath + Qimg, "x": req.body.qrX, "y": req.body.qrY };

	// Creating a new BlankCertSchema instance
    	const newCertificate = new BlankCertSchema({ tid, header, subheader, text, BGimg, Qimg, images });
	 // Saving the new certificate to the database
	await newCertificate.save();

	// Sending a success response
	res.status(200).json({ message: 'Blank Template data saved successfully', certificate: newCertificate });
       }
     } catch (err) {
	console.error(err);
        res.status(500).send(err);
     }
}

// PUT route to update data by ID
router.put('/:id', async (req, res) => {
  try {
    const { tid, header, subheader, text, BGimg, images } = req.body;
    const updatedCertificate = await BlankCertSchema.findByIdAndUpdate(req.params.id, {
      tid,
      header,
      subheader,
      text,
      BGimg,
      images
    }, { new: true });
    res.status(200).json({ message: 'Template data updated successfully', certificate: updatedCertificate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PATCH route to partially update data by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedCertificate = await BlankCertSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Template data partially updated successfully', certificate: updatedCertificate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET route to retrieve data by ID
router.get('/:id', async (req, res) => {
  try {
    const certificate = await BlankCertSchema.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: 'Template data not found' });
    }
    res.status(200).json({ certificate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE route to delete data by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCertificate = await BlankCertSchema.findByIdAndDelete(req.params.id);
    if (!deletedCertificate) {
      return res.status(404).json({ message: 'Template data not found' });
    }
    res.status(200).json({ message: 'Template data deleted successfully', certificate: deletedCertificate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET route to retrieve all data
router.get('/', async (req, res) => {
  try {
    const certificates = await BlankCertSchema.find();
    res.status(200).json({ certificates });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
