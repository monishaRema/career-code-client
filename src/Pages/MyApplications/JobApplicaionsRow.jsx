import React from "react";

const JobApplicationsRow = ({ application, index }) => {
  const { title, company, company_logo } = application;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt={company} />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{title}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm">{company}</span>
      </td>
      <td>—</td>
      <th>
        <button className="btn btn-secondary btn-xs">Details</button>
      </th>
    </tr>
  );
};

export default JobApplicationsRow;
