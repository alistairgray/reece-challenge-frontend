import React, {useEffect, useState} from 'react';
import PayslipTable from './PayslipTable';
import { UserForm } from './UserForm';

import '../styles/styles.css';

const PayslipApp = () => {

    const [name, setName] = useState();
    const [salary, setSalary] = useState(0);
    const [incomeTax, setIncomeTax] = useState(0);
    const [grossIncome, setGrossIncome] = useState(0);
    const [superann, setSuperann] = useState(0);

    return(
        <div id="main">
            <h1>Your Payslip</h1>
            <div className="content-wrap">
                <UserForm setName={setName}/>
                <PayslipTable name={name} salary={salary} setSalary={setSalary} incomeTax={incomeTax} setIncomeTax={setIncomeTax} grossIncome={grossIncome}setGrossIncome={setGrossIncome} superann={superann} setSuperann={setSuperann}/>
            </div>
        </div>
    )
};

export default PayslipApp;