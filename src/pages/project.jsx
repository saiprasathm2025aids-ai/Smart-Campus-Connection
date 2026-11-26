import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="dashboard">
      <h1>Smart Campus Connect</h1>
      <p>Welcome to the Campus Digital Platform</p>

      <div className="cards">
        <div className="card">
          <h3>Announcements</h3>
          <p>View college announcements</p>
        </div>

        <div className="card">
          <h3>Events</h3>
          <p>View upcoming events</p>
        </div>

        <div className="card">
          <h3>Internships</h3>
          <p>Explore internship opportunities</p>
        </div>

        <div className="card">
          <h3>Complaints</h3>
          <p>Submit and track complaints</p>
        </div>

        <div className="card">
          <h3>Lost & Found</h3>
          <p>Find lost items</p>
        </div>
      </div>

      <Link to="/tasks">
        <button>View Tasks</button>
      </Link>
    </div>
  );
}

export default Project;