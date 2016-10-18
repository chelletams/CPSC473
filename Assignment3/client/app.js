var main = function() {
	'use strict';
	
	$("button").on("click", function() {
		var func = $(".functions").val(),
			arr = $("#arr").val().split(','),
			str = $("#str").val(),
			num = $("#num").val(),
			$result = $('<p>' + $result + '</p>');

		var url = "http://localhost:3000/" + func;

		$.post(url, {arr: arr, str: str, num: num}, function (data) {
			if (data.indexOf("Error") >= 0) {
				console.log("Error");
			}

			$result.text('Result: ' + data);
			$result.hide();
			$(".answer").append($result);
			$("#arr").val("");
			$("#str").val("");
			$("#num").val("");
		});
	});
};

$(document).ready(main);