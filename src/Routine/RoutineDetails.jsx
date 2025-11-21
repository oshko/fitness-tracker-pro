import { useParams } from "react-router";
import { getRoutines } from "../api/activities";
import { useEffect, useState } from "react";
import SetFrom from "./Set/SetFrom";
import SetList from "./Set/SetList";
export default function RoutineDetails() {
  const [routines] = useState(null);
  const [routine, setRoutine] = useState(null);
  const { routineId } = useParams();
  const fetchRoutine = async () => {
    const routines = await getRoutines();
    setRoutine(routines);
    const foundRoutine = routines.find((r) => r.id === Number(routineId));
    console.log(foundRoutine);
    setRoutine(foundRoutine);
  };
  useEffect(() => {
    fetchRoutine();
  }, [routineId]);

  if (!routine) {
    return <p>There is no routine!</p>;
  }
  return (
    <>
      <h1>{routine.name}</h1>
      <p>Creator: {routine.creatorName}</p>
      <p>Goal: {routine.goal}</p>
      <SetList routines={routines} />
      <SetFrom />
    </>
  );
}
