import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { Component } from "react";
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Ogrenci.css'

const bolumler = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
];

class Ogrenci extends Component {


    constructor(props){
        super(props);
        this.state={
            form: {
                adi:'',
                soyadi:'',
                no:'',
                bolum:'',
                adres:''
            },
            ogrenciler:[]
        }
    }

    onChange=(e)=> {
        debugger
        const {form} = this.state;
        form[e.target.name] = e.target.value;
        this.setState({form:form});
    }

    kaydet = () => {


        const {ogrenciler} = this.state;

        ogrenciler.push(this.state.form);

        this.setState({ogrenciler});

    }

    render() {
        return (
            <div className="form-demo">

                <div className="p-d-flex p-jc-center">
                    <div className="card">
                        <div className="p-fluid">

                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText id="adi" name="adi" onChange={e => this.onChange(e)}/>
                                    <label htmlFor="adi">Name*</label>
                                </span>
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText id="soyadi" name="soyadi" onChange={e => this.onChange(e)} />
                                    <label htmlFor="soyadi">Soyadı*</label>
                                </span>
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText id="no" name="no" onChange={e => this.onChange(e)} />
                                    <label htmlFor="no">Numarası*</label>
                                </span>
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                <Dropdown options={bolumler} optionLabel="label" placeholder="Bölüm Seçiniz" />
                                </span>
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText id="adres" name="adres" onChange={e => this.onChange(e)}/>
                                    <label htmlFor="adres">Adres*</label>
                                </span>
                            </div>
                            <Button label="Kaydet" className="p-mt-2" onClick={this.kaydet} />

                        </div>
                    </div>
                </div>

                <div style={{marginTop:"20px"}} className="card">
                    <DataTable value={this.state.ogrenciler}>
                        <Column field="adi" header="Adı"></Column>
                        <Column field="soyadi" header="Soyadı"></Column>
                        <Column field="no" header="Numarası"></Column>
                        <Column field="bolum" header="Bölüm"></Column>
                        <Column field="adres" header="Adres"></Column>
                    </DataTable>
                </div>
            </div>
        )
    }
}

export default Ogrenci;