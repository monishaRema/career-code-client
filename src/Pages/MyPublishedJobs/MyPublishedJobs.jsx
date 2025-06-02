;
import UseAuth from "../../Hooks/UseAuth";
import { MyPostedJobsPromise } from "../../Api/applicationsApi";
import MyPublisedJobsLIst from "./MyPublisedJobsLIst";
import { Suspense } from "react";

const MyPublishedJobs = () => {
  const { user } = UseAuth();

  return (
    <section className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl font-bold mb-8">My Publised Job</h2>
        <Suspense fallback={"Your Applicaion is Loading"}>
          <MyPublisedJobsLIst
           MyPostedJobsPromise={MyPostedJobsPromise(user.email)}
          ></MyPublisedJobsLIst>
        </Suspense>
        
      </div>
    </section>
  );
};

export default MyPublishedJobs;
