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
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto">
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2 ">
        <figure>
          <img src={company_logo} alt="comanay-logo" className="w-30" />
        </figure>
        <div>
          <h3>{company}</h3>
          <p className="flex items-center gap-1">
            {" "}
            <FaLocationPin /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        Salary: {salaryRange.min} - {salaryRange.max}{" "}
        {salaryRange.currency.toUpperCase()}
        <p className="my-4">{description}</p>
        <div className="card-actions justify-end">
          {requirements?.map((skil, index) => (
            <div className="badge badge-outline text-white " key={index}>
              {skil}
            </div>
          ))}
        </div>
        <div className="card-actions mt-3">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default JobCard;
