import React from "react";

const grievanceData = [
  {
    designation: "Customer Care",
    person: "Tanu Dubey",
    address: "Plot No. 126-127, Scheme no. 113, Vijay Nagar, Indore 452010",
    phone: "+91 6268426713",
    email: "tanu@inbestors.in",
    hours: "10.00 AM to 7.00 PM",
  },
  {
    designation: "Head of Customer Care",
    person: "Yash Thange",
    address: "Plot No. 126-127, Scheme no. 113, Vijay Nagar, Indore 452010",
    phone: "+91 6268426713",
    email: "yash@inbestors.in",
    hours: "10.00 AM to 7.00 PM",
  },
  {
    designation: "Compliance Officer",
    person: "Vinay Verma",
    address: "Plot No. 126-127, Scheme no. 113, Vijay Nagar, Indore 452010",
    phone: "+91 6268426713",
    email: "vinay@inbestors.in",
    hours: "10.00 AM to 7.00 PM",
  },
  {
    designation: "Principal Officer",
    person: "Anant Agrawal",
    address: "Plot No. 126-127, Scheme no. 113, Vijay Nagar, Indore 452010",
    phone: "+91 6268426713",
    email: "anant@inbestors.in",
    hours: "10.00 AM to 7.00 PM",
  },
];

export default function GrievanceRedressal() {
  return (
   <section className="extrapage">
     <div className="grievance-container">
      <h2>Grievance Redressal / Escalation Matrix</h2>

      <div className="table-responsive">
        <table className="grievance-table">
          <thead>
            <tr>
              <th>Designation</th>
              <th>Contact Person</th>
              <th>Address</th>
              <th>Contact No.</th>
              <th>Email ID</th>
              <th>Working Hours</th>
            </tr>
          </thead>
          <tbody>
            {grievanceData.map((row, index) => (
              <tr key={index}>
                <td>{row.designation}</td>
                <td>{row.person}</td>
                <td>{row.address}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grievance-info">
        <ul>
          <li>Step 1: Contact the RA – <b><a href="mailto:info@inbestors.in">info@inbestors.in</a></b></li>
          <li>
            Step 2: Lodge grievances via SEBI SCORES platform –{" "}
            <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
              scores.sebi.gov.in
            </a>
          </li>
          <li>
            Step 3: Use Online Dispute Resolution at{" "}
            <a href="https://smartodr.in" target="_blank" rel="noreferrer">
              smartodr.in
            </a>
          </li>
        </ul>

        <p><strong>Instructions:</strong></p>
        <ol>
          <li>This table must be displayed in office and on the website.</li>
          <li>
            For individuals, the same person can be Customer Care, Head, Compliance Officer, and Principal Officer.
          </li>
          <li>
            For non-individuals, at minimum include Compliance Officer and Principal Officer.
          </li>
        </ol>
      </div>
    </div></section>
  );
}
