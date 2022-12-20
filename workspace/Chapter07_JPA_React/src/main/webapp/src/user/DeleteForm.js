import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const DeleteForm = () => {
    const [deleteId, setDeleteId] = useState("");
    const navigate = useNavigate();

    const onDelete = () => {
        axios
            .post("http://localhost:8080/user/delete", "id=" + deleteId)
            .then(() => {
                alert("삭제 완료");
                navigate("/user/list");
            })
            .catch((err) => console.log(err));
    };

    const onGetUser = () => {
        axios
            .post("http://localhost:8080/user/getUser", "id=" + deleteId)
            .then((res) => {
                if (res.data === "YES") {
                    onDelete();
                    alert("아이디 삭제 완료");
                    navigate("/user/list");
                } else {
                    alert("존재하지 않는 아이디입니다.");
                    setDeleteId("");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>
                <Link to="/">
                    <img
                        alt="cat"
                        src="/image/cat.jpg"
                        style={{ width: "100px" }}
                    />
                </Link>
                회원 삭제
            </h1>
            삭제할 아이디 입력 :{" "}
            <input
                type="text"
                onChange={(e) => setDeleteId(e.target.value)}
                value={deleteId}
            ></input>
            <input type="button" onClick={onGetUser} value="삭제하기"></input>
        </div>
    );
};

export default DeleteForm;
