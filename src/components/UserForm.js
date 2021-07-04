import React, {useState} from 'react';
import { calculate } from "../lib/calculations";

export function UserForm (props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [annualSalary, setAnnualSalary] = useState('');
    const [superannuation, setSuperannuation] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const newEmployee = {
            id: Math.floor(Math.random() * 90000) + 10000,
            firstName: firstName,
            lastName: lastName,
            annualSalary: annualSalary,
            superannuation: (superannuation/100)
        }

        const addEmployee = (employee) => {
            calculate(employee)
        }

        addEmployee(newEmployee)

        props.setEmployees([...props.employees, newEmployee]);
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add a New Employee</h3>
                <label>First Name <br />
                    <input  type="text" value={firstName} onChange={ev => setFirstName(ev.target.value)}/>
                </label>
                <br />
                <label>Last Name <br />
                    <input type="text" value={lastName} onChange={ev => setLastName(ev.target.value)} />
                </label>
                <br />
                <label>Annual Salary <br />
                <input type="number" value={annualSalary} onChange={ev => setAnnualSalary(ev.target.value)} />
                </label>
                <br />
                <label>Superannuation <br />
                <input type="number" value={superannuation} onChange={ev => setSuperannuation(ev.target.value)} />
                </label>
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}