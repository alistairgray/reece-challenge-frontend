import React, { useEffect, useState } from "react";
import employeeInfo from "../lib/employeeInfo";
import { calculate } from "../lib/calculations";

// My desire is for a table structure to show the values
// of the payslip. A grid seems to be the right choice as it
// offers responsive design options

const PayslipTable = (props) => {

    // TODO: Function that takes selected employee as argument
    // checks for employee within array of object and outputs result
    // grossIncome()

    const handleCalculate = () => {
        
    } // handleCalculate()

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const employeesWithTax = props.employees.map(calculate);
        setEmployees(employeesWithTax)
    }, []);

    return(
        <div>
            <div id="outer-table">
                <h3>Monthly Payslip Breakdown</h3>
                <ul>
                    {employeeInfo.map((data) => {
                        return(
                            <li id="employee-details" key={data.id}>
                                EmployeeID: {data.id},
                                First Name: {data.firstName}, 
                                Last Name: {data.lastName}, 
                                Annual Salary: {data.annualSalary},
                                Superannuation: {data.super*100}%,
                                Gross Income: {props.grossIncome},
                                Income Tax: {props.incomeTax},
                                Net Income: {props.netIncome}
                            </li>
                        )
                    })}
                </ul>
                
                <button onClick={handleCalculate}>Calculate Payslip</button>
            </div>
        </div>
    )
}

export default PayslipTable;