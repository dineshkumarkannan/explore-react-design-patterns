import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLang } from "../hooks/useLang";

const auth = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLang();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(userName, password);
    if (ok) navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="w-[95%] md:w-[30%] mt-[10%] mx-auto py-6 border-2">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] flex flex-col items-center gap-5"
      >
        <div className="w-[80%] flex flex-col gap-2">
          <label htmlFor="userName" className="text-2xl">
            {t("user_name")}
          </label>
          <input
            type="text"
            name="userName"
            placeholder={t("please_enter_name")}
            value={userName}
            onChange={handleChange}
            className="w-[100%] border-b-2 p-1"
          />
        </div>
        <div className="w-[80%] flex flex-col gap-2">
          <label htmlFor="password" className="text-2xl">
            {t("password")}
          </label>
          <input
            type="password"
            name="password"
            placeholder={t("please_enter_password")}
            value={password}
            onChange={handleChange}
            className="w-[100%] border-b-2 p-1"
          />
        </div>
        <button
          type="submit"
          className="p-2 border-2 cursor-pointer hover:bg-gray-400"
        >
          {t("submit")}
        </button>
        <p className="text-xs text-gray-500 mt-2 italic">
          (Use <span className="font-semibold">admin</span> /{" "}
          <span className="font-semibold">admin</span> to log in)
        </p>
      </form>
    </div>
  );
};

export default auth;
