import React from 'react';
import PayslipTable from '../PayslipApp';

import {render, screen} from '@testing-library/react';
import {shallow, mount} from 'enzyme'

describe('PayslipTable', () => {

    test('that the table is rendering with employee details', () => {
        render(<PayslipTable />)
        const element = screen.getAllByText('EmployeeID')
        expect(element).toBeTruthy();
    });

})