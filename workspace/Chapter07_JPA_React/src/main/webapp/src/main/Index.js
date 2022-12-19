import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

/*
const Index = () => {
    const [hello, setHello] = useState("");

    useEffect(() => {
        axios
            .get("/hello")
            .then((res) => setHello(res.data))
            .catch((error) => console.log(error));
    }, []);

    return <div>데이터 : {hello}</div>;
};

export default Index;
*/

const Index = () => {
    return (
        <div>
            <nav>
                <h3>*** 메인 화면 ***</h3>
                <h4>
                    <p>
                        <Link to="/user/writeForm">입력</Link>
                    </p>
                    <p>
                        <Link to="/user/list">출력</Link>
                    </p>
                    <p>
                        <Link to="/user/updateForm">수정</Link>
                    </p>
                    <p>
                        <Link to="/user/deleteForm">삭제</Link>
                    </p>
                    <p>
                        <Link to="/user/uploadForm">업로드</Link>
                    </p>
                </h4>
            </nav>
        </div>
    );
};

export default Index;
