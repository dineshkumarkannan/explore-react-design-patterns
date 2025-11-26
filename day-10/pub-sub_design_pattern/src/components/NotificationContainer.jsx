import { useState } from "react"
import { useEvent } from "../hooks/useEvent"
import Notification from "./Notification";

const NotificationContainer = () => {
    const [messages, setMessages] = useState([]);

    useEvent("SHOW_NOTIFICATION", (des) => {
        const id = Date.now();
        const newNotif = { id, ...des };
        setMessages(prev => [...prev, newNotif]);

        setTimeout(() => removeNotif(id), 4000);
    });

    const removeNotif = (id) => {
        setMessages(prev => prev.filter(n => n.id !== id));
    }

    return (
        <div className="fixed top-5 right-5">
            {messages.map(notify => {
                return <Notification key={notify.id} message={notify.message} sentiment={notify.sentiment} onClose={() => removeNotif(notify.id)} />
            })}</div>
    )
}

export default NotificationContainer