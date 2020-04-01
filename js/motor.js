function Motor(velocidade, fabricante, voltagem, status, velocidadeMaxima) {
	this.velocidade = velocidade;
	this.fabricante = fabricante;
	this.voltagem = voltagem;
	this.status = status;
	this.velocidadeMaxima = velocidadeMaxima;

	document.querySelector('#fabricante').innerHTML = `Fabricante: ${this.fabricante}`;
	document.querySelector('#voltagem').innerHTML = `Voltagem: ${this.voltagem} V`;
	document.querySelector('#velocidadeMaxima').innerHTML = `Velocidade máxima: ${this.velocidadeMaxima} km`;
}

Motor.prototype = {
	ligar: function() {
		this.status = true;
		document.querySelector('#motor').innerHTML = 'LIGADO';
		document.querySelector('#motor').style.color = '#55ce63';
	},
	desligar: function() {
		this.status = false;
		document.querySelector('#motor').innerHTML = 'DESLIGADO';
		document.querySelector('#motor').style.color = '#f62d51';
	},
	acelerar: function() {
		if(this.status){
			if(this.velocidade < this.velocidadeMaxima){
				this.velocidade += 10;
			} 
		} else {
			alert('Motor Desligado! Para acelerar ligue o motor.');
		}
	},
	desacelerar: function() {
		if(this.velocidade > 0){
			this.velocidade -= 1;
		}
	},
	verificaVelocidade: function() {
		return this.velocidade;
	}
}