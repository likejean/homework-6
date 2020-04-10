import React from "react";

export default ({ titleInput, title }) => {
    return (
        <div className="form-group">
            <label>Task Title</label>
            <input
                type="text"
                onChange={ titleInput }
                value={ title }
                className="form-control"
                id="formGroupExampleInput"
            />
        </div>
    );
}
