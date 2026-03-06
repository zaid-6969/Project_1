const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const interviewControler = require("../controllers/intreview.controller")
const upload = require('../middleware/file.middleware')

const interviewRouter = express.Router()


/**
 * @route POST 
 * @description create new interview report on basis of  user self description
 * @access private
 */



interviewRouter.post('/' , authMiddleware.authUser , upload.single('resume') ,interviewControler.generateInterviewController )



module.exports = interviewRouter