export function ToastViewport({ toasts }) {
  return (
    <div className="fixed top-1.5 right-1.5 flex flex-col gap-1 z-[9999]">
      {toasts.map(({ id, ToastTemplate, slots }) => (
        <ToastTemplate key={id} {...slots} />
      ))}
    </div>
  );
}
