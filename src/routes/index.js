// import dependency
import React from "react";
import { Routes, Route } from "react-router-dom";
// end import dependency

// pages
import Home from "../components/Home";
import SettingDevice from "../components/SettingDevice";
import SettingUser from "../components/SettingUser";
import SimulationMode from "../components/SimulationMode";
import Report from "../components/Report";
import Login from "../components/auth/Login";
import NotFound from "../components/NotFound";
import Viewer from "../components/Viewer";

import {
    AuthRoute,
    ReportAuthRoute,
    ViewerAuthRoute,
    SettingDeviceAuthRoute,
    SettingUserAuthRoute,
    SimulationModeAuthRoute,
} from "./AuthRoute";
// end pages

export default function MyRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthRoute />}>
                    <Route index path="/" element={<Home />} />

                    <Route path="/" element={<ReportAuthRoute />}>
                        <Route path="report" element={<Report />} />
                    </Route>

                    <Route path="/" element={<SettingDeviceAuthRoute />}>
                        <Route
                            path="settingDevice"
                            element={<SettingDevice />}
                        />
                    </Route>

                    <Route path="/" element={<SettingUserAuthRoute />}>
                        <Route path="settingUser" element={<SettingUser />} />
                    </Route>

                    <Route path="/" element={<SimulationModeAuthRoute />}>
                        <Route
                            path="simulationMode"
                            element={<SimulationMode />}
                        />
                    </Route>

                    <Route path="/" element={<ViewerAuthRoute />}>
                        <Route path="viewer" element={<Viewer />} />
                    </Route>
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
