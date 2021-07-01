import React, {useEffect} from "react";

import employeeInfo from "../lib/employeeInfo";
import { grossIncome } from "../lib/grossIncomeCalculation";
import { incomeTaxCalc } from "../lib/incomeTaxCalculation";

// My desire is for a table structure to show the values
// of the payslip. A grid seems to be the right choice as it
// offers responsive design options

const PayslipTable = () => {

    // TODO: Function that takes selected employee as argument
    // checks for employee within array of object and outputs result
    // grossIncome()

    

    return(
        <div>
            <div id="outer-table">
                <ul className="invoice-list">
                    {employeeInfo.map((user) => {
                        return (    
                            <li key = {user.id}className="invoice-list-details">
                                <p>First Name: {user.firstName}</p>
                                <p>Last Name: {user.lastName}</p>
                                <p>Payment Period From: {user.paymentStartDate}</p>
                                <p>Payment Period To: {user.paymentEndDate}</p>
                                <p>Annual Salary: ${user.annualSalary}</p>
                                <p>Gross Income: ${user.grossIncome}</p>
                                <p>Income Tax: ${user.incomeTax}</p>

                            </li>
                        )
                    })}        
                </ul>
            </div>
        </div>
    )
}

export default PayslipTable;