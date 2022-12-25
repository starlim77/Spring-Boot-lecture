import axios from "axios";
import React, { useRef, useState } from "react";
import { Form, Link } from "react-router-dom";

const UploadForm = () => {
    const imgRef = useRef();
    const [file, setFile] = useState();
    const [showImgSrc, setShowImgSrc] = useState();
    const [uploadImgSrc, setUploadImgSrc] = useState();

    const onCamera = () => {
        imgRef.current.click();
    };
    const readURL = (input) => {
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);

        reader.onload = () => {
            //console.log(input.files[0]);
            setShowImgSrc(reader.result);
            setFile(input.files[0]);
        };
    };

    const onUploadSubmit = () => {
        var formData = new FormData();
        formData.append("upload", file);

        axios
            .post("http://localhost:8080/user/upload2", formData, {
                headers: { "content-Type": `multipart/form-data` },
            })
            .then((res) => setUploadImgSrc(res.data))
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
                파일 업로드
            </h1>
            <img width="300" height="300" src={showImgSrc}></img> &emsp;
            <img
                id="camera"
                src="../image/camera.svg"
                width="50"
                height="50"
                onClick={onCamera}
                alt="카메라"
            />
            <input
                type="file"
                name="upload"
                id="upload"
                ref={imgRef}
                onChange={(e) => readURL(e.target)}
                style={{ visibility: "hidden" }}
            />
            <br></br>
            <input
                type="button"
                value="이미지 등록"
                onClick={onUploadSubmit}
            ></input>
            <h4>이미지 등록 후</h4>
            <img src={uploadImgSrc} width="200" height="200"></img>
        </div>
    );
};

export default UploadForm;
