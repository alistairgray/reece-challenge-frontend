import React from "react";


// My desire is for a table structure to show the values
// of the payslip. A grid seems to be the right choice as it
// offers responsive design options

const PayslipTable = (props) => {

    // TODO: Function that takes selected employee as argument
    // checks for employee within array of object and outputs result
    // grossIncome()

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
        </div>
    )
}

export default PayslipTable;