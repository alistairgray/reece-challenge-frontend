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

        fileReader.onload = function() {
            const dataSet = fileReader.result;
            const result = dataSet.split('\n').map(data => data.split(','));
            // Remove headers
            result.shift();
            // Remove undefined / empty data
            result.pop();
            
            // get the data from result, map over and then setState
            const newEmployeesWithTax = result.map((empRow) => {

                     const empObj = {
                        id: empRow[0],
                        firstName: empRow[1],
                        lastName: empRow[2],
                        annualSalary: empRow[3],
                        superannuation: empRow[4]
                    
                }
                return calculate(empObj)
            });
            setEmployees(newEmployeesWithTax)
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