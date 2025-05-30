import React, { use } from "react";
import JobApplicaionsRow from "./JobApplicaionsRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications)
  return (
    <div>
      <h3 className="text-3xl">Job Applied So Far:{applications.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
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
