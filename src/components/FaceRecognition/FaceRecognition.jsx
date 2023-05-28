import React from "react"

export default function FaceRecognition( { imageUrl }) {
    return (
        <div className="center">
            <img src={imageUrl} alt=""/>
        </div>
    )
}