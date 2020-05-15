import React from "react";
import Employees from "../Employees"
import Moment from "moment";
import "./style.css"
import employee from "../../employee.json"
// import { render } from "@testing-library/react";




class SearchForm extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            employee: employee,
            search: "",
        }      
    }
    

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)})
    }


    deleteValue(event){
        this.setState({search: ""})
    }


    render(){
        let filteredEmployees = this.state.employee.filter(emp => emp.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || emp.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);

        Moment.locale("en")



        
        return (
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-12 col-md-3 align-self-center">
                    <form className="text-center input-group">
                        <input type="text" placeholder="Search" name="searchField" className="form-control"value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                        <div className="input-group-append">
                            <span className="input-group-text"type="button" onClick={this.deleteValue.bind(this)}>x</span>
                        </div>
                    </form>
                    </div>
                </div>
            <div className="row">
                <div className="col">
                
                            <Employees
                                allEmp={filteredEmployees} 
                            />
                     
                </div>
            </div>

        </div>

        )
        }

}


export default SearchForm;