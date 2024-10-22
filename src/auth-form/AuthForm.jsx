import {useState} from "react";
import classes from "./AuthForm.module.css";

export default function AuthForm({children, onSubmit}) {
    const [authForm, setAuthForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(authForm);
        setAuthForm({
            email: '',
            password: ''
        })
    }

    const handleInputChange = (event) => {
        setAuthForm((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            <form className={`w-50 mx-auto ${classes.formContainer}`} onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handleInputChange}
                        value={authForm.email}
                    />
                </div>
                <div className="form-group my-2">
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={handleInputChange}
                        value={authForm.password}
                    />
                </div>
                <div className="d-flex justify-content-center gap-2">
                    {children}
                </div>
            </form>
        </>
    )
}
