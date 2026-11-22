import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Protected() {
  const [authenticated, setAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    fetch("http://localhost/CSHbackend/checksession.php", {
      credentials: "include",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Session check failed");
        return response.json();
      })
      .then((data) => {
        setAuthenticated(Boolean(data.success));
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Session error:", error);
          setAuthenticated(false);
        }
      });

    return () => controller.abort();
  }, []);

  if (authenticated === null) {
    return <p>Checking session...</p>;
  }

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}

export default Protected;
