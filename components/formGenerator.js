import "../resources/css/formGenerator.css";
import '../node_modules/react-selectize/themes/index.css';
import React from "react";
import {SimpleSelect} from "react-selectize";
import SelectedClaim from "./SelectedClaim"

let FormGenerator = React.createClass({
    getInitialState: function () {
        return {
            claimData: null
        }
    },
    setData: function (val) {
        this.setState({
            claimData: val ? val.value : null
        })
    },
    render: function () {
        let self = this,
            options = this.props.data.Claims.map(function (o) {
            return {label: o.Claimtype.name, value: o.Claimtypedetail}
        });
        return (
            <div>
                <div className="block-container">
                    <div className="col-sm-12 col-md-12">
                        <SimpleSelect
                            options={options}
                            placeholder = "Select a claim"
                            onValueChange={self.setData}>
                        </SimpleSelect>
                    </div>
                    {this.state.claimData ? <SelectedClaim claimData={this.state.claimData}/> : null}
                </div>
            </div>
        );
    }
});

module.exports = FormGenerator;