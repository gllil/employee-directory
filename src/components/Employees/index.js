import React from "react";
import "./style.css"
import Table from "react-bootstrap/table"
import Moment from "moment";
// import { render } from "@testing-library/react";


class Employees extends React.Component {
    constructor(props){
        super(props)
        // const { allEmp } = this.props
        this.state = {
            currentSort: "sort",
            employeeList: this.props.allEmp,
        }
    }




    sortByName = () => {
        const { employeeList } = this.state
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if(currentSort === "sort" || currentSort === "sort-down"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1} )
            newSort = "sort-up"
        }else if(currentSort === "sort-up"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) return -1} )
            newSort = "sort-down"
        }else{
            newAllEmp = this.props.allEmp
            newSort = "sort"
            return 0
        }

        this.setState({
            currentSort: newSort,
            employeeList: newAllEmp,
        })
    }

    sortByPhone = () => {
        const { employeeList } = this.state
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if(currentSort === "sort" || currentSort === "sort-down"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(a.phone < b.phone) return -1} )
            newSort = "sort-up"
        }else if(currentSort === "sort-up"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(a.phone > b.phone) return -1} )
            newSort = "sort-down"
        }else{
            newAllEmp = this.props.allEmp
            newSort = "sort"
            return 0
        }

        this.setState({
            currentSort: newSort,
            employeeList: newAllEmp,
        })
    }

    sortByEmail = () => {
        const { employeeList } = this.state
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if(currentSort === "sort" || currentSort === "sort-down"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(a.email < b.email) return -1} )
            newSort = "sort-up"
        }else if(currentSort === "sort-up"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(a.email > b.email) return -1} )
            newSort = "sort-down"
        }else{
            newAllEmp = this.props.allEmp
            newSort = "sort"
            return 0
        }

        this.setState({
            currentSort: newSort,
            employeeList: newAllEmp,
        })
    }

    sortByDOb = () => {
        const { employeeList } = this.state
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if(currentSort === "sort" || currentSort === "sort-down"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(Moment(a.dob.date).format("M/D/YYY") < Moment(b.dob.date).format("M/D/YYY")) return -1} )
            newSort = "sort-up"
        }else if(currentSort === "sort-up"){
            // eslint-disable-next-line
            newAllEmp = employeeList.sort((a,b) => {if(Moment(a.dob.date).format("M/D/YYY") > Moment(b.dob.date).format("M/D/YYY")) return -1} )
            newSort = "sort-down"
        }else{
            newAllEmp = this.props.allEmp
            newSort = "sort"
            return 0
        }

        this.setState({
            currentSort: newSort,
            employeeList: newAllEmp,
        })
    }


    
    onSortChangeName = (event) => {
        this.sortByName()
    }

    onSortChangePhone = (event) => {
        this.sortByPhone()
    }

    onSortChangeEmail = (event) => {
        this.sortByEmail()
    }

    onSortChangeDob = (event) => {
        this.sortByDOb()
    }

          
    render() {
        const { employeeList } = this.state;
        const { currentSort } = this.state






        Moment.locale("en")
    return (
        
        <Table className="tableStyle text-center" striped>
                <thead>
                    <tr>
                    <th scope="col">
                        Image
                    <button  className="btn text-left" disabled>
                    <i className="fas fa-user" />
                        </button>
                        
                    </th>
                    <th scope="col">
                        Name
                        <button type="button" className="btn"onClick={this.onSortChangeName} >
                            <i className={`fas fa-${currentSort}`}/>
                        </button>
                    </th>
                    <th scope="col">
                        Phone
                        <button type="button" className='btn' onClick={this.onSortChangePhone} >
                        <i className={`fas fa-${currentSort}`}/>
                        </button>
                    </th>
                    <th scope="col">
                        Email
                        <button type="button" className='btn' onClick={this.onSortChangeEmail} >
                        <i className={`fas fa-${currentSort}`}/>
                        </button>
                    </th>
                    <th scope="col">
                        DOB
                        <button type="button" className='btn' onClick={this.onSortChangeDob} >
                        <i className={`fas fa-${currentSort}`}/>
                        </button>
                    </th>
                    </tr>
                </thead>
    
                <tbody>
                    {employeeList.map(empInfo =>
                    <tr key={empInfo.id.value}>
                    <td><img alt={empInfo.name.first} src={empInfo.picture.thumbnail} className="img-fluid profPic"/></td>
                    <td>{empInfo.name.first} {empInfo.name.last}</td>
                    <td>{empInfo.phone}</td>
                    <td>{empInfo.email}</td>
                    <td>{Moment(empInfo.dob.date).format("M/D/YYYY")}</td>
                    </tr>
                    )}
                </tbody>
        </Table> 
        
    )
    
}
}

export default Employees;