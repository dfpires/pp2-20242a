import { useState, useEffect } from 'react';

function Message() {
    const [message, setMessage] = useState("Boa tarde");

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("Boa noite");
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h3>{message}</h3>
        </div>
    );
}

export default Message;