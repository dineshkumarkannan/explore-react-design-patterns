import Toolbar from "../components/Toolbar";
import { useToast } from "../context/ToastContext";
import { ErrorToast, InfoToast, SuccessToast } from "../components/ToastBase";

const Demo = () => {
  const toast = useToast();

  toast.registerTemplate("success", SuccessToast);
  toast.registerTemplate("error", ErrorToast);
  toast.registerTemplate("info", InfoToast);

  return (
    <div>
      <Toolbar
        slots={{
          start: "start",
          center: "center",
          end: "end",
        }}
      />

      <section className="flex gap-2.5 p-10">
        <button
          className="px-4 py-2 border-2 border-emerald-400 text-emerald-600"
          onClick={() => {
            toast.showToast({
              template: "success",
              slots: {
                icon: "✅",
                message: "Profile saved successfully",
                action: <button>Undo</button>,
              },
            });
          }}
        >
          Success
        </button>
        <button
          className="px-4 py-2 border-2 border-red-400 text-red-600"
          onClick={() =>
            toast.showToast({
              template: "error",
              slots: {
                icon: "❌",
                message: "Failed to save changes",
              },
            })
          }
        >
          Error
        </button>
        <button
          className="px-4 py-2 border-2 border-blue-400 text-blue-600"
          onClick={() =>
            toast.showToast({
              template: "info",
              slots: {
                icon: "ℹ️",
                message: "New version available",
              },
            })
          }
        >
          Info
        </button>
      </section>
    </div>
  );
};

export default Demo;
