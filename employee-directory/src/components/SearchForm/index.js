import React from "react";
import Employees from "../Employees"
import Moment from "moment";
import "./style.css"
import employee from "../../employee.json"
import Table from "react-bootstrap/table"
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: employee,
            search: "",
        }      
    }

    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    handleNameSort(emp) {
        
        this.setState({search: emp.sort()})
    }

    render(){
        let filteredEmployees = this.state.employee.filter(emp => emp.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || emp.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
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
                <Table className="tableStyle text-center" striped>
                        <thead>
                            <tr>
                            <th scope="col">Image</th>
                            <th scope="col"><span onClick={filteredEmployees.handleNameSort}>Name</span></th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                            </tr>
                        </thead>
                {filteredEmployees.map(empInfo => (                          
                            <Employees 
                                key={empInfo.id.value}
                                image={empInfo.picture.thumbnail}
                                name={`${empInfo.name.first} ${empInfo.name.last}`} 
                                phone={empInfo.phone}
                                email={empInfo.email}
                                dob={Moment(empInfo.dob.date).format("M/D/YYYY")}
                            />
                            ))}
                     </Table>
                </div>
            </div>

        </div>

        )
        }

}


export default SearchForm;