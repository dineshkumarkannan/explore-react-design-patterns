import Demo from "./pages/Demo.jsx";
import { ToastProvider } from "./providers/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  );
}

export default App;
