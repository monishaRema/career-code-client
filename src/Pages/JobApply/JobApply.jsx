import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;
    console.log(linkedIn, gitHub, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      gitHub,
      resume,
    };

    axios
      .post("http://localhost:5000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Application Successfully Done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>
        JOb Apply For This Job: <Link to={`/jobs/${jobId}`}>details</Link>
      </h2>

      <form onSubmit={handleApplyForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="My LinkedIn Link"
          />

          <label className="label">GitHub</label>
          <input
            type="url"
            name="gitHub"
            className="input"
            placeholder="my gitHub page"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Name"
          />
          <input className="btn" type="submit" value="Apply Here" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
