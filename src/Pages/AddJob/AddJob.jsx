import React from "react";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
  };
  return (
    <section className=" bg-gray-200 py-20">
      <div className="container ">
        <h2 className="text-3xl text-black text-center">Add Job</h2>

        <div className="">

        <form className="w-md flex gap-3  " onSubmit={handleAddJob}>
          <h3 className=" text-black">Basic Info</h3>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Page details</legend>

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

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">job Type</legend>

            <div className="filter">
              <input
                className="btn filter-reset"
                type="radio"
                name="jobType"
                aria-label="On-Site"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Remote"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Hybrid"
              />
            </div>
          </fieldset>
          
          {/* job category */}

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Page details</legend>
            <select defaultValue="job category" className="select">
              <option disabled={true}>JOb Category</option>
              <option>Engineerig</option>
              <option>Marketing</option>
              <option>Financing</option>
            </select>
          </fieldset>

          {/* Application Deadline */}

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Application Deadline</legend>
            <input type="date" className="input" />
          </fieldset>
        </form>
        </div>
      </div>
    </section>
  );
};

export default AddJob;
