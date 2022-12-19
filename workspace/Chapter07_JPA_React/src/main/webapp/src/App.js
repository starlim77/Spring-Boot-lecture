import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./main/Index";
import List from "./user/List";
import WriteForm from "./user/WriteForm";

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Index></Index>}></Route>
                    <Route
                        path="/user/writeForm"
                        element={<WriteForm></WriteForm>}
                    ></Route>
                    <Route path="/user/list" element={<List></List>}></Route>
                    <Route path="/user/updateForm" element=""></Route>
                    <Route path="/user/deleteForm" element=""></Route>
                    <Route path="/user/uploadForm" element=""></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App;
