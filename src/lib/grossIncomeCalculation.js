import employeeInfo from "./employeeInfo";

export function grossIncome(input) {
    const data = input

    // Calculates gross income for each object
    data.forEach(element => {
        let grossIncome = element.annualSalary/12
        data.grossIncome = grossIncome

        // Check if gross income value has decimals and round down
        if(grossIncome % 0 != 0){
            grossIncome = Math.floor(grossIncome);
            data.grossIncome = grossIncome
        } 
        console.log(grossIncome);
    }); // dataForEach
} // grossIncome()

grossIncome(employeeInfo);