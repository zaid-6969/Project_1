const pdfPrase = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service");
const interViewReportModel = require("../model/interviewReport.model");
const interviewReportModel = require("../model/interviewReport.model");
const interviewRouter = require("../routes/interview.routes");

async function generateInterviewController(req, res) {

  const resumeContent = await (pdfPrase.PDFParse(Uint8Array.from(req.file.buffer))).getText();
  const { selfDescritpion, jobDescription } = req.body;

  const interViewReportByAi = await generateInterviewReport({
    resume: resumeContent.text,
    selfDescritpion,
    jobDescription,
  });

  const interViewReport = await interviewReportModel.createSearchIndex({
    user: req.user.id,
    resume:resumeContent.text,
    selfDescritpion,
    jobDescription,
    ...interViewReportByAi
  })


  res.status(201).json({
    message:'interview repost generated successfully',
    interviewRouter
  })
}

module.exports = { generateInterviewController };
