import React from 'react';
import {render} from '@testing-library/react'

import PayslipApp from './PayslipApp';
// Utilising Jest to create initial app foundations

describe('Document Testing', () => {

    test('render the h1 of PayslipApp', () => {
        const {getByText} = render(<PayslipApp />);
        const linkElement = getByText('Your Payslip');
        expect(linkElement).toBeInTheDocument();
    }); // render the title of app

    test('render PayslipTable', () => {
        const {getByText} = render(<PayslipTable />)
        
        expect(<PayslipTable />).toBeInTheDocument();
    })

});