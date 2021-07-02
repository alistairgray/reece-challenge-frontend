import React, {useState, useEffect} from 'react';
import PayslipTable from './PayslipTable';
import { UserForm } from './UserForm';

import '../styles/styles.css';
import employeeInfo from '../lib/employeeInfo';

const PayslipApp = () => {

    const [employees, setEmployees] = useState(employeeInfo);

    return(
        <div id="main">
            <h1>Employee Payslips</h1>
            <div className="content-wrap">
                <PayslipTable employees={employees} setEmployees={setEmployees}/>
                <UserForm employees={employees} setEmployees={setEmployees}/>
            </div>
        </div>
    )
};

export default PayslipApp;