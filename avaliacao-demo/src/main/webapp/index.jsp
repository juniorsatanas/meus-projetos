<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>Formulário de Avaliação</title>
    
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
		
		<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
		<script src="https://1000hz.github.io/bootstrap-validator/dist/validator.min.js"></script>
	</head>
	<body>
		<div class="container"><br>
			<div class="jumbotron">
				<h1>Formulário de Avaliação</h1>      
			    <p>Preencha seu nome, email e avalie seu conhecimento de 0 a 10</p>
			    <form data-toggle="validator" role="form" method="post" action="test/send">
				    <div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="name">Nome:</label> <input type="text" class="form-control" name="name" placeholder="Nome candidato" data-error="Campo obrigatório" required/>
								<div class="help-block with-errors"></div>
							</div>
							<div class="form-group">
								<label for="mail.to">E-mail:</label> <input type="email" class="form-control" name="mail.to" placeholder="E-mail candidato" data-error="Campo obrigatório" required/>
								<div class="help-block with-errors"></div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-3">
							<div class="form-group">
								<label for="noteHtml">HTML:</label> 
								<select class="form-control" name="noteHtml" data-error="Campo obrigatório" required>
									<option value="">Selecione</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label for="noteCss">CSS:</label> 
								<select class="form-control" name="noteCss" data-error="Campo obrigatório" required>
									<option value="">Selecione</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label for="noteJavascript">Javascript:</label> 
								<select class="form-control" name="noteJavascript" data-error="Campo obrigatório" required>
									<option value="">Selecione</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label for="notePython">Python:</label> 
								<select class="form-control" name="notePython" data-error="Campo obrigatório" required>
									<option value="">Selecione</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<div class="help-block with-errors"></div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-3">
							<div class="form-group">
								<label for="noteDjango">Django:</label> 
								<select class="form-control" name="noteDjango" data-error="Campo obrigatório" required>
									<option value="">Selecione</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label for="noteiOS">iOS:</label> 
								<select class="form-control" name="noteiOS" data-error="Campo obrigatório" required>
									<option value="">Selecione</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label for="noteAndroid">Android:</label> 
								<select class="form-control" name="noteAndroid" data-error="Campo obrigatório" required>
									<option value="">Selecione</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<div class="help-block with-errors"></div>
							</div>
						</div>
					</div>
					<button type="submit" class="btn btn-primary">Enviar</button>
				</form>
			</div>
		</div>
	</body>
</html>