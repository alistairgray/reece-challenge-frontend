import React, { useEffect, useState } from "react";

// My desire is for a table structure to show the values
// of the payslip. A grid seems to be the right choice as it
// offers responsive design options

const PayslipTable = (props) => {

    const [cSVDownloadData, setCSVDownloadData] = useState()

    // ASSUMPTION: employee object keys are always created in the expected order, since Object.values() returns them in that order; this is fine because we create the object ourselves


    useEffect(() => {
        let employeeData = "data:text/csv;charset=utf-8, Employee ID, First Name, Last Name, Annual Salary,Superannuation,Monthly Gross Income,Monthly Income Tax,Monthly Net Income\r\n"

        props.employees.forEach((emp) => {
            employeeData += Object.values(emp).join(',') +'\r\n'
        })
        setCSVDownloadData(employeeData)
    })

    return(
        <div>
            <div id="outer-table">
                <h3>Monthly Payslip Breakdown</h3>
                <table>
                    <tr>
                        <th>EmployeeID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Annual Salary ($)</th>
                        <th>Superannuation (%)</th>
                        <th>Monthly Gross Income ($)</th>
                        <th>Monthly Income Tax ($)</th>
                        <th>Monthly Net Income ($)</th>
                    </tr>
                    {props.employees.map((emp) => {
                        return(
                            <tr className="employee-details" key={emp.id}>
                                
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.annualSalary}</td>
                                    <td>{emp.superannuation*100}</td>
                                    <td>{emp.grossIncome}</td>
                                    <td>{emp.incomeTax}</td>
                                    <td>{emp.netIncome}</td>
                                
                            </tr>
                        )
                    })}
                </table>
                <br />
                {/* <button>Calculate Payslip</button> */}
            </div>
            <a href={cSVDownloadData} download="employeepayslips.csv">Download Table</a>
        </div>
    )
}

export default PayslipTable;