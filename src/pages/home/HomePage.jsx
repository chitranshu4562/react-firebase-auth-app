import {useContext} from "react";
import AuthContext from "../../authContext.jsx";

export default function HomePage() {
    const authContext = useContext(AuthContext);

    const handleLogout = () => {
        authContext.setIsAuthenticated(false);
    }

    return (
        <>
            <div className="d-flex justify-content-end">
                <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            </div>
            <h1>Home Page</h1>
        </>
    )
}
