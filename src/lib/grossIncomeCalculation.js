import employeeInfo from "./employeeInfo";

function grossIncome(input) {
    const data = input

    // Calculates gross income for each object
    data.forEach(element => {
        let grossIncome = element.annualSalary/12

        // Check if gross income value has decimals and round down
        if(grossIncome % 0 != 0){
            grossIncome = Math.floor(grossIncome);
            return grossIncome
        } 
        console.log(grossIncome);
    }); // dataForEach
} // grossIncome()

grossIncome(employeeInfo)