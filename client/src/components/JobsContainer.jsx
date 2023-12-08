import React from 'react'
import Job from "./Job"
import Wrapper from '../assets/wrappers/JobsContainer'
import { useAllJobsContext } from '../pages/AllJobs';

const JobsContainer = () => {
    const data = useAllJobsContext();
    //console.log(data );
    const { jobs } = data;
    //console.log({ jobs });
    if (jobs.length === 0) {
        return (<Wrapper>
            <h2>No jobs to display...</h2>
        </Wrapper>);
    }
    return (
        <Wrapper>
            {/* <h2>
                JobsContainer
            </h2> */}
            <div className="jobs">
                {jobs.map(job => {
                    return <Job key={job._id} {...job} />
                })}
            </div>
        </Wrapper>
    )
}

export default JobsContainer