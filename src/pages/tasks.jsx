import { Link } from "react-router-dom";

function Tasks() {
  return (
    <div className="dashboard">
      <h1>Campus Services</h1>

      <div className="cards">
        <div className="card">
          <h3>Announcements</h3>
          <p>College news and notices</p>
        </div>

        <div className="card">
          <h3>Events</h3>
          <p>Event registration</p>
        </div>

        <div className="card">
          <h3>Internships</h3>
          <p>Internship details</p>
        </div>

        <div className="card">
          <h3>Complaints</h3>
          <p>Complaint status tracking</p>
        </div>

        <div className="card">
          <h3>Lost & Found</h3>
          <p>Lost and found items</p>
        </div>
      </div>

      <Link to="/project">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default Tasks;