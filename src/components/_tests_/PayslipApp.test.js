import React from 'react';
import PayslipApp from '../PayslipApp';

import {render, screen, fireEvent} from '@testing-library/react';

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
        expect(element).toBeTruthy();
    });

    // testing the form here since it relies on prop functions from this
    // component
    it('should render the form for adding a new employee', () => {
      render(<PayslipApp />);
      fireEvent.change(screen.getByLabelText(/First Name/i),     { target: { value: 'testFirst' } });
      firesEvent.change(screen.getByLabelText(/Last Name/i),      { target: { value: 'testLast'  } });
      fireEvent.change(screen.getByLabelText(/Annual Salary/i),  { target: { value: '120000' } });
      fireEvent.change(screen.getByLabelText(/Superannuation/i), { target: { value: '10'     } });
      fireEvent(
        screen.getByText('submit'),
        new MouseEvent('click', { bubbles: true, cancelable: true, })
      );
      const newRow = screen.getByText('testFirst');
    });
})


