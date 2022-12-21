import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UpdateForm = () => {
    const [data, setData] = useState({ name: "", id: "", pwd: "" });

    const { name, id, pwd } = data;

    const [updateId, setUpdateId] = useState("");

    const navigate = useNavigate();

    const getUpdateUser = () => {
        if (updateId) {
            axios
                .get(`http://localhost:8080/user/getUpdateUser?id=${updateId}`)
                .then((res) => {
                    if (res.data !== null) {
                        setData(res.data);
                    } else alert("존재하지 않는 아이디");
                })
                .catch((err) => console.log(err));
        }
    };

    const onUpdate = () => {
        if (!name || !id || !pwd) {
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
        getUpdateUser();
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
                    onBlur={getUpdateUser}
                    value={updateId}
                    onChange={(e) => setUpdateId(e.target.value)}
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
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            name: e.target.value,
                                        })
                                    }
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
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            pwd: e.target.value,
                                        })
                                    }
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
                                    type="button"
                                    onClick={onReset}
                                    value="취소"
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
