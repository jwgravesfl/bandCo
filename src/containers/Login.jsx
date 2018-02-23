import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainDiv = styled.div `
            .container {
            padding-top: 5em;
            text-align: center;
            }
        `; 

export default class Login extends Component {
    render() {
        return(
            <MainDiv>
                <div className="container">
                <Link to='/CreateNewUser'>Create New User</Link>
                </div>
            </MainDiv>
        )
    }
}