import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Course management</h1>
      <p>REACT, NODE, GCP and many more courses are available here.</p>
      <Link to="about" className="btn btn-primary">
        About us
      </Link>
    </div>
  );
}

export default HomePage;
