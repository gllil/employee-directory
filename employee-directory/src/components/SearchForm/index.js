import React from "react";
import "./style.css"

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-sm3">
                    <form className="text-center">
                        <input type="text" placeholder="Search" className="form-control"value={this.state.value} onChange={this.handleChange}/>
                    </form>
                    </div>
                </div>
            </div>
        )
    }

}


export default SearchForm;