import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import { baseUrl } from "../../Api/applicationsApi";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = UseAuth();

  const seperator = (str) => {
    return str.split(",").map((w) => w.trim());
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, requirements, responsibilities, ...newJob } =
      data;

    newJob.salaryRange = { min, max, currency };
    newJob.requirements = seperator(requirements);
    newJob.responsibilities = seperator(responsibilities);
    newJob.status = "active";

    axios
      .post(`${baseUrl}jobs`, newJob)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Job is Added And Published",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <section className=" bg-gray-200 py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl text-black text-center mb-5">Add Job</h2>

        <div className="max-w-4xl mx-auto">
          <form className="flex flex-col gap-4" onSubmit={handleAddJob}>
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <h3 className="fieldset-legend">Basic Info</h3>

              <label className="label">Job Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="job title"
              />

              <label className="label">Company</label>
              <input
                type="text"
                name="company"
                className="input w-full"
                placeholder="Company Name"
              />
              <label className="label">Company Logo</label>
              <input
                type="text"
                name="company_logo"
                className="input w-full"
                placeholder="Company Logo Url"
              />
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Company location"
              />
            </fieldset>

            {/* job type */}

            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <h3 className="fieldset-legend">job Type</h3>

              <div className="filter">
                <input
                  className="btn"
                  type="radio"
                  name="jobType"
                  aria-label="On-Site"
                  value="On-Site"
                />
                <input
                  className="btn"
                  type="radio"
                  name="jobType"
                  aria-label="Remote"
                  value="Remote"
                />
                <input
                  className="btn"
                  type="radio"
                  name="jobType"
                  aria-label="Hybrid"
                  value="Hybrid"
                />
              </div>
            </fieldset>

            {/* job category */}

            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <label htmlFor="category">Job Category</label>
              <select
                name="category"
                defaultValue="job category"
                className="select w-full"
              >
                <option disabled={true}>JOb Category</option>
                <option>Engineerig</option>
                <option>Marketing</option>
                <option>Financing</option>
              </select>
            </fieldset>

            {/* Application Deadline */}

            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <h3 className="fieldset-legend">Application Deadline</h3>
              <input
                type="date"
                name="applicationDeadline"
                className="input w-full"
              />
            </fieldset>

            {/* Salary Range */}

            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <h3 className="fieldset-legend">Salary Range</h3>

              <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
                <div>
                  <label htmlFor="min_salary" className="label">
                    Min. Salary
                  </label>
                  <input
                    type="number"
                    name="min"
                    className="input w-full"
                    placeholder="Minnimum Salary"
                  />
                </div>
                <div>
                  <label htmlFor="max_salary" className="label">
                    Max. Salary
                  </label>
                  <input
                    type="number"
                    name="max"
                    className="input w-full"
                    placeholder="Maximum Salary"
                  />
                </div>
                <div>
                  <label htmlFor="currency" className="label">
                    Currency
                  </label>
                  <select
                    name="currency"
                    id="currency"
                    className="select w-full"
                  >
                    <option defaultValue="Select Your Currency" disabled>
                      Check Your Currency
                    </option>
                    <option defaultValue="BDT">BDT</option>
                    <option defaultValue="USD">USD</option>
                    <option defaultValue="EU">Euro</option>
                    <option defaultValue="Pound">Pound</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <fieldset className=" col-span-2 fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <label htmlFor="description" className="label">
                Job Description
              </label>
              <textarea
                className="input w-full p-2"
                name="description"
                id=""
                placeholder="Your job description here..."
              ></textarea>
            </fieldset>

            {/* requierments */}

            <fieldset className=" col-span-2 fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <label htmlFor="requirements" className="label">
                Job Requirements
              </label>
              <textarea
                className="input w-full p-2"
                name="requirements"
                id=""
                placeholder="Seperated by comma(,)"
              ></textarea>
            </fieldset>

            <fieldset className=" col-span-2 fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <label htmlFor="responsibilities" className="label">
                Job Responsibilities
              </label>
              <textarea
                className="input w-full p-2"
                name="responsibilities"
                id=""
                placeholder="Seperated by comma(,)"
              ></textarea>
            </fieldset>

            <fieldset className="col-span-2 fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <label className="label">HR Name</label>
              <input
                type="text"
                name="hr_name"
                className="input w-full"
                placeholder="HR Name"
                defaultValue={user?.displayName}
              />

              <label className="label">HR Email</label>
              <input
                type="email"
                name="hr_email"
                className="input w-full"
                placeholder="HR Email"
                defaultValue={user?.email}
              />
            </fieldset>
            <input
              type="submit"
              value="Add Job"
              className="btn w-full btn-primary"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJob;
