import React from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
  const {
    title,
    location,
    _id,
    description,
    company_logo,
    company,
    requirements,
    salaryRange,
  }   = useLoaderData()
   
    return (
        <section className='container py-10 max-w-[400px] mx-auto'>
        <div className="card bg-base-100 w-96 shadow-sm">
              <div className="flex gap-3 ">
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
                  <Link  to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
                </div>
              </div>
            </div>
            </section>
    );
};

export default JobDetails;