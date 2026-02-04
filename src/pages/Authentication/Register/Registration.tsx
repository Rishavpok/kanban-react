import { useNavigate } from 'react-router-dom'
import './Registration.css'
import Form from '../../../components/Form/Form';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
export default function Registration() {

    const navigate = useNavigate();


    function register() {
        navigate("/login")
    }
    return (
        <>
            <div className="login-wrapper" >
                <div className="register-card" >
                    <h2>Create Account</h2>

                    <Form>

                        <div className='field-group' >
                            <label>Email</label>
                            <Input type="email" placeholder="Enter your email" />
                        </div>
                         <div className='field-group' >
                            <label>Full name</label>
                            <Input type="text" placeholder="Enter your name" />
                        </div>
                         <div className='field-group' >
                            <label>Password</label>
                            <Input type="password" placeholder="Enter your password" />
                        </div>
                         <div className='field-group' >
                            <label>Confirm Password</label>
                            <Input type="password" placeholder="Enter your password again" />
                        </div>

                        <Button label="Register"  />

                    </Form>

                    <div className="login-link">
                        Already have an account? <a onClick={register}  >Login</a>
                    </div>

                </div>
            </div>
        </>
    )
}