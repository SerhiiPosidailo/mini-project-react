import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MainLayouts:React.FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};