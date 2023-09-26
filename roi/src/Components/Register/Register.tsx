import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { style, styled } from '@mui/system';

import { NavBar } from '../SharedComponents';


const Root = styled('div')({
    padding:0,
    margin:0
})

const Main = styled('main')({
    width:'100%',
    height:'100%',
    marginTop:'10px'
})

const MainText = styled('div')({
    width:'450px',
    margin:'5% auto'    
})

const tdStyle = styled('td')({
    padding:'5px'
})

export function RegisterModal() {

    return (
        <Root>
            <NavBar />
            <Main>
                <MainText>
                <div className="title">
                        <h1>This page needs work</h1>
                        <h1>Register</h1>
                    </div>
                    <div className="body">
                        <form action="#">
                            <table>
                                <tbody>
                                    <tr>
                                        <td ><label htmlFor="username">Email</label></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="username">Name</label></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="password">Password</label></td>
                                        <td><input type="password" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type='submit'>Register</button>
                        </form>
                    </div>
                    <div className="footer">
                        <p>Already have an account?</p> 
                        <Button sx = {{ marginTop:'10px' }} component={Link} to={'/auth'} variant='contained'>Sign In</Button>
                    </div>
                </MainText>
            </Main>
        </Root>
                    
                

        
    )
}