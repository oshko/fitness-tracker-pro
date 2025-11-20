import { useParams, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { deleteActivity, getActivity } from "../api/activities";
import { useEffect, useState } from "react";

export default function ActivityItemDetail() {
  const { activityId } = useParams();
  console.log(activityId);
  const { token } = useAuth();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tryDelete = async () => {
    setError(null);
    try {
      await deleteActivity(token, activityId);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    const fetchActivity = async () => {
      const data = await getActivity(activityId);
      setActivity(data);
    };
    fetchActivity();
  }, [activityId]);

  if (!activity) {
    return <div>Loading activity...</div>;
  }

  return (
    <div>
      <p>Activity ID: {activity.id}</p>
      <p>Activity Name: {activity.name}</p>
      <p>Description: {activity.description}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </div>
  );
}
