import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome, {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Dashboard;