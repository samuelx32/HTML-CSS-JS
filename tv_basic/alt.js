
function alteraTV(){
	var i,x;
	var img=['gogh0.jpg','gogh1.jpg','gogh2.jpg',
			'porta1.gif','porta2.gif','porta3.gif','porta4.gif','porta5.gif','porta6.gif','porta7.gif',
			'porta8.gif','porta9.gif','porta10.gif','porta11.gif','porta12.gif'];
	x = Math.floor(Math.random()*15);
	
	document.getElementById('imagem').src='imagens/'+img[x];
	
	
}
