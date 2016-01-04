<html>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script>
		$(document).ready(function() {
			$.ajax({
				type : "GET",
				url : "http://localhost:8080/vraptor-meteor-demo-server/cliente/buscar",
				success : function(result) {
					var str = "";
					for(i in result)
						str += result[i].nome + " - " + result[i].endereco + "<br>";
						
					$("#div1").html(str);
				}, 
				error : function(error){
					console.log(error);
				}
			});

			$.ajax({
				type: "POST",
			  	url: "http://localhost:8080/vraptor-meteor-demo-server/cliente/salvar",
			  	data: JSON.stringify({cliente: {nome: 'Mario Telha', endereco: 'Rua florinda'}}),
			  	success : function(result) {
					console.log(result)
				}, 
				error : function(error){
					console.log(error);
				},
				dataType: "json",
				contentType: "application/json;"
			});
		});
	</script>
	<body>
		<h2>Hello World!</h2>
		<div id="div1"></div>
	</body>
</html>
