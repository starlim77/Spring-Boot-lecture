import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
    const [list, setList] = useState([]);
    const [searchOption, setSearchOption] = useState("name");
    const [keyword, setKeyword] = useState("");

    const onSearch = (e) => {
        e.preventDefault();
        axios
            .get("http://localhost:8080/user/search", {
                params: {
                    searchOption: searchOption,
                    keyword,
                },
            })
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get("http://localhost:8080/user/getList")
            .then((res) => {
                setList(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <table border="1" id="userListTable">
                <thead>
                    <tr>
                        <th width="150">이름</th>
                        <th width="150">아이디</th>
                        <th width="150">비밀번호</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td align="center">{item.name}</td>
                                <td align="center">{item.id}</td>
                                <td align="center">{item.pwd}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }}>
                <form id="searchForm">
                    <select
                        name="searchOption"
                        onChange={(e) => setSearchOption(e.target.value)}
                    >
                        <option value="name">이름</option>
                        <option value="id">아이디</option>
                    </select>
                    &nbsp;
                    <input
                        type="text"
                        name="keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    ></input>
                    &nbsp;
                    <button onClick={onSearch}>검색</button>
                </form>
            </div>
        </div>
    );
};

export default List;
