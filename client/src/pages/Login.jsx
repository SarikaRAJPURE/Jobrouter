import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo } from '../components'
import FormRow from '../components/FormRow'

const Login = () => {
    return (<Wrapper>
        <form className='form'>
            <Logo />
            <h4>Login</h4>
            <FormRow type="email" name="email" defaultValue="john@gmail.com" />           <Link to="/register">Register</Link>
            <FormRow type="password" name="password" defaultValue="secret123" />           <Link to="/register">Register</Link>
            <button type="submit" className='btn btn-block'>
                submit
            </button>
            <button type="button" className='btn btn-block'>
                explore the app
            </button>
            <p>
                Not a member  yet?
                <Link className='member-btn' to="/register">Register</Link>
            </p>
        </form>
    </Wrapper>
    )
}

export default Login
