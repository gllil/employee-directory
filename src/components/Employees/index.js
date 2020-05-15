import React from "react";
import "./style.css"
import Table from "react-bootstrap/table"
import Moment from "moment";
// import { render } from "@testing-library/react";



class Employees extends React.Component {
    constructor(props){
        super(props)
        const { allEmp } = this.props
        this.state = {
            currentSort: "keyboard_arrow_down",
            employeeList: allEmp,
        }
    }




    sortByName = () => {
        const { allEmp } = this.props
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if( currentSort === "keyboard_arrow_down"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1} )
            newSort = "keyboard_arrow_up"
        }else if(currentSort === "keyboard_arrow_up"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) return -1} )
            newSort = "keyboard_arrow_down"
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
        const { allEmp } = this.props
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if( currentSort === "keyboard_arrow_down"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(a.phone < b.phone) return -1} )
            newSort = "keyboard_arrow_up"
        }else if(currentSort === "keyboard_arrow_up"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(a.phone > b.phone) return -1} )
            newSort = "keyboard_arrow_down"
        }else{
            newAllEmp = this.props.allEmp
            newSort = "keyboard_arrow_down"
            return 0
        }

        this.setState({
            currentSort: newSort,
            employeeList: newAllEmp,
        })
    }

    sortByEmail = () => {
        const { allEmp } = this.props
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if( currentSort === "keyboard_arrow_down"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(a.email < b.email) return -1} )
            newSort = "keyboard_arrow_up"
        }else if(currentSort === "keyboard_arrow_up"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(a.email > b.email) return -1} )
            newSort = "keyboard_arrow_down"
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
        const { allEmp } = this.props
        const { currentSort } = this.state

        let newAllEmp;
        let newSort;

        if( currentSort === "keyboard_arrow_down"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(Moment(a.dob.date).format("M/D/YYY") < Moment(b.dob.date).format("M/D/YYY")) return -1} )
            newSort = "keyboard_arrow_up"
        }else if(currentSort === "keyboard_arrow_up"){
            // eslint-disable-next-line
            newAllEmp = allEmp.sort((a,b) => {if(Moment(a.dob.date).format("M/D/YYY") > Moment(b.dob.date).format("M/D/YYY")) return -1} )
            newSort = "keyboard_arrow_down"
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
        const { allEmp } = this.props
        const { currentSort } = this.state
        







        Moment.locale("en")
    return (
        
        <div className="table-responsive">
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
                                <i className="material-icons">
                                {currentSort}
                                </i>
                        </button>
                    </th>
                    <th scope="col">
                        Phone
                        <button type="button" className='btn' onClick={this.onSortChangePhone} >
                                <i className="material-icons">
                                {currentSort}
                                </i>
                        </button>
                    </th>
                    <th scope="col">
                        Email
                        <button type="button" className='btn' onClick={this.onSortChangeEmail} >
                                <i className="material-icons">
                                {currentSort}
                                </i>
                        </button>
                    </th>
                    <th scope="col">
                        DOB
                        <button type="button" className='btn' onClick={this.onSortChangeDob} >
                                <i className="material-icons">
                                {currentSort}
                                </i>
                        </button>
                    </th>
                    </tr>
                </thead>
    
                <tbody>
                    {allEmp.map(empInfo =>
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
        </div>
    )
    
}
}

export default Employees;