import express, { Router } from 'express'
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';
import { createListing } from '../controllers/listing.controller.js';

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin);
router.post('/google', google)
router.get('/signout', signOut)
router.post("/create", createListing);



export default router;