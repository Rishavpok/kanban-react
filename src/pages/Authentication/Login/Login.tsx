import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
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

                    <Form onSubmit={handleSubmit(handleLogin)} >
                        <div className="field-group">
                            <label >Email</label>
                            <Input
                                formName={register}
                                control="email"
                                type="email"
                                placeholder="Enter your email"
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address"
                                    }
                                }}
                            />

                            {errors.email && <p className="error-text">{errors.email.message}</p>}
                        </div>

                        <div className="field-group">
                            <label>Password</label>
                            <Input
                                formName={register}
                                control="password"
                                type="password"
                                placeholder="Enter your password"
                                rules={{
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    }
                                }}
                            />

                            {errors.password && <p className="error-text">{errors.password.message}</p>}
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