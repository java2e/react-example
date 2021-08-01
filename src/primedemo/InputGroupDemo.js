import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

export class InputGroupDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }

    onChangeInput=(e)=>{

        console.log(e.target.value);
        this.setState({value:e.target.value});

    }



    render() {

        return (

            <div>
                <div className="card">
                    <h5>Addons</h5>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText onChange={e=>this.onChangeInput(e)} id="username" placeholder="Username" />
                                <label htmlFor="username">{this.state.value}</label>
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">$</span>
                                <InputText placeholder="Price" />
                                <span className="p-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">www</span>
                                <InputText placeholder="Website" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}