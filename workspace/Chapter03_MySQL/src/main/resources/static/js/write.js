$("#signUpBtn").click(function(){
	var name = $("#name").val();
	var id = $("#id").val();
	var pwd = $("#pwd").val();
	var sw = 0;
	if(!pwd){
		$("#pwdDiv").text("비밀번호를 입력하세요");
		$("#pwd").focus()
		sw = 1;
	}
	if(!id){
		$("#idDiv").text("아이디를 입력하세요");
		$("#id").focus();
		sw = 1;
	}
	if(!name){
		$("#nameDiv").text("이름을 입력하세요");
		$("#name").focus();
		sw = 1;
	}
	if(sw==1) return false;
	else{
		$.ajax({
			type : "post",
			url : "/user/write",
			data : $("#writeForm").serialize(),
			success : function(){
				alert("회원가입을 축하합니다");
				location.href="/chapter06_SpringWebMaven/user/list";
			},
			error : function(err){
				console.log(err);
			}
		});
	}
});

$("#id").focusout(function(){
	var id = $("#id").val();
	if(id){
		$.ajax({
				type : "post",
				url : "/user/getUser",
				data : {"id" : $("#id").val()}, 
				dataType : "text",
				success : function(data){
					console.log(data);
					if(data == "YES"){
						$("#idDiv").text("이미 존재하는 아아디입니다");
					}else{
						$("#idDiv").text("사용 가능한 아아디입니다");
						$("#idDiv").css("color","blue");
					}
				},
				error : function(err){
					console.log(err);
				}
			});
	}
});
