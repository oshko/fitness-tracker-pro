import { useParams } from "react-router";

export default function ActivityItemDetail() {
  const { activityId } = useParams(); // activityId = "123"

  // Now you can use this ID to fetch or display data
  console.log(activityId); // "123"

  return <div>Showing activity {activityId}</div>;
}
