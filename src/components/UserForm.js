import React from 'react';

import employeeInfo from '../lib/employeeInfo';

export function UserForm (props) {

    const handleSelectEmployee = (ev) => {
       props.setName(ev.target.value)
    }
    
    return(
        <div>
            <div>
                <h2>Select Employee</h2>
                <select onChange={handleSelectEmployee} 
                id="dropdown-list">
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