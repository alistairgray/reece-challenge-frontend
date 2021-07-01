import React, {useEffect, useState} from 'react';
import PayslipTable from './PayslipTable';
import { UserForm } from './UserForm';

import '../styles/styles.css';

const PayslipApp = () => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState(0);
    const [incomeTax, setIncomeTax] = useState(0);
    const [grossIncome, setGrossIncome] = useState(0);

    return(
        <div id="main">
            <h1>{name} Payslip</h1>
            <div className="content-wrap">
                <UserForm setName={setName}/>
                <PayslipTable name={name} salary={salary} setSalary={setSalary} incomeTax={incomeTax} setIncomeTax={setIncomeTax} setGrossIncome={setGrossIncome}/>
            </div>
        </div>
    )
};

export default PayslipApp;