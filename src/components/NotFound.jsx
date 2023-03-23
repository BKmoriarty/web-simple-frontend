import { useNavigate } from "react-router-dom";

export default function NotFound() {
    let navigate = useNavigate();

    return (
        <>
            <div className="Auth-form-container">
                <div>
                    <h1>404 Not Found</h1>
                    <div className="text-center">
                        <button
                            className="d-grid gap-2 my-3 btn btn-secondary"
                            onClick={() => navigate("/", { replace: true })}
                        >
                            back to login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
