import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import Employees from "./components/Employees";
import employee from "./employee.json"
import "./components/Employees/style.css";

class App extends React.Component {

    state = {
        employee
    }

    render(){
    return (
        <Wrapper>
            <NavBar/>
            <SearchForm />
            <div className="container">
            <div className="row">
                <div className="col">
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
            {this.state.employee.map(empInfo => (
            <Employees 
                image={empInfo.picture.thumbnail}
                name={empInfo.name.first} 
                phone={empInfo.phone}
                email={empInfo.email}
                dob={Date(empInfo.dob.date)}

            />
            ))}
                     </table>
                </div>
            </div>
        </div>
        </Wrapper>
        )
    }
}


export default App;