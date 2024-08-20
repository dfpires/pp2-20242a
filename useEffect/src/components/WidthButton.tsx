import { useEffect, useState } from 'react';

function WidthButton({ width }: { width: number }) {
    const [widthStyle, setWidthStyle] = useState<number>(80);

    useEffect(() => {
        setWidthStyle(width);
    }, [width]);

    return (
        <div>
            <button style={{width: `${widthStyle}px`, backgroundColor: 'cyan'}}> OK </button>
        </div>
    );
}

export default WidthButton;