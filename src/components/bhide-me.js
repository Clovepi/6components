import React, { useState } from "react";

export default function hideThis() {
    const [ vision, noVision ] = useState("block")
    const [ button, noButton ] = useState("Now You See Me...")

    const handleClick = () => {
        noVision( vision === "block" ? "none" : "block")
        noButton( button === "Now You See Me..." ? "...Oops." : "Now You See Me...")
    }

    return (
        <div className="TheHidden">
            <h1 style={{ display: vision }}>Now You See Me!</h1>
            <button onClick={handleClick}>{button}</button>
        </div>
    )
}