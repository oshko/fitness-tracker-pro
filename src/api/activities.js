const API = import.meta.env.VITE_API;

/** Fetches an array of activities from the API. */
export async function getActivities() {
  try {
    const response = await fetch(API + "/activities");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}
//singe activity
export async function getActivity(id) {
  try {
    const response = await fetch(API + "/activities/" + id);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getRoutines() {
  try {
    const response = await fetch(API +'/routines');
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error)
  }
}
/**
 * Sends a new activity to the API to be created.
 * A valid token is required.
 */
export async function createActivity(token, activity) {
  if (!token) {
    throw Error("You must be signed in to create an activity.");
  }

  const response = await fetch(API + "/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(activity),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}

export async function createRoutine(token, userInput) {
  try {
    if(!token) {
      throw Error("You need to sign in to create Routine!")
    }
    const response = await fetch(API + "/routines", {
      method: "POST",
      headers: {"Content-Type":"application/json",
      Authorization: "Bearer " + token,},
      body: JSON.stringify(userInput)
    });

    if(!response.ok) {
      const result = await response.json();
      throw Error(result.message);
    }
  
  } catch (error) {
    console.error(error)
  }
}

/**
 * Requests the API to delete the activity with the given ID.
 * A valid token is required.
 */
export async function deleteActivity(token, id) {
  if (!token) {
    throw Error("You must be signed in to delete an activity.");
  }

  const response = await fetch(API + "/activities/" + id, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}
