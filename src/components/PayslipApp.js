import React, {useState, useEffect} from 'react';
import PayslipTable from './PayslipTable';
import { UserForm } from './UserForm';
import { calculate } from "../lib/calculations";

import '../styles/styles.css';
import employeeInfo from '../lib/employeeInfo';

const PayslipApp = () => {

    const [employees, setEmployees] = useState(employeeInfo);

    useEffect(() => {
        const employeesWithTax = employees.map(calculate);
        setEmployees(employeesWithTax)
    }, []);

    const handleFileDrop = (ev => {
        ev.preventDefault();
        ev.stopPropagation();

        console.log('File Dropped!');

        const file = ev.dataTransfer.files[0];
        const fileReader = new FileReader();

        fileReader.readAsText(file);

        fileReader.onLoad = function() {
            const dataSet = fileReader.result;
            const result = dataSet.split('\n').map(data => data.split(','));
            console.log(result);
        }
    });

    const handleDragEnter = (ev => {
        ev.preventDefault();
        ev.stopPropagation();
    });

    const handleDragLeave = (ev => {
        ev.preventDefault();
        ev.stopPropagation();
    });

    const handleDragOver = (ev => {
        ev.preventDefault();
        ev.stopPropagation();
    });

    return(
        <div id="main" onDrop={handleFileDrop} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver}>

            <h1>Employee Payslips</h1>
            <div className="content-wrap">
                <PayslipTable employees={employees}/>
                <UserForm employees={employees} setEmployees={setEmployees}/>
            </div>
        </div>
    )
};

export default PayslipApp;