import React, {useState, useEffect} from 'react';
import PayslipTable from './PayslipTable';
import { UserForm } from './UserForm';

import '../styles/styles.css';

import employeeInfo from '../lib/employeeInfo';
import { grossIncome } from '../lib/grossIncomeCalculation';
import { incomeTaxCalc } from '../lib/incomeTaxCalculation';

const PayslipApp = () => {

    const [name, setName] = useState();


    return(
        <div id="main">
            <h1>{name} Payslip</h1>
            <div className="content-wrap">
                <UserForm setName={setName}/>
                <PayslipTable />
            </div>
        </div>
    )
};

export default PayslipApp;