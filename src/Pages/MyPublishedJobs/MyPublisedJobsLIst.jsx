import React, { use } from 'react';
import JobCard from '../Shared/JobCard';
import { Link } from 'react-router';

const MyPublisedJobsLIst = ({MyPostedJobsPromise}) => {

    const jobs = use(MyPostedJobsPromise)
    return (
        <div>
            <h2 className='text-3xl font-bold'>Job Published by You:{jobs.length}</h2>
        <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>SL</th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Viw Application</th>
      </tr>
    </thead>
    <tbody>

        {
            jobs?.map((job,index) =>   <tr key={job._id}>
        <th>{index + 1}</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td><Link className='btn btn-sm btn-primary' to={`/applications/${job._id}`}>View Applications</Link></td>
      </tr>)
        }
    
    </tbody>
  </table>
</div>
</div>
    );
};

export default MyPublisedJobsLIst;