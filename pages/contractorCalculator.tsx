import {NextPage} from "next";


interface BreakPointAndPercentage {
    breakpoint: number
    percentage: number
}


const ContractorCalculator: NextPage  = () => {
    // https://www.theaccountancy.co.uk/limited-company/dividends/how-often-can-i-take-dividends-from-my-limited-company-90705.html
    const dividends: Array<BreakPointAndPercentage> = [
        {breakpoint: 0, percentage: 0},
        {breakpoint: 4000, percentage: 7.5},
        {breakpoint: 37700, percentage: 32.5},
        {breakpoint: 150000, percentage: 38.1}]

    const tableRows = dividends.map((value) => {
        return (<tr><td>{value.breakpoint}</td> <td>{value.percentage}</td></tr>)
    })

    return <div>
        Contractor calculator
        <br/>
        Salary <input type={"number"} defaultValue={10000} step={1000}/>
        <br/>
        Dividends <input type={"number"} defaultValue={10000} step={1000}/>
        <table>
            <tr>
                <th>Lower band for tax</th>
                <th>Tax rate</th>
                <th>Tax paid for threshold</th>
                <th>Cumulative</th>
            </tr>
            {tableRows}
        </table>
    </div>
}

export default ContractorCalculator