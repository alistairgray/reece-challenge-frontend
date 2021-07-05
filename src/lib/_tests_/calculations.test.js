import { calculate } from "../calculations";

const testEmployee = {
  id: 457613,
  firstName: 'First',
  lastName: 'Last',
  annualSalary: 60050,
  super: 0.09,
};

const testEmployeeWithTax = {
  id: 457613,
  firstName: 'First',
  lastName: 'Last',
  annualSalary: 60050,
  super: 0.09,
  incomeTax: 922,
  grossIncome: 5004,
  netIncome: 4082
};

const taxBrackets = [
  {min: 0, max: 18200, rate: 1, fee: 0},
  {min: 18201, max: 37000, rate: 0.19, fee: 0},
  {min: 37001, max: 80000, rate: 0.325, fee: 3572},
  {min: 180000, max: 99999999, rate: 0.45, fee: 54547}
]; // taxBrackets[]

describe('Tax Calculation library', () => {

  it('should output correct gross income', () => {
    const salary = testEmployee.annualSalary
    const grossIncome = Math.floor(salary/12);
    expect(grossIncome).toEqual(testEmployeeWithTax.grossIncome);
  });

  it('should determine annual salary does not fit first tax bracket', () => {
    const salary = testEmployee.annualSalary
    let bracketCheck = true;
    for(let bracket of taxBrackets){
      if(salary < bracket.max){
        bracketCheck = false
      }
    }
    expect(bracketCheck).toBe(false)
  });

  it('should determine that the annual salary fits the third bracket', () => {
    const salary = testEmployee.annualSalary
    let bracketCheck = null;
    let bracketCount = 0;
    for(let bracket of taxBrackets){
      if(salary < bracket.max){
        bracketCheck = true
        bracketCount ++
        break
      } else {
        bracketCheck = false
        bracketCount ++
      }
    }
    expect(bracketCount).toBe(3)
  });
 
  
  it('should export the calcuate() function', () => {
    expect(typeof calculate).toBe('function');
  });

  it('should return the correct calculations in an object', () => {
    const output = calculate(testEmployee);
    expect(output).toEqual(testEmployeeWithTax);
  });
});