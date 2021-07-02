import React from "react";

import employeeInfo from "../lib/employeeInfo";

// My desire is for a table structure to show the values
// of the payslip. A grid seems to be the right choice as it
// offers responsive design options

const PayslipTable = (props) => {

    // TODO: Function that takes selected employee as argument
    // checks for employee within array of object and outputs result
    // grossIncome()

    const handleCalculate = () => {
        
        // check if first name in state matches an employee
        employeeInfo.forEach((element) => {
            if(element.firstName === props.name){
                const taxBrackets = [
                    {min: 0, max: 18200, rate: 1, fee: 0},
                    {min: 18201, max: 37000, rate: 0.19, fee: 0},
                    {min: 37001, max: 80000, rate: 0.325, fee: 3572},
                    {min: 180000, max: 99999999, rate: 0.45, fee: 54547}
                ]; // taxBrackets[]

                const salary = element.annualSalary;
                props.setSalary(salary);
                props.setGrossIncome(Math.floor(salary/12));
                const superannuation = element.super;
                props.setSuperann(superannuation*100);
                let taxToPay

                for(let bracket of taxBrackets) {
                    if(salary < bracket.max) {
                        console.log(bracket);
                        let taxToPay = ((salary - bracket.min)*bracket.rate) + bracket.fee;
        
                        // rounds up value
                        taxToPay = Math.ceil(taxToPay/12)
                        props.setIncomeTax(taxToPay);
                        console.log('*****************************');
                        console.log(`${props.name}'s income tax balance is $${taxToPay}`);
                        console.log('-----------------------------');
                        break;
        
                        // otherwise it adds to a running total of 
                        // marginal tax
                    } else {
                        console.log(bracket);
                        taxToPay += ((bracket.max - bracket.min)*bracket.rate) + bracket.fee;
                        console.log(`Running Total: ${taxToPay}`);
                    }
                } // for...of taxBrackets
            } // conditional - employee name
        }) // forEach employeeInfo
    } // handleCalculate()

    return(
        <div>
            <div id="outer-table">
                <h3>Monthly Payslip Breakdown</h3>
                <p>Annual Salary: ${props.salary}</p>
                <p>Gross Income: ${props.grossIncome}</p>
                <p>Income Tax: ${props.incomeTax}</p>
                <p>Superannuation Rate: {props.superann}%</p>
                <p>Superannuation Contribution: ${Math.ceil((props.grossIncome-props.incomeTax)*(props.superann/100))}</p>
                <p><strong>Net Income: ${props.grossIncome-props.incomeTax-(Math.ceil((props.grossIncome-props.incomeTax)*(props.superann/100)))}</strong></p>
                
                <button onClick={handleCalculate}>Calculate Payslip</button>
            </div>
        </div>
    )
}

export default PayslipTable;