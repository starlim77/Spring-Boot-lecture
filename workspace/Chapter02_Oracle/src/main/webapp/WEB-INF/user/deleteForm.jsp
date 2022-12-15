<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
table, table td{
	border: 1px solid black;
	text-align: center;
}
#writeForm div, #updateIdDiv{
	color : red;
	font-size: 8pt;
	font-weight: bold;
}

#writeForm{
	display:none;
}
#id{
	color:gray;
}
</style>
</head>
<body>
<h1>
	<img alt="" src="../image/cat.jpg" onclick="location.href='../';" style="cursor:pointer; width:100px;">
	삭제
</h1>
삭제할 아이디 입력 : 
<input type="text" name="deleteId" id="deleteId">
<input type="button" id="deleteBtn" value="삭제">
<br>
<div id="deleteIdDiv"></div>
<br>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="../js/delete.js"></script>
</body>
</html>