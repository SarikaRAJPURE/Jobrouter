import React from 'react'
import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import {
    JOB_TYPE,
    JOB_STATUS,
    JOB_SORT_BY,
} from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
    return (
        <h2>
            SearchContainer
        </h2>
    )
}

export default SearchContainer
