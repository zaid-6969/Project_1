const mongoose = require("mongoose");

/**
 * job description
 * resume text
 * self decsription
 *
 * technical question
 * behavior question
 * skill gaaps
 * preparation plan
 */

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "technical question is required"],
    },
    intention: {
      type: String,
      rquired: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
    },
  },
  {
    _id: false,
  },
);

const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "technical question is required"],
    },
    intention: {
      type: String,
      rquired: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
    },
  },
  {
    _id: false,
  },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "skill is required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
    },
  },
  {
    _id: false,
  },
);

const preparationPlanSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: [true, "day is required"],
  },
  focus: {
    type: String,
    required: [true, "focus is required"],
  },
  tasks: [
    {
      type: String,
      required: [true, "tasks is required"],
    },
  ],
});

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      require: [true, "Job description is required"],
    },
    resume: {
      type: String,
    },
    selfDescription: {
      type: String,
    },
    matchscore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestion: [technicalQuestionSchema],
    behavioralQuestion: [behavioralQuestionSchema],
    skillGapSchema: [skillGapSchema],
    preparationPlanSchema: [preparationPlanSchema],
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    }
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model("interview", interviewReportSchema);

module.exports = interviewReportModel;
