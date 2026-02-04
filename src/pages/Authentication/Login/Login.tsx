import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { login } from "../services/auth.service";

type LoginForm = {
    email: string,
    password: string
}

export default function Login() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, } = useForm<LoginForm>()

    function registernav() {
        navigate("/register")
    }

    async function handleLogin(data: LoginForm) {

        try {

            const res = await login(data)
            localStorage.setItem('token', res['data']['access_token'])
            navigate("/")

        } catch (error) {
            alert("something went wrong")
        }

    }

    function handleInvalid() {
        alert("Form is Invalid !!!!")
    }


    return (
        <>
            <div className="login-wrapper" >
                <div className="register-card" >
                    <h2>Login</h2>

                    <Form onSubmit={handleSubmit(handleLogin, handleInvalid)} >
                        <div className="field-group">
                            <label >Email</label>
                            <Input
                                formName={register}
                                control="email"
                                type="email"
                                required
                                placeholder="Enter your email" ></Input>

                            {errors.email && <p>Email is required</p>}
                        </div>

                        <div className="field-group">
                            <label>Password</label>
                            <Input
                                formName={register}
                                control="password"
                                type="password"
                                required
                                placeholder="Enter your password" ></Input>

                            {errors.password && <p>Password is required</p>}
                        </div>

                        <Button label="Login" ></Button>
                    </Form>
                    <div className="login-link">
                        Already have an account? <a onClick={registernav} >Register</a>
                    </div>

                </div>
            </div>
        </>
    )
}