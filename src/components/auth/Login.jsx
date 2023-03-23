import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";

export default function Login() {
    const [emailUsername, setEmailUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [alertError, setAlertError] = useState(false);

    const { login } = useContext(AuthContext);

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login({
            emailUsername: emailUsername,
            password: password,
        });

        console.log(res);

        if (res.status) {
            navigate("/", { replace: true });
        }
        // else {
        //     setAlertError(true);
        //     setError(res);
        // }
    };

    return (
        <>
            <div className="Auth-form-container">
                <form onSubmit={handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address or Username</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter email or username"
                                onChange={(e) =>
                                    setEmailUsername(e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {alertError && (
                            <div
                                class="alert alert-warning alert-dismissible fade show  mt-3"
                                role="alert"
                            >
                                <strong>Fail!</strong>
                                {error}
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                            </div>
                        )}

                        <div className="d-grid gap-2 my-3">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => setAlertError(false)}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
