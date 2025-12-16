import React, { useState } from "react";
import { CartContext, ThemeContext, UserContext } from "../context";

export function AppProviders({ children }) {
  const [user, setUser] = useState({ name: "Test" });
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CartContext.Provider value={{ cart, setCart }}>
          {children}
        </CartContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
