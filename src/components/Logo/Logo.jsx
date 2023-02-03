import React from "react";
import Tilt from 'react-parallax-tilt';

export default function Logo() {
    return (
        <div className="ma4 mt0">
            <Tilt>
                <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
                    <h1>React Parallax Tilt 👀</h1>
                </div>
            </Tilt>
        </div>
    )
}