import { useEffect, useState } from 'react';

function WidthButton({ width }: { width: number }) {
    const [widthAux, setWidthAux] = useState<number>(100);
    useEffect(() => {
        setWidthAux(width);
    }, [width]);
    return (
        <button style={{width: `${widthAux}px`, backgroundColor: 'cyan'}}> 
            OK
        </button>
    );
}
export default WidthButton;