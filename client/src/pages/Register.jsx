import React from 'react'
import { Form, redirect, useNavigation, Link } from 'react-router-dom'
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo } from '../components'
import FormRow from '../components/FormRow'
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);//converts array of arrays into object
    console.log(data);
    try {
        await customFetch.post('/auth/register', data);
        return redirect('/login');
    } catch (error) {
        return error;
    }
    return null;
}

const Register = () => {
    return (
        <Wrapper>
            <Form method='post' className='form'>
                <Logo />
                <h4>Register</h4>
                <FormRow
                    type="text"
                    name="name"
                    defaultValue="john" />
                <FormRow
                    type="text"
                    name="lastName"
                    labelText="last name"
                    defaultValue="smith" />
                <FormRow
                    type="text"
                    name="location"
                    defaultValue="earth" />
                <FormRow
                    type="email"
                    name="email"
                    defaultValue="john@gmail.com" />
                <FormRow
                    type="password"
                    name="password"
                    defaultValue="secret123" />
                <button type="submit" className='btn btn-block'>
                    submit
                </button>
                <p>
                    Already a member?
                    <Link className='member-btn' to="/login">Login</Link>
                </p>
            </Form>
        </Wrapper >

    )
}

export default Register
