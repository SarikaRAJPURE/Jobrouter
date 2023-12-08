import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

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

//show stats

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(
          req.user.userId
        ),
      },
    },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);
  console.log(stats);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  console.log(stats);

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };
  let monthlyApplications = [
    {
      date: "Jul 23",
      count: 12,
    },
    {
      date: "Aug 23",
      count: 9,
    },
    {
      date: "Sep 23",
      count: 3,
    },
    {
      date: "Oct 23",
      count: 12,
    },
    {
      date: "Nov 23",
      count: 9,
    },
    {
      date: "Dec 23",
      count: 3,
    },
  ];

  res
    .status(StatusCodes.OK)
    .json({ defaultStats, monthlyApplications });
  //res.send("stats");
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
