import React from "react";

import { CSVLink} from "react-csv";

// My desire is for a table structure to show the values
// of the payslip. A grid seems to be the right choice as it
// offers responsive design options

const PayslipTable = (props) => {


    const employeeData = props.employees.map( (emp) => {
        return(
        emp.id,
        emp.firstName,
        emp.lastName,
        emp.annualSalary,
        emp.superannuation,
        emp.grossIncome,
        emp.incomeTax,
        emp.netIncome
        )
        
    });

    const csvData = [
        ["employeeID",
        "firstname",
        "lastname",
        "annualsalary",
        "superannuation",
        "monthlygrossincome",
        "monthlyincometax",
        "monthlynetincome"],
        [employeeData]
    ];

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

            
            <CSVLink data={csvData}>Download Table</CSVLink>
        </div>
    )
}

export default PayslipTable;