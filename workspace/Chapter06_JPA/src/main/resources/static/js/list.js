$(function(){
	$.ajax({
		type : "post",
		url : "/user/getList",
		dataType : "json",
		success : function(data){
			//alert(JSON.stringify(data));
			$.each(data, function(index, items){
				$("<tr>").append($("<td>", {
						 	align : "center",
						 	text : items.name
						 }))
						 .append($("<td>", {
						 	align : "center",
						 	text : items.id
						 }))
						 .append($("<td>", {
						 	align : "center",
						 	text : items.pwd
						 }))
						 .appendTo("#userListTable");
			});
		},
		error : function(err){
			console.log(err);
		}
	});
});


//검색 기능
$("#searchBtn").click(function(){
	if($("#keyword").val()=="")
		alert("검색어를 입력하세요");
	else{
		$.ajax({
			type:"post",
			url : "/user/search",
			data:$("#searchForm").serialize(), // name 속성이 있어야 한다.
			/* {"searchOption":$("#searchOption").val(),
				"keyword":$("#keyword").val()} */
			dataType:"json",
			success:function(data){
				console.log(JSON.stringify(data));
				
				$("#userListTable tr:gt(0)").remove();
				
				$.each(data, function(index, items){
				$("<tr>").append($("<td>", {
						 	align : "center",
						 	text : items.name
						 }))
						 .append($("<td>", {
						 	align : "center",
						 	text : items.id
						 }))
						 .append($("<td>", {
						 	align : "center",
						 	text : items.pwd
						 }))
						 .appendTo("#userListTable");
			});
				
			},
			error:function(err){
				console.log(err);
			}
		});
	}
});