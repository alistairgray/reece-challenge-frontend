import React from 'react';
import PayslipApp from '../PayslipApp';

import {render, screen} from '@testing-library/react';

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });

describe('PayslipApp', () => {
    test('it should render the h1', () => {
        render(<PayslipApp />)
        const element = screen.getByText('Employee Payslips')
        expect(element).toBeTruthy();
    });

    test('it should render the child component, PayslipTable', () =>{
        render(<PayslipApp />)
        const element = screen.getByText('Monthly Payslip Breakdown')
    });
})


