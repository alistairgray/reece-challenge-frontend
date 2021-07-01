import employeeInfo from "./employeeInfo";

export function incomeTaxCalc(input){
    
    const data = input

    // Arrays have the structure of:
    // Min, Max, Rate, Additional Payment
    const taxBrackets = [
        {min: 0, max: 18200, rate: 1, fee: 0},
        {min: 18201, max: 37000, rate: 0.19, fee: 0},
        {min: 37001, max: 80000, rate: 0.325, fee: 3572},
        {min: 180000, max: 99999999, rate: 0.45, fee: 54547}
    ]; // taxBrackets[]

    data.forEach(({firstName:name, annualSalary:salary, incomeTax:incomeTax}) => {

        let taxToPay = 0

        console.log('*****************************');
        console.log(`${name}'s Salary is $${salary}`);
        console.log('*****************************');

        // for...of loop necessary:
        // a forEach will continue one extra step after a return
        // I have used a for...of to utilise a break which avoids this

        // checks if salary fits within a tax bracket
        for(let bracket of taxBrackets) {
            if(salary < bracket.max) {
                console.log(bracket);
                let taxToPay = ((salary - bracket.min)*bracket.rate) + bracket.fee;

                // rounds up value
                taxToPay = Math.ceil(taxToPay)/12
                incomeTax = taxToPay
                console.log('*****************************');
                console.log(`${name}'s income tax balance is $${taxToPay}`);
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
    }); // forEach data
} // incomeTaxCalc()

incomeTaxCalc(employeeInfo);
