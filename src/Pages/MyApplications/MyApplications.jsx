import React, { Suspense } from "react";
import ApplicaionStats from "./ApplicaionStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../Hooks/UseAuth";
import { myApplicationsPromise } from "../../Api/applicationsApi";

const MyApplications = () => {
  const { user } = UseAuth();
  return (
    <div>
      <ApplicaionStats></ApplicaionStats>
      <Suspense fallback={"Your Applicaion is Loading"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
