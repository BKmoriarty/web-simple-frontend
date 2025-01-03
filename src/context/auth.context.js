import axios from "axios";
import { createContext, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    cookies.get("token") || {
      userData: {},
      accessToken: {},
      auth: false,
    }
  );

  const login = (model) => {
    return new Promise(async (resolve, reject) => {
      await axios
        .post("http://localhost:8080/api/v1/auth/login", model)
        .then((response) => {
          // console.log(response.data);
          if (response.status === 200 && response.data.message.access_token) {
            setCurrentUser({
              userData: response.data.userData,
              accessToken: response.data.message.access_token,
              auth: true,
            });

            const dataToSave = JSON.stringify({
              userData: response.data.userData,
              accessToken: response.data.access_token,
              auth: true,
            });

            console.log(dataToSave);

            cookies.set("token", dataToSave, { path: "/" });
            resolve(response);
          }
        })
        .catch((error) => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
          }
          reject(error.response);
        });
    });
  };

  const logout = () => {
    return new Promise(async (resolve, reject) => {
      await axios
        .post(
          "http://localhost:8080/api/v1/auth/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setCurrentUser({
              userData: {},
              accessToken: {},
              auth: false,
            });
            cookies.remove("token");
            resolve(response);
          }
        })
        .catch((error) => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
          }
          reject(error.response);
        });
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
