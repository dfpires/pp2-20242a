function ColorInput({ color, setColor }: 
    { color: string, setColor: (value: string) => void }) {
    return (
        <div>
            <label htmlFor="colorInput">Digite uma cor ou código hexadecimal: </label>
            <input
                type="text"
                id="colorInput"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
        </div>
    );
}

export default ColorInput;