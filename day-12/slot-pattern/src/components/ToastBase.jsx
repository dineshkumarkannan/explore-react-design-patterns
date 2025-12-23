export function ToastBase({ icon, message, action, bg }) {
  return (
    <div
      className="flex items-center gap-1.5 p-1.5 min-w-[260px] rounded-xl text-white"
      style={{
        background: bg,
      }}
    >
      <div>{icon}</div>
      <div style={{ flex: 1 }}>{message}</div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function SuccessToast(props) {
  return <ToastBase bg="#16a34a" {...props} />;
}

export function ErrorToast(props) {
  return <ToastBase bg="#dc2626" {...props} />;
}

export function InfoToast(props) {
  return <ToastBase bg="#2563eb" {...props} />;
}
