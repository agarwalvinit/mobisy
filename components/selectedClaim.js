import '../node_modules/react-selectize/themes/index.css';
import "../resources/css/selectedClaim.css"
import React from "react";
import _ from "lodash";
import {SimpleSelect} from "react-selectize";

let SelectedClaim = React.createClass({
    getInitialState: function () {
        return {
            selectedClaimFieldName: {}
        }
    },
    claimFieldOptionValue: function (service, name) {
        let selectedClaimFieldName =  _.cloneDeep(this.state.selectedClaimFieldName);
        selectedClaimFieldName[name] = {
            id: service ? service.id : null
        };
        this.setState({
            selectedClaimFieldName
        })
    },
    logInputValue: function (event) {
        console.log(event.target.value);
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            selectedClaimFieldName: {}
        })
    },
    getOptions: function (claimFieldOption) {
        let opt = [];
        let fieldName = this.state.selectedClaimFieldName;
        for(let i = 0; i< claimFieldOption.length; i++) {
            if(claimFieldOption[i].belongsto) {
                if(!(_.isEmpty(fieldName))) {
                    for(let key in fieldName) {
                        if(fieldName[key].id === claimFieldOption[i].belongsto) {
                            opt.push({label : claimFieldOption[i].name, id: claimFieldOption[i].id, key: {i}});
                        }
                    }
                }
            } else {
                opt.push({label : claimFieldOption[i].name, id: claimFieldOption[i].id, key: {i}})
            }
        }
        if(opt.length < 1) {
            opt.push({label: "", value: ""});
        }
        return opt;
    },
    generateHTML: function (o, i) {
        let self = this,
            options;
        if(o.Claimfield.type === "DropDown") {
            options = self.getOptions(o.Claimfield.Claimfieldoption);
            // options = o.Claimfield.Claimfieldoption.map(function(omap, i) {
            //     let fieldOption = {
            //             label: "",
            //             value: "",
            //             key: i
            //         },
            //         fieldName = self.state.selectedClaimFieldName;
            //     if(omap.belongsto) {
            //         if(!(_.isEmpty(fieldName))) {
            //             for(let key in fieldName) {
            //                 if(fieldName[key].id === omap.belongsto) {
            //                     return {label : omap.name, id: omap.id, key: {i}}
            //                 }
            //             }
            //         }
            //     } else {
            //         return {label : omap.name, id: omap.id, key: {i}}
            //     }
            // });
            //options = options ? options : [{label: "", value: ""}]
        }
        return (
            <div className="input-group-lg" key={i}>
                <div>{o.Claimfield.label}</div>
                {o.Claimfield.type === "DropDown" ?
                <SimpleSelect
                    placeholder = {"select " + o.Claimfield.label}
                    onValueChange={function (service) {
                        self.claimFieldOptionValue(service,  o.Claimfield.name)
                    }}
                    options={options}>
                </SimpleSelect> :
                    <input
                        className="form-control col-sm-12 col-md-12 input-box-cont"
                        type="text"
                        placeholder="Type here"
                        onChange={self.logInputValue} />}
            </div>
        )
    },
    render: function () {
        let self = this;
        return (
            <div className="col-sm-12 col-md-12">
                {this.props.claimData.map(function (o, i) {
                    return self.generateHTML.call(this, o, i);
                })}
            </div>
        );
    }
});

module.exports = SelectedClaim;