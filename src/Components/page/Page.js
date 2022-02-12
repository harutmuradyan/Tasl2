import React from "react";
import { Routes, Route } from "react-router-dom";
import Categoryes from "../categoryes/Categoryes";
const Page = () => {
    return (
        <>
            <Routes>
                <Route path='/category/1'
                        element={<Categoryes/>}
                />
                <Route path='/category/2'
                        element={<Categoryes/>}
                />
                <Route path='/category/3'
                        element={<Categoryes/>}
                />
                <Route path='/category/4'
                        element={<Categoryes/>}
                />
            </Routes>
        </>
    )
}

export default Page ;