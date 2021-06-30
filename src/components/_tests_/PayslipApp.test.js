import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'

import PayslipApp from '../PayslipApp';
// Utilising Jest to create initial app foundations

describe('Document Testing', () => {

    test('should render PayslipTest component', () => {
        render(<PayslipTable />);
        const PayslipTableElement = screen.getAllByTestId('PayslipTable');
        expect(PayslipTableElement).toBeInTheDocument();
    })

    test('render the h1 of PayslipApp', () => {
        const {getByText} = render(<PayslipApp />);
        const linkElement = getByText('Your Payslip');
        expect(linkElement).toBeInTheDocument();
    }); // render the title of app

});