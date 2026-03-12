import React, { use } from "react";
import { getPreferenceResource } from "../resources/userResource";

const Preferences = () => {
  const preferences = use(getPreferenceResource());

  return (
    <div className="w-full">
      <h2 className="text-xl mb-2">Preferences</h2>
      <ul className="text-left space-y-1">
        {preferences.map((pref) => (
          <li
            key={`${pref.type}-${pref.userId}`}
            className="border border-gray-700 rounded px-2 py-1 flex justify-between"
          >
            <span>{pref.type}</span>
            <span className="text-gray-300">{pref.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preferences;
