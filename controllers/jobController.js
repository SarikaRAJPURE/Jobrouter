import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";

//GET all jobs
export const getAllJobs = async (req, res) => {
  //console.log(req);
  //console.log(req.user);
  const jobs = await Job.find({
    createdBy: req.user.userId,
  });
  /* if (jobs.length === 0) {
    res
      .status(404)
      .json({ msg: "Currently there are no jobs to show" });
  } */
  res.status(StatusCodes.OK).json({ jobs });
};

//create a job

export const createJob = async (req, res) => {
  //const { company, position } = req.body;
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

//get a single job

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

//Update job

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: `job modified`, job: updatedJob });
};

//delete job

export const deleteJob = async (req, res) => {
  const removeJob = await Job.findByIdAndDelete(
    req.params.id
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: `job deleted `, job: removeJob });
};
