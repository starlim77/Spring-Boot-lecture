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
	정보수정
</h1>
수정할 아이디 입력 : 
<input type="text" name="updateId" id="updateId">
<div id="updateIdDiv"></div>
<br>
<form id="updateForm">
	<table>
		<tr>
			<td>이름</td>
			<td>
				<input type="text" name="name" id="name">
				<div id="nameDiv"></div>
			</td>
		</tr>
		<tr>
			<td>아이디</td>
			<td>
				<input type="text" name="id" id="id"  readonly="readonly">
				<div id="idDiv"></div>
			</td>
		</tr>
		<tr>
			<td>비밀번호</td>
			<td>
				<input type="text" name="pwd" id="pwd">
					<div id="pwdDiv"></div>
			</td>
		</tr>
		<tr>
			<td>
				<input type="button" value="수정" id="updateBtn"/>
				<input type="reset" value="취소" id="resetBtn"/>
			</td>
		</tr>
	</table>
</form>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="../js/update.js"></script>
</body>
</html>