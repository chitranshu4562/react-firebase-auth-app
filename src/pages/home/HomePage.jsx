import {useContext} from "react";
import AuthContext from "../../authContext.jsx";
import {removeAuthDataFromLocalStorage} from "../../utils.js";

export default function HomePage() {
    const authContext = useContext(AuthContext);

    const handleLogout = () => {
        authContext.setIsAuthenticated(false);
        removeAuthDataFromLocalStorage();
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
