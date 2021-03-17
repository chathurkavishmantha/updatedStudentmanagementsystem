import React, { Component } from 'react'
import EmployeeService from './services/EmployeeService'

class ListEmployteeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                    employee : []
        }
    } 

    componentDidMount(){
        EmployeeService.getEmployee().then((res) =>{
            this.setState({
                employee:res.data
            });
            // console.log(res.data);
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <table className="table table-scriped table-boardered">

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th> Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employee.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }
}

export default ListEmployteeComponent