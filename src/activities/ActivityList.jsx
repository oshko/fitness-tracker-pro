import { Link } from "react-router";


export default function ActivityList({ activities, syncActivities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          <Link to={`/activities/${activity.id}`}>
            <ActivityListItem
              activity={activity}
              syncActivities={syncActivities}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  

  return (
    <p>
      {activity.name}
      
    </p>
  );
}
