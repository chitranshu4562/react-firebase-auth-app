import {useContext, useState} from "react";
import AuthForm from "../../auth-form/AuthForm.jsx";
import AuthContext from "../../authContext.jsx";

export default function AuthenticationPage() {
    const authContext = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthentication = (values) => {
        console.log(values);
        authContext.setIsAuthenticated(true);
    }

    const handleAuthMode = () => {
        setIsLogin(!isLogin);
    }

    return (
        <>
            <AuthForm
                onSubmit={handleAuthentication}
            >
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleAuthMode}
                >Switch to {isLogin ? 'Sign Up' : 'Login'}</button>
                <button
                    className="btn btn-success"
                    type="submit"
                >{isLogin ? 'Login' : 'Sign Up'}</button>
            </AuthForm>
        </>
    )
}
