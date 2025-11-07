import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLang } from "../hooks/useLang";

const Layout = () => {
  const auth = useAuth();
  const { lang, toggleLang, t } = useLang();

  return (
    <div className="w-[100vw]">
      <div className="min-h-15 bg-indigo-100 flex gap-1.5 justify-end items-center px-2">
        {auth?.isAuthenticated && (
          <button
            className="text-xl text-indigo-900 cursor-pointer hover:text-indigo-500"
            onClick={auth?.logout}
          >
            {t("logout")}
          </button>
        )}
        <select
          value={lang}
          onChange={(e) => toggleLang(e.target.value)}
          className="border rounded p-1 text-sm"
        >
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 French</option>
          <option value="jp">🇯🇵 Japanese</option>
        </select>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
