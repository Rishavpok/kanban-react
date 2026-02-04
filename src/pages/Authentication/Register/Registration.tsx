export default function Registration() {
    return (
        <>
            <div className="login-wrapper" >
                <div className="register-card" >
                    <h2>Create Account</h2>

                    <form>
                        <div className="field-group">
                            <label>Email</label>
                            <input

                                type="email"
                                id="email"
                                placeholder="Enter your email" />
                        </div>

                        <div className="field-group">
                            <label>Full name</label>
                            <input
                                v-model="name"
                                type="text"
                                id="email"
                                placeholder="Enter your full name" />

                        </div>


                        <div className="field-group">
                            <label>Password</label>
                            <input
                                v-model="password"
                                type="password"
                                id="password"
                                placeholder="Enter your password" />
                        </div>


                        <div className="field-group">
                            <label> Confirm Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password again" />
                        </div>

                        <button type="submit" className="submit-btn">Register</button>
                    </form>

                </div>
            </div>
        </>
    )
}