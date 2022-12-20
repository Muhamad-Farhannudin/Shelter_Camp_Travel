import React, { Component } from 'react'
import {useLocation} from 'react-router-dom';

import Header from 'parts/Header'

function location() {
    let test = useLocation()
    console.log(test);
}
export default class LandingPage extends Component {
render() {
    return (
    <>
    <Header {...this.props}></Header>
    </>
    );
    }
}
