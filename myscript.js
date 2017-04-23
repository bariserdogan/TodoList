function destroy(key)
{
	window.data.splice(key,1);
	localStorage.setItem("myData",JSON.stringify(window.data));
	$("#inputText").html('');
	$.each(window.data, function(index, value) {
		$("#list").append("<li>"+value+"<button style='margin-left:50px;border-radius:0;' class='btn btn-danger'>Delete</button></li>");
	});
}

$(document).ready(function() {
		
		var data = localStorage.getItem("myData"); // myData isimli key var mı ? varsa getiriyor

		if(data==null) // data boş ise
		{
			localStorage.setItem("myData","[]");
		}

		window.data=JSON.parse(localStorage.getItem("myData")); // json parse obje gelen datayı ayrıştırır.

		console.log(window.data);

		$("#kaydet").on('click',function() {
			
			if($("#inputText").val()!="")
			{
				window.data.push($("#inputText").val());

				localStorage.setItem("myData",JSON.stringify(window.data));
			}
		});

		$.each(window.data, function(index, val) {
			$("#list").append("<li style='margin-top:5px;'>"+val+"<button onclick='destroy("+index+")' style='margin-left:50px;border-radius:0;' class='btn btn-danger'>Delete</button></li>");
		});

		$("#sil").on('click',function() {
			localStorage.clear();
		});
});