import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const getDataToken = (userData) => {
    return jwt_decode(userData.accessToken);
};

export function AuthRoute() {
    const { currentUser } = useContext(AuthContext);

    return currentUser.auth ? <Outlet /> : <Navigate to="login" />;
}

export function ViewerAuthRoute() {
    const { currentUser } = useContext(AuthContext);

    return getDataToken(currentUser).role.viewer ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
}

export function SettingDeviceAuthRoute() {
    const { currentUser } = useContext(AuthContext);

    return getDataToken(currentUser).role.settingDevice ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
}

export function SettingUserAuthRoute() {
    const { currentUser } = useContext(AuthContext);

    return getDataToken(currentUser).role.settingUser ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
}

export function SimulationModeAuthRoute() {
    const { currentUser } = useContext(AuthContext);

    return getDataToken(currentUser).role.simulationMode ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
}

export function ReportAuthRoute() {
    const { currentUser } = useContext(AuthContext);

    return getDataToken(currentUser).role.report ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
}
