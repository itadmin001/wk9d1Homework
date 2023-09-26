import React, { DetailedReactHTMLElement } from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { styled } from '@mui/system';

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
    width:'400px',
    margin:'5% auto'    
})

export function AuthModal() {

    return (
        <Root>
            <NavBar />
            <Main>
                <MainText>
                <div className="title">
                        <h1>This page needs work</h1>
                        <h1>Sign In</h1>
                    </div>
                    <div className="body">
                        <form action="#">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="username">Username or Email</label></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="password">Password</label></td>
                                        <td><input type="password" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                    <div className="footer">
                        <p>Don't have an account?</p> 
                        <Button sx = {{ marginTop:'10px' }} component={Link} to={'/register'} variant='contained'>Register</Button>
                    </div>
                </MainText>
            </Main>
        </Root>
                    
                

        
    )
}