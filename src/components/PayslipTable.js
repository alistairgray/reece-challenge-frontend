import employeeInfo from "../lib/employeeInfo";
// My desire is for a table structure to show the values
// of the payslip. A grid seems to be the right choice as it
// offers responsive design options

const PayslipTable = () => {

    const name = employeeInfo.firstName

    return(
        <div>
            <h2>{name}</h2>
            <div id="outer-table">
                <ul className="invoice-list">
                    {employeeInfo.map((user) => {
                        return (    
                            <li key = {user.id}className="invoice-list-details">
                                <p>{user.firstName}</p>
                                <p>{user.lastName}</p>
                            </li>
                        )
                    })}        
                </ul>
            </div>
        </div>
    )
}

export default PayslipTable;