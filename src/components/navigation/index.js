import React, { useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { modules } from "./childrens/navbarConst";
import { isLoginSessionExists } from "../../utils/authCheck";

const Navigation = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoginSessionExists()) {
            navigate("/login");
        }
    }, [navigate]);

    return <div className="flex">
        <div className="mr-2">
            <menu className="nav">
                {modules.map((item, i) => (
                    <li key={i} className="nav__item">
                        <a href={item.URL} className="nav__link">{item.name}</a>
                    </li>
                ))}
            </menu>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
};
export default Navigation;