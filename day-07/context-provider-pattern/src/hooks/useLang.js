import { useContext } from "react";
import { LangContext } from "../context";

const useLang = () => {
  const { lang, toggleLang, t } = useContext(LangContext);
  return { lang, toggleLang, t };
};

export { useLang };
