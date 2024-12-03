import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

export default function Layout({ children }) {
  const { logout, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <>
      {currentUser.auth && (
        <>
          <div className="d-flex">
            <button
              onClick={() => {
                navigate("/", { replace: true });
              }}
              className="d-grid gap-2 m-1 btn btn-primary"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/viewer", { replace: true });
              }}
              className="d-grid gap-2 m-1 btn btn-secondary"
            >
              Viewer
            </button>
            <button
              onClick={() => {
                navigate("/settingDevice", { replace: true });
              }}
              className="d-grid gap-2 m-1 btn btn-secondary"
            >
              Setting Device
            </button>
            <button
              onClick={() => {
                navigate("/settingUser", { replace: true });
              }}
              className="d-grid gap-2 m-1 btn btn-secondary"
            >
              Setting User
            </button>
            <button
              onClick={() => {
                navigate("/simulationMode", { replace: true });
              }}
              className="d-grid gap-2 m-1 btn btn-secondary"
            >
              Simulation Mode
            </button>
            <button
              onClick={() => {
                navigate("/report", { replace: true });
              }}
              className="d-grid gap-2 m-1 btn btn-secondary"
            >
              Report
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/", { replace: true });
              }}
              className="d-grid gap-2 m-1 btn btn-danger"
            >
              Logout
            </button>
          </div>

          <div className="card mt-5">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {/* <li className="list-group-item">
                                    ID: {currentUser.userData.id}
                                </li>
                                <li className="list-group-item">
                                    EMAIL : {currentUser.userData.email}
                                </li> */}
                <li className="list-group-item">
                  TOKEN :
                  <p className="text-break ">
                    {JSON.stringify(currentUser.accessToken)}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {children}
    </>
  );
}
