import React, { useEffect, useState } from "react";
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
                <table>
                    {employees.map((emp) => {
                        return(
                            <tr className="employee-details" key={emp.id}>
                                <tr>
                                    <th>EmployeeID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Annual Salary ($)</th>
                                    <th>Superannuation (%)</th>
                                    <th>Gross Income ($)</th>
                                    <th>Income Tax ($)</th>
                                    <th>Net Income ($)</th>
                                </tr>

                                <tr>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.annualSalary}</td>
                                    <td>{emp.super*100}</td>
                                    <td>{emp.grossIncome}</td>
                                    <td>{emp.incomeTax}</td>
                                    <td>{emp.netIncome}</td>
                                </tr>
                            </tr>
                        )
                    })}
                </table>
                
                <button onClick={handleCalculate}>Calculate Payslip</button>
            </div>
        </div>
    )
}

export default PayslipTable;