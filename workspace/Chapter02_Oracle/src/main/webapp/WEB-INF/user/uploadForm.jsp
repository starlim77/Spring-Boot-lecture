<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#upload{
	visibility: hidden;
}
#showImg{
	width: 300px;
	height: 300px;
/* 	background-color: yellow; */
}
</style>
</head>
<body>
<!-- <h1>submit</h1> -->
<!-- 단순 submit -->
<%-- <form action="/chapter06_SpringWebMaven/user/upload" method="post" enctype="multipart/form-data">
	<input type="file" name="upload">
	<br><br>
	<input type="file" name="upload"><br>
	<input type="file" name="upload"> <!-- name 값을 똑같게 준다 -->
	<br><br>
	
	<h3>한번에 여러개 파일 선택</h3>
	<img id="camera" src="../image/camera.svg" width="50" height="50" alt="카메라"/>
	<input type="file" name="upload[]" id="upload" multiple>     <!-- 파일 여러개 올리기 -->
	<br><br>
	<input type="submit" id="uploadBtn" value="보내기">	
</form>
--%>
<!-- <script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript">
$("#camera").click(function(){
	$("#upload").trigger("click");
});
</script> -->


<!-- Ajax 통신 -->
<h1>Ajax</h1>
<form id="uploadForm" action="">
	<div id="imgDiv"></div>	
	<img src="../storage/cat.jpg" alt="test">
	<!-- 업로드 버튼을 누르기 전에 카메라 아이콘을 통해서 선택한 이미지가 맞는지 확인하기 위해서 
         이미지를 보이게 한다. -->
	<img id="showImg"></img>
	<img id="camera" src="../image/camera.svg" width="50" height="50" alt="카메라"/>	
	<input type="file" name="upload" id="upload">  
	<br><br>
	<input type="button" value="이미지 등록" id="uploadBtn">
</form>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript">
$("#camera").click(function(){
	$("#upload").trigger("click");
});

$("#upload").on("change", function(){
	readURL(this);
});

function readURL(input){
	if(input.files[0]){
		var reader = new FileReader();
		reader.onload = function(e){// e.target : 이벤트가 발생하는 요소를 반환해 준다.
			$("#showImg").attr("src", e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
		
	}//if
}//readURL()

</script>
<script type="text/javascript" src="../js/upload.js"></script>



</body>
</html>
<!--  FileReader는 type이 file인 input 태그 또는 API 요청과 같은 인터페이스를 통해 
File 또는 Blob 객체를 편리하게 처리할수있는 방법을 제공하는 객체이며
abort, load, error와 같은 이벤트에서 발생한프로세스를 처리하는데 주로 사용되며,  
File 또는 Blob 객체를 읽어서 result 속성에 저장한다.

FileReader도 비동기로동작한다.

FileReader.onload()
load 이벤트의 핸들러. 이 이벤트는 읽기 동작이 성공적으로 완료되었을 때마다 발생한다.-->