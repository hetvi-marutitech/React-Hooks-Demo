import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function SetContext() {
  const user = {
    name: "Hetvi",
    role: "Senior Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default SetContext;