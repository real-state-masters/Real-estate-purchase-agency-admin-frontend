import React from 'react'
import { Remove } from "../PropsContainer/logos"

const RemoveItemContainer = () => {
    return (
        <div className="prop-item remove-item" style={{ marginRight: "50px" }}>
            <span className="title">Remove</span>
            <Remove></Remove>
        </div>
    )
}

export default RemoveItemContainer