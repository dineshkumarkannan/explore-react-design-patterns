import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useLang } from "../hooks/useLang";

const dashboard = () => {
  const authState = useAuth();
  const { t } = useLang();

  useEffect(() => {
    // console.log(authState);
  }, []);

  return (
    <div className="w-[inherit] text-center mt-[5%] text-6xl">
      {t("welcome")}, {authState?.user?.name}
    </div>
  );
};

export default dashboard;
