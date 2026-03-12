import { Suspense, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import UserDetails from "./components/UserDetails";
import Notifications from "./components/Notifications";
import Preferences from "./components/Preferences";
import {
  resetUserResource,
  resetNotificationResource,
  resetPreferenceResource,
} from "./resources/userResource";

function App() {
  const [userKey, setUserKey] = useState(0);
  const [notificationKey, setNotificationKey] = useState(0);
  const [preferenceKey, setPreferenceKey] = useState(0);

  const handleUserReset = () => {
    resetUserResource();
    // setUserKey((k) => k + 1);
  };

  const handleNotificationReset = () => {
    resetNotificationResource();
    // setNotificationKey((k) => k + 1);
  };

  const handlePreferenceReset = () => {
    resetPreferenceResource();
    // setPreferenceKey((k) => k + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl p-4 m-4">Notification center</h1>

      <ErrorBoundary onReset={handleUserReset} >
        <Suspense fallback={<div>Loading user...</div>}>
          <UserDetails />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <ErrorBoundary onReset={handleNotificationReset} >
              <Suspense fallback={<div>Loading notifications...</div>}>
                <Notifications />
              </Suspense>
            </ErrorBoundary>

            <ErrorBoundary onReset={handlePreferenceReset} >
              <Suspense fallback={<div>Loading preferences...</div>}>
                <Preferences />
              </Suspense>
            </ErrorBoundary>
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;