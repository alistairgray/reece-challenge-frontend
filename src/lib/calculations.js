export function calculate (employee) {
        
            const taxBrackets = [
                {min: 0, max: 18200, rate: 1, fee: 0},
                {min: 18201, max: 37000, rate: 0.19, fee: 0},
                {min: 37001, max: 80000, rate: 0.325, fee: 3572},
                {min: 180000, max: 99999999, rate: 0.45, fee: 54547}
            ]; // taxBrackets[]

            const salary = employee.annualSalary;
            const grossIncome = Math.floor(salary/12);
            const superannuation = employee.superannuation;

            let taxToPay = 0;

            for(let bracket of taxBrackets) {
                if(salary < bracket.max) {
                    let taxToPay = ((salary - bracket.min)*bracket.rate) + bracket.fee;

                    // rounds up value
                    taxToPay = Math.ceil(taxToPay/12);
                    const incomeTax = taxToPay;
                    const netIncome = grossIncome - incomeTax;
                    employee.incomeTax = incomeTax;
                    employee.grossIncome = grossIncome;
                    employee.netIncome = netIncome;
                    employee.superannuation = superannuation;

                    break;

                    // otherwise it adds to a running total of 
                    // marginal tax
                } else {
                    taxToPay += ((bracket.max - bracket.min)*bracket.rate) + bracket.fee;
                }
            } // for...of taxBrackets
    return employee
} // calculate()