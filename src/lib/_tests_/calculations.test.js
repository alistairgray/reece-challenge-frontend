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

describe('Tax Calculation library', () => {
  
  it('should export the calcuate() function', () => {
    expect(typeof calculate).toBe('function');
  });

  it('should return the correct calculations in an object', () => {
    const output = calculate(testEmployee);
    expect(output).toEqual(testEmployeeWithTax);
  });
});