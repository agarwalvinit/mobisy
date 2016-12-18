import "../resources/css/claims.css"
import React from "react";
import data from "../data/data";
import Loader from "../components/loader";
import FormGenerator from "../components/formGenerator"

let Claims = React.createClass({
    getInitialState: function () {
        return {
            data: null
        }
    },
    componentDidMount: function () {
        console.log(data);
        this.setState({
            data: data
        });
    },
    render: function () {
        return (
            <div>
                <header>Add Claims</header>
                {this.state.data ? <FormGenerator data={this.state.data}/> : <Loader/>}
            </div>
        );
    }
});

module.exports = Claims;