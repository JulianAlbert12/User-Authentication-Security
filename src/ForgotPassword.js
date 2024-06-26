import { Link } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitizing user inputs

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleForgotPassword = async () => {
        try {
            // Check if the user's email is verified before allowing password reset
            const user = auth.currentUser;
            if (user && user.emailVerified) {
                await sendPasswordResetEmail(auth, DOMPurify.sanitize(email));
                setSuccessMsg("Password reset email sent. Check your inbox.");
            } else {
                setErrMsg("Please verify your email before resetting the password.");
            }
        } catch (error) {
            console.error(error);
            setErrMsg(error.message);
        }
    }

    return (
        <section>
            <h1>Forgot Password</h1>
            {errMsg && <p className="errmsg">{errMsg}</p>}
            {successMsg && <p className="successmsg">{successMsg}</p>}
            <form onSubmit={(e) => {
                e.preventDefault();
                handleForgotPassword();
            }}>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <button className="sign-in-button" type="submit">Reset Password</button>
            </form>
            <br></br>

            <hr />
            <br></br>
            <p>Remember your password? <Link className="register-link" to="/User-Authentication">Sign In</Link></p>
            <br></br>
            <p>Don't have an account? <Link className="register-link" to="/register">Register</Link></p>
        </section>
    );
}

export default ForgotPassword;
