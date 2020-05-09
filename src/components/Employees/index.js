import React from "react";
import "./style.css"

function Employees(props) {
    return (

                <tbody>
                    <tr>
                    <td><img alt={props.name} src={props.image} className="img-fluid"/></td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                    </tr>
                </tbody>
       
    )
}

export default Employees;