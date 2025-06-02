import React, { use } from "react";
import JobApplicaionsRow from "./JobApplicaionsRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications)
  return (
    <div className="container mx-auto px-5">
      <h3 className="text-4xl font-bold mb-3">Job Applied So Far : {applications.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
 
          <thead className="text-pink-600 text-xl font-semibold">
            <tr>
              <th>
               SL
              </th>
              <th>Job</th>
              <th>Company</th>
              <th>F</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
        
            {
               applications?.map((application,index)=> <JobApplicaionsRow key={index}
               
               application={application}
               index={index}
               >

               </JobApplicaionsRow>) 
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
