$("#updateId").focusout(function(){

		$("#writeForm").hide();
		$("#updateIdDiv").text("");
		
	$.ajax({
		type : "post",
		url : "/user/getUpdateUser",
		data : "id=" + $("#updateId").val(),
	//	dataType : "json",  
	    //dataType을 빼면 controller가 넘겨주는대로 받는다
	    //dataType을 생략하면 자료에 맞게 자동으로 형식이 지정된다.
		success : function(data){
		//	alert(JSON.stringify(data)); UserDTO가 null 이면    ""
		//	var name = data.name;
		//	var id = data.id;
			if(data==""){
				$("#updateIdDiv").text("찾고자 하는 아이디가 없습니다");
			}else{
				$("#writeForm").show();
				$("#name").val(data.name);
				$("#id").val(data.id);
			}
		},
		error : function(err){
			console.log(err);
		}
	});
});

//취소 버튼
$("#resetBtn").click(function(){
	//강제 이벤트 발생
	$("#updateId").trigger("focusout");
});

//수정 버튼 클릭
$("#updateBtn").click(function(){

	var name = $("#name").val();
	var pwd = $("#pwd").val();
	var sw = 0;
	if(!pwd){
		$("#pwdDiv").text("비밀번호를 입력하세요");
		$("#pwd").focus()
		sw = 1;
	}
	if(!name){
		$("#nameDiv").text("이름을 입력하세요");
		$("#name").focus();
		sw = 1;
	}
	if(sw==1) return;
	
	$.ajax({
		type:"post",
		url:"/user/update",
		data:$("#updateForm").serialize(),
		success:function(){
			alert("회원님의 정보를 수정하였습니다");
			location.href="/user/list";
		}
		,error:function(err){
			console.log(err);
		}
	});
});