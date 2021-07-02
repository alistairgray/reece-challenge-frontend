import React from 'react';

import employeeInfo from '../lib/employeeInfo';

export function UserForm (props) {

    const handleSelectEmployee = (ev) => {
       props.setName(ev.target.value)
    }
    
    return(
        <div>
            <div>
                <h2 id="h2-toggle-default-on">Select Employee</h2>
                <h2 id="h2-toggle-default-off">{props.name}'s</h2>
                <select onChange={handleSelectEmployee} 
                id="dropdown-list">
                    <option selected>Choose</option>
                    {employeeInfo.map((user) => {
                        return (
                    <option key={user.id} value={user.firstname}>{user.firstName}</option>
                        )})
                    }
                </select>
            
            </div>
        </div>
    )
}