import { fetchUser, fetchNotifications, fetchUserPreference } from "../api";

let userPromise;
let notificationPromise;
let preferencePromise;

export function getUserResource() {
  if (!userPromise) {
    userPromise = fetchUser();
  }

  return userPromise;
}

export function getNotificationResource() {
  if (!notificationPromise) {
    notificationPromise = getUserResource().then((user) =>
      fetchNotifications(user.id)
    );
  }

  return notificationPromise;
}

export function getPreferenceResource() {
  if (!preferencePromise) {
    preferencePromise = getUserResource().then((user) =>
      fetchUserPreference(user.id)
    );
  }

  return preferencePromise;
}

// export function resetUserResources() {
//   userPromise = undefined;
//   notificationPromise = undefined;
//   preferencePromise = undefined;
// }

export function resetUserResource() {
  userPromise = undefined;
}

export function resetNotificationResource() {
  notificationPromise = undefined;
}

export function resetPreferenceResource() {
  preferencePromise = undefined;
}

export function getUserResources() {
  return {
    userPromise: getUserResource(),
    notificationPromise: getNotificationResource(),
    preferencePromise: getPreferenceResource(),
  };
}
