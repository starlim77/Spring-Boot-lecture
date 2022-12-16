$("#deleteBtn").click(function(){
	var deleteId = $("#deleteId").val();
	if(!deleteId){
		$("#deleteIdDiv").text("아이디를 입력하세요");
		$("#name").focus();
		return;
	}else{
		$.ajax({
			type : "post",
			url : "/user/getUser",
			data : {"id" : deleteId}, 
			dataType : "text",
			success : function(data){
				console.log(data);
				if(data == "YES"){
				
					if(confirm("삭제하시겠습니까?")){
						$.ajax({
							type : "post",
							url : "/user/delete",
							data : {"id" : deleteId}, 
							success : function(data){
								alert("회원님의 정보를 삭제하였습니다");
								location.href="/user/list";
							},error: function(err){
								console.log(err);
							}
						});
					}//if
				
					
					
				}else{
					$("#deleteIdDiv").text("찾고자 하는 아이디가 없습니다");
					$("#deleteIdDiv").css("color","red");
				}
			},
			error : function(err){
				console.log(err);
			}
		});
	}
	
});