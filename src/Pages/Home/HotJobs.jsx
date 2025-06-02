import React, { useEffect, useState , } from "react";
import JobCard from "../Shared/JobCard";



const HotJobs = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    jobsPromise
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, [jobsPromise]);

  if (loading) return <div>Loading jobs...</div>;

  return (
    <section className="py-20 bg-gray-800">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-8">Hot Jobs For You</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job._id} job={job}></JobCard>)
      ) : (
        <div>No jobs found.</div>
      )}
    </div>
    </div>
    </section>
  );
};

export default HotJobs;
