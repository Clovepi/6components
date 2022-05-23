import React, { useState } from "react";

export default function AlignText() { 
    const [ alignment, setAlignment ] = useState("center");
    return (
        <div className="AlignStars">
            <h1 style={{ textAlign: alignment }}>Which hand?</h1>
            <button onClick ={() => setAlignment("left")}>I'm a Leftie</button>
            <button onClick ={() => setAlignment("center")}>I'm Ambidextrous</button>
            <button onClick ={() => setAlignment("right")}>I'm Normal</button>
        </div>
    )
}