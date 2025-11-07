import { useState } from "react";
import PropTypes from "prop-types";

import { LangContext } from "../context";

const defaultLang = "en";

const translations = {
  en: {
    welcome: "Welcome",
    login: "Login",
    logout: "Logout",
    user_name: "User name",
    password: "Password",
    please_enter_name: "please enter name",
    please_enter_password: "please enter password",
    submit: "Submit",
    use: "use",
    toLogIn: "to log in",
  },
  fr: {
    welcome: "Bienvenue",
    login: "Connexion",
    logout: "Déconnexion",
    user_name: "Nom d'utilisateur",
    password: "Mot de passe",
    please_enter_name: "Veuillez entrer votre nom",
    please_enter_password: "Veuillez entrer votre mot de passe",
    submit: "Soumettre",
    use: "Utiliser",
    toLogIn: "pour vous connecter",
  },
  jp: {
    welcome: "ようこそ",
    login: "ログイン",
    logout: "ログアウト",
    user_name: "ユーザー名",
    password: "パスワード",
    please_enter_name: "名前を入力してください",
    please_enter_password: "パスワードを入力してください",
    submit: "送信",
    use: "使用",
    toLogIn: "ログインするには",
  },
};

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || defaultLang);

  const toggleLang = (lan) => {
    setLang(lan);
    localStorage.setItem("lang", lan);
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default LangProvider;
