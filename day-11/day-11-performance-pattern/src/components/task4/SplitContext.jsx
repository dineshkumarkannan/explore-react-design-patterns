import React, { useContext } from "react";
import { AppProviders } from "./provider/AppProviders";
import { CartContext, ThemeContext, UserContext } from "./context";

function UserProfile() {
  const { user } = useContext(UserContext);
  console.log("UserProfile render");

  return <div>User: {user.name}</div>;
}

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("ThemeSwitcher render");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Theme: {theme}
    </button>
  );
}

function CartPanel() {
  const { cart, setCart } = useContext(CartContext);
  console.log("CartPanel render");

  return (
    <button onClick={() => setCart([...cart, "item"])}>
      Cart Items: {cart.length}
    </button>
  );
}

const SplitContext = () => {
  return (
    <AppProviders>
      <h2>Context Split Demo</h2>
      <UserProfile />
      <ThemeSwitcher />
      <CartPanel />
    </AppProviders>
  );
};

export default SplitContext;
