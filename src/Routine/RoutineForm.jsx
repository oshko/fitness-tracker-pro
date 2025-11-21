import { createRoutine } from "../api/activities";
export default function RoutineForm({ token, fetchRoutines }) {
  const handleCreateRoutine = async (FormData) => {
    const data = { name: FormData.get("name"), goal: FormData.get("goal") };
    await createRoutine(token, data);
    fetchRoutines();
  };
  return (
    <>
      <h1>Create New Routine</h1>
      <form action={handleCreateRoutine}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Goal:
          <input type="text" name="goal" />
        </label>
        <button>Create routine</button>
      </form>
    </>
  );
}
