import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UpdateForm = () => {
    const [data, setData] = useState({
        name: "",
        id: "",
        pwd: "",
    });
    const [updateId, setUpdateId] = useState("");

    const navigate = useNavigate();

    const { name, id, pwd } = data;

    const onData = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value,
        });
    };

    const getUpdateUser = () => {
        if (updateId) {
            axios
                .post(
                    "http://localhost:8080/user/getUpdateUser",
                    "id=" + updateId
                )
                .then((res) => {
                    if (res.data !== null) setData(res.data);
                    else alert("존재하지 않는 아이디");
                })
                .catch((err) => console.log(err));
        }
    };

    const onUpdate = () => {
        if (!data.id || !data.name || !data.pwd) {
            alert("데이터를 입력해주세요.");
            return;
        }
        axios
            .put("http://localhost:8080/user/update", null, {
                params: data,
            })
            .then(() => {
                alert("업데이트 완료");
                navigate("/user/list");
            })
            .catch((err) => console.log(err));
    };

    const onReset = () => {
        setUpdateId("");
        setData({});
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
                수정
            </h1>
            <form>
                아이디 입력 :{" "}
                <input
                    type="text"
                    onChange={(e) => setUpdateId(e.target.value)}
                    onBlur={getUpdateUser}
                    value={updateId}
                ></input>
                <div></div>
                <br></br>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => onData(e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td>
                                <input
                                    type="text"
                                    name="id"
                                    id="id"
                                    value={id}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                                <input
                                    type="text"
                                    name="pwd"
                                    id="pwd"
                                    value={pwd}
                                    onChange={(e) => onData(e)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align="center">
                                <input
                                    type="button"
                                    value="업데이트"
                                    onClick={onUpdate}
                                />
                                <input
                                    type="reset"
                                    value="취소"
                                    onClick={onReset}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UpdateForm;
