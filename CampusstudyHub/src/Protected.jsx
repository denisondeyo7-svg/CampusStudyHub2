import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Protected() {

    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {

        fetch("http://localhost/CSHbackend/checksession.php", {
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            console.log("Session response:", data);
            setAuthenticated(data.success);
        })
        .catch(error => {
            console.log("Session error:", error);
            setAuthenticated(false);
        });

    }, []);

    if (authenticated === null) {
        return <p>Checking session...</p>;
    }

    return authenticated
        ? <Outlet />
        : <Navigate to="/Login" replace />;
}

export default Protected;