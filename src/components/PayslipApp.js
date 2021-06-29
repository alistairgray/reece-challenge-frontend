import React from 'react';
import { PayslipTable } from './PayslipTable';

const PayslipApp = () => {
    return(
        <div>
            <h1>Your Payslip</h1>
            <div>
                <PayslipTable />
            </div>
        </div>
    )
};

export default PayslipApp;