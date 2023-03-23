// import { NavLink } from "react-router-dom";
// import Layout from "./components/help/Layout";

import { AuthProvider } from "./context/auth.context";

import MyRoute from "./routes";

export default function App() {
    // let activeStyle = {
    //     color: "red",
    // };

    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="profile"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="admin"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="login"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav> */}
            <main className="container">
                <AuthProvider>
                    {/* <Layout> */}
                    <MyRoute />
                    {/* </Layout> */}
                </AuthProvider>
            </main>
            {/* <footer>
                <p>
                    If you are an admin, you can access every page. But if you
                    are a user You will not be able to access the admin page.
                </p>
            </footer> */}
        </>
    );
}
