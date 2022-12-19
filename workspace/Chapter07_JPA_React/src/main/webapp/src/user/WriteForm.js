import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cat from "../image/cat.jpg";

const WriteForm = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const [nameDiv, setNameDiv] = useState("");
    const [idDiv, setIdDiv] = useState("");
    const [pwdDiv, setPwdDiv] = useState("");

    const navigate = useNavigate();

    const onSignUp = () => {
        setNameDiv("");
        setIdDiv("");
        setPwdDiv("");

        var sw = 0;
        if (!name) {
            setNameDiv("이름을 입력하세요");
            sw = 1;
        }
        if (id === "") {
            setIdDiv("아이디를 입력하세요");
            sw = 1;
        }
        if (pwd === "") {
            setPwdDiv("비밀번호 입력하세요");
            sw = 1;
        }

        if (sw === 0) {
            axios
                .post(
                    "http://localhost:8080/user/write",
                    "name=" + name + "&id=" + id + "&pwd=" + pwd
                )
                .then(() => {
                    alert("회원가입 완료");
                    navigate("/user/list");
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div>
            <h1>
                <Link to="/">
                    <img alt="cat" src={cat} style={{ width: "100px" }} />
                </Link>
                회원가입
            </h1>
            <form>
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
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div id="nameDiv">{nameDiv}</div>
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
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <div id="idDiv">{idDiv}</div>
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
                                    onChange={(e) => setPwd(e.target.value)}
                                />
                                <div id="pwdDiv">{pwdDiv}</div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input
                                    type="button"
                                    value="등록"
                                    id="signUpBtn"
                                    onClick={onSignUp}
                                />
                                <input type="reset" value="취소" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default WriteForm;
