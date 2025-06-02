import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import { baseUrl } from "../../Api/applicationsApi";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const appllications = useLoaderData();

  const handleStatus = (e, id) => {
    const selected = e.target.value;

    axios
      .patch(`${baseUrl}applications/${id}`, { status: selected })
      .then((result) => {
        if (result.data.modifiedCount) {
          Swal.fire({
            title: "Status updated",
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton:true,
            
            timer: 2000,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h2 className="font-bold text-3xl">
        {appllications.length}View Applications:{job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appllications?.map((appllication, index) => (
              <tr key={appllication._id}>
                <th>{index + 1}</th>
                <td>{appllication.applicant}</td>
                <td>Status</td>
                <td>
                  <select
                    onChange={(e) => handleStatus(e, appllication._id)}
                    defaultValue={appllication.status}
                    className="select select-ghost"
                  >
                    <option disabled={true}>Select Option</option>
                    <option value="pending">Pending</option>
                    <option value="hired">Hierd</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
