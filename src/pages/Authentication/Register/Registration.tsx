import { useNavigate, Link } from 'react-router-dom'
import './Registration.css'
import Form from '../../../components/Form/Form';
import Input from '../../../components/Input/Input';
import { useForm } from "react-hook-form";
import Button from '../../../components/Button/Button';
import { signUp } from '../services/auth.service';

type RegisterForm = {
    email: string
    name: string
    password: string
    confirmPassword: string
}

export default function Registration() {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>()

    const password = watch('password')

    async function handleRegister(data: RegisterForm) {
        try {
            const res = await signUp(data)
            alert('Registration completed successfully')
            if (res) {
                navigate('/login')
            }

        } catch (error) {
            alert("Something went wrong !!!")
        }
    }

    return (
        <div className="login-wrapper">
            <div className="register-card">
                <h2>Create Account</h2>

                <Form onSubmit={handleSubmit(handleRegister)}>

                    <div className='field-group'>
                        <label>Email</label>
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

                    <div className='field-group'>
                        <label>Full name</label>
                        <Input
                            formName={register}
                            control="name"
                            type="text"
                            placeholder="Enter your name"
                            rules={{
                                required: "Full name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                }
                            }}
                        />
                        {errors.name && <p className="error-text">{errors.name.message}</p>}
                    </div>

                    <div className='field-group'>
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

                    <div className='field-group'>
                        <label>Confirm Password</label>
                        <Input
                            formName={register}
                            control="confirmPassword"
                            type="password"
                            placeholder="Enter your password again"
                            rules={{
                                required: "Please confirm your password",
                                validate: value => value === password || "Passwords do not match"
                            }}
                        />
                        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}
                    </div>

                    <Button label="Register" />

                </Form>

                <div className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </div>

            </div>
        </div>
    )
}