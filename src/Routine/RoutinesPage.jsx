import { useEffect, useState } from "react";
import { getRoutines } from "../api/activities";
import { Link } from "react-router";
import RoutineForm from "./RoutineForm";
import { useAuth } from "../auth/AuthContext";
const RoutinesPage = () => {
  const { token } = useAuth();
  const [routines, setRoutines] = useState(null);
  const fetchRoutines = async () => {
    const data = await getRoutines();
    setRoutines(data);
  };
  useEffect(() => {
    fetchRoutines();
  }, []);

  if (!routines) {
    return (
      <>
        <p>There is not Routine defined!</p>
      </>
    );
  }

  return (
    <section>
      <h1>All Routines</h1>
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            <Link to={`/routines/ ${routine.id}`}>{routine.name}</Link>
          </li>
        ))}
      </ul>
      {token && <RoutineForm token={token} fetchRoutines={fetchRoutines} />}
    </section>
  );
};

export default RoutinesPage;
