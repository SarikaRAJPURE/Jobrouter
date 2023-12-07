import React from 'react'
import {
    Link,
    Form,
    redirect,
    useActionData
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

//login user functionality

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data.password);
    //before we make request to server check for errors
    const errors = { msg: "" };
    if (data.password.length < 8) {
        console.log(data.password.length);
        errors.msg = "password too short";
        console.log(errors);
        return errors;
    }
    try {
        await customFetch.post("/auth/login", data);
        toast.success("Login successful");
        return redirect("/dashboard");
    } catch (error) {
        //console.log(error);
        //toast.error(error?.response?.data?.msg);
        errors.msg = error?.response?.data?.msg;
        return errors;
    }
};

const Login = () => {
    const errors = useActionData();
    console.log(errors);
    return (<Wrapper>
        <Form method='post' className='form'>
            <Logo />
            <h4>Login</h4>
            {errors && (<p style={{ color: "red" }}> {errors.msg}</p>)}
            <FormRow type="email" name="email" defaultValue="john@gmail.com" />
            <FormRow type="password" name="password" defaultValue="secret123" />
            <SubmitBtn />
            <button type="button" className='btn btn-block'>
                explore the app
            </button>
            <p>
                Not a member  yet?
                <Link className='member-btn' to="/register">Register</Link>
            </p>
        </Form>
    </Wrapper>
    )
}

export default Login
