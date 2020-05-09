import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
// import Employees from "./components/Employees";
import "./App.css";


class App extends React.Component {




    render(){
    
    
    return (
        <Wrapper>
            <NavBar/>
            <SearchForm/>

        </Wrapper>
        )
    }
}




export default App;