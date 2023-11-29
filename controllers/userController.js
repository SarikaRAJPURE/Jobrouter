import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";

export const getCurrentUser = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: "get current user" });
};

export const getApplicationStats = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: "get application status" });
};

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
