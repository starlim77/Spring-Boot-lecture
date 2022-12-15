<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>
	<img alt="" src="../image/cat.jpg" onclick="location.href='../';" style="cursor:pointer; width:100px;">
	목록
</h1>
<hr>
<table border = "1" id="userListTable">
	<tr>
		<td width="150">이름</td>
		<td width="150">아이디</td>
		<td width="150">비밀번호</td>
	</tr>
</table>


	<!-- 동적처리 -->


<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="../js/list.js"></script>
</body>
</html>