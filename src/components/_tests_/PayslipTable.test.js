import React from 'react';
import PayslipTable from '../PayslipApp';

import {render, screen} from '@testing-library/react';
import {shallow, mount} from 'enzyme'

describe('PayslipTable', () => {
    test('', () => {
        render(<PayslipTable employees={[]}/>)
        
    })
})