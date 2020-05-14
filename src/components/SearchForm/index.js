import React from "react";
import Employees from "../Employees"
import Moment from "moment";
import "./style.css"
import employee from "../../employee.json"




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


    render(){
        let filteredEmployees = this.state.employee.filter(emp => emp.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || emp.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);

        Moment.locale("en")



        
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-sm3">
                    <form className="text-center">
                        <input type="text" placeholder="Search" className="form-control"value={this.state.search} onChange={this.updateSearch.bind(this)}/>
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