import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    _id,
    description,
    company_logo,
    company,
    requirements,
    salaryRange,
  } = job;
  return (
   
      
    <div className="card bg-gray-700 shadow-sm py-5">
      <div className="flex gap-5 px-4 items-start">
        <figure>
          <img src={company_logo} alt="comanay-logo" className="w-20" />
        </figure>
        <div>
          <h3 className="text-2xl font-bold mb-2">{company}</h3>
          <p className="flex items-center gap-1">
            {" "}
            <FaLocationPin /> {location}
          </p>
        </div>
      </div>
      <div className="card-body pb-0">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        Salary: {salaryRange.min} - {salaryRange.max}{" "}
        {salaryRange.currency.toUpperCase()}
        <p className="my-4">{description}</p>
        <div className="card-actions">
          {requirements?.map((skil, index) => (
            <div className="badge badge-outline text-white " key={index}>
              {skil}
            </div>
          ))}
        </div>
        <div className="card-actions mt-3">
          <Link className="btn btn-primary w-full" to={`/jobs/${_id}`}>Show Details</Link>
        </div>
      </div>
    </div>

  );
};

export default JobCard;
