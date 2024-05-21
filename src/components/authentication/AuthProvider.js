import { createContext, useContext, useEffect, useState } from 'react';
import { UserManager, WebStorageStateStore } from 'oidc-client';

const config = {
    authority: process.env.REACT_APP_AUTHORITY_URL,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
    responseType: process.env.REACT_APP_RESPONSE_TYPE || 'code', // Default to 'code' if not specified
    scope: process.env.REACT_APP_SCOPE,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
    userStore: new WebStorageStateStore({ store: window.localStorage })
  };

const userManager = new UserManager(config);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        userManager.getUser().then(user => {
            if (user && !user.expired) {
                setUser(user);
            }
        });

        userManager.events.addUserLoaded((loadedUser) => {
            setUser(loadedUser);
        });

        userManager.events.addUserUnloaded(() => {
            setUser(null);
        });
    }, []);

    const login = () => {
        userManager.signinRedirect();
    };

    const logout = () => {
        userManager.signoutRedirect();
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
