import React, { useState } from "react";

export default function counter() {
    const [ count, Zero ] = useState(0);

    return (
        <div className="counting">
            <h1>Can you count? It's okay to use your fingers.</h1>
            <div className="buttons">
                <button onClick={() => Zero(count + 1)}>Plus One</button>
                <h2>{count}</h2>
                <button onClick={() => Zero(count - 1)}>Minus One</button>
            </div>
        </div>
    )
}