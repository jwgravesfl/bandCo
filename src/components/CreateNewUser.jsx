import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Form, Grid } from 'semantic-ui-react'

const MainDiv = styled.div `
            .container {
            padding-top: 5em;
            text-align: center;
            }
        `; 

export default class LoginBox extends Component {
    render() {
        return(
            <MainDiv>
                <div className="container">
                <Grid>
                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Form>
                        <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                        </Form.Field>

                        <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                        </Form.Field>
                        
                        <Form.Field>
                        <label>Address Line 1</label>
                        <input placeholder='Address Line 1' />
                        </Form.Field>
                        
                        <Form.Field>
                        <label>Address Line 2</label>
                        <input placeholder='Address Line 2' />
                        </Form.Field>
                        
                        <Form.Group widths="equal">
                        <Form.Input label='City' placeholder='City' />
                        <Form.Input label='State' placeholder='State' />
                        <Form.Input label='Zip' placeholder='Zip' />
                        </Form.Group>
                        
                        <Button type='submit'>Submit</Button>
                    </Form>
                    </Grid.Column>
                    <Grid.Column width={4}>

                    </Grid.Column>
                </Grid>
                
                
                </div>
            </MainDiv>
        )
    }
}