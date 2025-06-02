import React, { Suspense } from "react";
import ApplicaionStats from "./ApplicaionStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../Hooks/UseAuth";
import UseApplicationsApi from "../../Api/UseApplicationsApi";

const MyApplications = () => {
  const { user } = UseAuth();
  const {myApplicationsPromise} = UseApplicationsApi()
 
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
