import React, { useState } from "react";
import { Link } from "react-router-dom";

const UploadForm = () => {
    const [imageSrc, setImageSrc] = useState();

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
                회원가입
            </h1>
            <div></div>
            <div></div>
            <img
                id="camera"
                src="../image/camera.svg"
                width="50"
                height="50"
                alt="카메라"
            />
            <input type="file" name="upload" id="upload" />
            <br></br>
            <input type="button" value="이미지 등록" id="uploadBtn"></input>
        </div>
    );
};

export default UploadForm;
