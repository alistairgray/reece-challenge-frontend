import React from 'react';

export function UserForm (props) {

    const handleSelectEmployee = (name) => {
       props.setName(name)
    }
    
    return(
        <div>
            <div>
                <h2>Select Employee</h2>
                <div id="dropdown-list">
                    <button onClick={(() => {handleSelectEmployee('David')})}className="dropdown-list-item">David</button>
                    <button onClick={(() => {handleSelectEmployee('Ryan')})}className="dropdown-list-item">Ryan</button>
                </div>
            </div>
        </div>
    )
}