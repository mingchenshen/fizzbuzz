$(document).ready(function(){
	for(var i = 1; i < 101; i++){
		if(i % 3 == 0){
			if(i % 5 == 0){
				$(".list").append("FIZZ BUZZ<br>");
			}else{
				$(".list").append("FIZZ <br>");
			}
		}else if(i % 5 == 0){
			$(".list").append("BUZZ <br>");
		}else{
			$(".list").append(i+"<br>");
		}
	}
	$("#output").text('OUTPUT GOES HERE');
	fizzbuzz();
});

function fizzbuzz(){
	$("#check").on('keypress', function(){
		if(event.which == 13){
			event.preventDefault();
			var num = $(this).val();
			if(isNaN(num)){
				alert('please enter a number');
			}else{
				if(num % 3 == 0){
					if(num % 5 == 0){
						$("#output").text("You entered: FIZZ BUZZ");
					}else{
						$("#output").text("You entered: FIZZ");
					}
				}else if(num % 5 == 0){
					$("#output").text("You entered: BUZZ");
				}else{
					$("#output").text("You entered: "+ num);
				}
			}
			$(this).val('');
		}
	})
}