import { useState, useEffect } from 'react';

function Message() {
    const [message, setMessage] = useState("Bem-vindo ao projeto!");

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("Obrigado por visitar!");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h3>{message}</h3>
        </div>
    );
}

export default Message;