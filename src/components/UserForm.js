import React from 'react';

export function UserForm () {

    // const handleSelectEmployee = (name) => {
    //     setName(name)
    // }
    
    return(
        <div>
            <form>
                <h2>Select Employee</h2>
                <div id="dropdown-list">
                    <button className="dropdown-list-item">David</button>
                    <button className="dropdown-list-item">Ryan</button>
                </div>
            </form>
        </div>
    )
}