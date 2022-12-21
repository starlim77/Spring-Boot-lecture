import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./main/Index";
import DeleteForm from "./user/DeleteForm";
import List from "./user/List";
import UpdateForm from "./user/UpdateForm";
import UploadForm from "./user/UploadForm";
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
                    <Route
                        path="/user/updateForm"
                        element={<UpdateForm></UpdateForm>}
                    ></Route>
                    <Route
                        path="/user/deleteForm"
                        element={<DeleteForm></DeleteForm>}
                    ></Route>
                    <Route
                        path="/user/uploadForm"
                        element={<UploadForm></UploadForm>}
                    ></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App;

/*
Rest API                  axios
                          
POST : 데이터 등록 및 전송    post
GET : 데이터 조회           get
PUT : 데이터 수정           put
DELETE : 데이터 삭제        delete
*/
