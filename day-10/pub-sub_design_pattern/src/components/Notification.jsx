
const sentimentStyle = {
  success: "bg-green-100 text-green-600",
  info: "bg-gray-100 text-gray-600",
  danger: "bg-red-100 text-red-600",
};

const Notification = ({ sentiment = 'info', message, onClose }) => {  
    return (
      <div className={`${sentimentStyle[sentiment]} mb-2 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in`}>
        <span>✅</span>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-3 text-white font-bold hover:text-gray-200 cursor-pointer"
        >
          ✖
        </button>
      </div>
    );
}

export default Notification