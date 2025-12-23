import Demo from "./pages/demo";
import { ToastProvider } from "./providers/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  );
}

export default App;
