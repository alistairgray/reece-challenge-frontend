import React from 'react';
import {render} from '@testing-library/react';

import {employeeInfo} from '../../lib/employeeInfo';

describe('PayslipTable Testing', () => {

    

    test('render the h2 of PayslipTable', () => {
        const {getByText} = render(<PayslipTable />);
        let name = employeeInfo.firstName
        const linkElement = getByText(`${name}`);
        expect(linkElement).toBeInTheDocument();
    }); // render the title of app

    test('render the user details via a map function', () => {
        const {getByText} = render(<PayslipTable />);
        const data = employeeInfo
        expect().to.equal

    }


})