function start() {
	dropdown_dias(report_text);
	set_profile(report_text);
	set_internamentos(report_text);
	set_informacao(report_text);
}



function harvest_first_report() {
//Receive JSON with data

//API to implement - send a string to be converted to JSON again


//Result of convertion


}

var report_text = {"internamentos": [{"data": "2017-11-19", "anot": [{"s": "Inicia quadro de toracalgia direita, com agravamento com a inspiracao sem posicao antalgica. Internada dia 10 de marco por intensificacao da sintomatologia.  ", "p": "Medidas gerais - Vigilancia do estado de consciencia. - Medi\u00e7ao sinais vitais (TA, FC, SatO2, ToC axilar) 8/8h. - Monitoriza\u00e7ao debito urinario 12/12h. - Medi\u00e7\u00e3o glicemia capilar pre-prandial. - Monitorizacao do peso 24/24h. - Dieta hipocalorica sem adi\u00e7ao de sal. - Elimina\u00e7ao dos fatores de risco cardiovascular: aconselhamento nutricional.  Terapeutica empirica da pneumonia adquirida na comunidade: - Azitromicina EV; - Ceftriaxone 2g/dia EV, 7 a 10 dias.  Toracocentese Terapeutica. Para alivio sintomatico. ", "o": "Apresenta melhoria dos sintomas, embora mantenha dor a inspiracao Diminuicao do murmorio vesicular e transmissoes vocais ausentes na base pulmonar direita.  ", "a": "Dispneia para pequenos esforcos; Dor no hemitorax direito de caracteristicas pleuroticas; Temperatura sub-febril.  ", "dia": 1}, {"s": "", "p": "dona", "o": "Cona", "a": "da", "dia": 3}]}, {"data": "2018/20/02"}, {"data": "2839/30/39"}, {"data": "20/10/200"}], "user": {"sub_sistema": "nenhum", "centro_saude": "Guimares", "sns": "220", "nome": "Filipe"}};

var report_text1 = {"user": {"nome": "Filipe Monteiro","sns" : "00000","sub_sistema": "nenhum","centro_saude": "braga"},"internamentos": [{"data": "2017-15","anot": [{"dia": "1","s" : "sssssss1","o" : "ooooooo1","a" : "aaaaaaa1","p": "ppppppp1"},{"dia": "2","s": "sssssss2","o": "ooo2","a" : "aaaaaaa2","p" : "ppppppp2"}]},{"data":"2017-20"}]};

var report_text2 = {"user": {"centro_saude": "BRaga", "nome": "Eduardo", "sns": "30303", "sub_sistema": "Nenhum"}, "internamentos": [{"data": "2017-11-19", "anot": [{"a": "Dispneia para pequenos esforcos; Dor no hemitorax direito de caracteristicas pleuroticas; Temperatura sub-febril.  ", "s": "Inicia quadro de toracalgia direita, com agravamento com a inspiracao sem posicao antalgica. Internada dia 10 de marco por intensificacao da sintomatologia.  ", "dia": 1, "p": "Medidas gerais - Vigilancia do estado de consciencia. - Medi\u00e7ao sinais vitais (TA, FC, SatO2, ToC axilar) 8/8h. - Monitoriza\u00e7ao debito urinario 12/12h. - Medi\u00e7\u00e3o glicemia capilar pre-prandial. - Monitorizacao do peso 24/24h. - Dieta hipocalorica sem adi\u00e7ao de sal. - Elimina\u00e7ao dos fatores de risco cardiovascular: aconselhamento nutricional.  Terapeutica empirica da pneumonia adquirida na comunidade: - Azitromicina EV; - Ceftriaxone 2g/dia EV, 7 a 10 dias.  Toracocentese Terapeutica. Para alivio sintomatico. ", "o": "Apresenta melhoria dos sintomas, embora mantenha dor a inspiracao Diminuicao do murmorio vesicular e transmissoes vocais ausentes na base pulmonar direita.  "}]}]};


var report_text3 = {"user": {"sns": "3030", "sub_sistema": "Nenhum", "centro_saude": "BRaga", "nome": "Eduardo"}, "internamentos": [{"anot": [{"dia": 1, "a": "Dispneia para pequenos esforcos; Dor no hemitorax direito de caracteristicas pleuroticas; Temperatura sub-febril.  ", "o": "Apresenta melhoria dos sintomas, embora mantenha dor a inspiracao Diminuicao do murmorio vesicular e transmissoes vocais ausentes na base pulmonar direita.  ", "p": "Medidas gerais - Vigilancia do estado de consciencia. - Medi\u00e7ao sinais vitais (TA, FC, SatO2, ToC axilar) 8/8h. - Monitoriza\u00e7ao debito urinario 12/12h. - Medi\u00e7\u00e3o glicemia capilar pre-prandial. - Monitorizacao do peso 24/24h. - Dieta hipocalorica sem adi\u00e7ao de sal. - Elimina\u00e7ao dos fatores de risco cardiovascular: aconselhamento nutricional.  Terapeutica empirica da pneumonia adquirida na comunidade: - Azitromicina EV; - Ceftriaxone 2g/dia EV, 7 a 10 dias.  Toracocentese Terapeutica. Para alivio sintomatico. ", "s": "Inicia quadro de toracalgia direita, com agravamento com a inspiracao sem posicao antalgica. Internada dia 10 de marco por intensificacao da sintomatologia.  "}, {"dia": 3, "a": "da", "o": "Cona", "p": "dona", "s": ""}], "data": "2017-11-19"}]};

let inter_atual = 0;


function texto_ola(){
for (var i = 0; i < report_text.internamentos.length; i++){
	var text_box_div = document.createElement('div');
	text_box_div.id = "text_box" + i;


	if (report_text.internamentos[i].anot != null){
		for (var j = 0; j < report_text.internamentos[i].anot.length; i++){
			var data_div = document.createElement('div');

			var dia = document.createElement('h3');
			dia.id = "dia " + report_text.internamentos[i].anot[j].dia;
			data_div.push(dia);


			var ss = document.createElement('p');
			ss.innerHTML = report_text.internamentos[i].anot[j].s;
			data_div.push(ss);
			
			if (report_text.internamentos[i].anot[j].o != " "){
				var oo = document.createElement('p');
				oo.innerHTML = report_text.internamentos[i].anot[j].o;
				data_div.push(oo);
			}
			if (report_text.internamentos[i].anot[j].a != " "){
				var aa = document.createElement('p');
				aa.innerHTML = report_text.internamentos[i].anot[j].a;
				data_div.push(aa);
			}
			if (report_text.internamentos[i].anot[j].p != " "){
				var pp = document.createElement('p');
				pp.innerHTML = report_text.internamentos[i].anot[j].p;
				data_div.push(pp);
			}
			 
			text_box_div.push(data_div);
		}

	}

}
}





function dropdown_dias(report_text) {
	for (var i = report_text.internamentos[inter_atual].anot.length-1; i >= 0; i--){
		console.log(i);
		var option = document.createElement('option');
		option.value = report_text.internamentos[inter_atual].anot[i].dia;
		if(i == report_text.internamentos[inter_atual].anot.length-1)
			option.selected = "selected";
		option.text = "Dia " + report_text.internamentos[inter_atual].anot[i].dia;
		document.getElementById('day_sel').options.add(option);
	}
}


function set_profile(report_text) {
	document.getElementById('nome_utilizador').innerHTML = report_text.user.nome;
	document.getElementById('sns_utilizador').innerHTML = "SNS: " + report_text.user.sns;
	document.getElementById('subs_utilizador').innerHTML ="Subsistema: " + report_text.user.sub_sistema;
	document.getElementById('centro_utilizador').innerHTML = "USF: " + report_text.user.centro_saude;
	document.getElementById('profile_pic').src = "perfil.png";
}

function set_internamentos(report_text) {
	for (var i = report_text.internamentos.length-1; i >= 0; i--){
		var p = document.createElement('p');
		p.innerHTML = report_text.internamentos[i].data;

		document.getElementById('texto_internamento').append(p);
	}
}

function set_informacao(report_text) {
	// 0 porque existe apenas um internamento com dados

	document.getElementById('texto_informacao').innerHTML = "";

	var p;
	let dia = document.getElementById('day_sel').value;

	document.getElementById('day_current').innerHTML = "Dia " + dia;

	for (var i = 0; i < report_text.internamentos[0].anot.length; i++){
		if (report_text.internamentos[0].anot[i].dia == dia){
			p = document.createElement('p');

		    var str = "S)<br/> " + report_text.internamentos[0].anot[i].s;
		    var final = replace(str);
 
			p.innerHTML = final;

			//p.innerHTML = "S) <br/>" + report_text.internamentos[0].anot[i].s;
			//console.log(p.innerHTML);
			document.getElementById('texto_informacao').append(p);


			if (report_text.internamentos[0].anot[i].o != " "){
				p = document.createElement('p');
				
				var str = "O)<br/> " + report_text.internamentos[0].anot[i].o;

				var final = replace(str);

				p.innerHTML = final;

				//console.log(p.innerHTML);
				document.getElementById('texto_informacao').append(p);
			}
			if (report_text.internamentos[0].anot[i].a != " "){
				p = document.createElement('p');

				var str = "A)<br/> " + report_text.internamentos[0].anot[i].a;

				var final = replace(str);
				
				p.innerHTML = final;

				document.getElementById('texto_informacao').append(p);
			}
			if (report_text.internamentos[0].anot[i].p != " "){
				p = document.createElement('p');

				var str = "P)<br/> " + report_text.internamentos[0].anot[i].p;

				var final = replace(str);

				p.innerHTML = final;
				document.getElementById('texto_informacao').append(p);
			}
		}
	}


}


function teste(tmp){
	var xhttp = new XMLHttpRequest();
		xhttp.open("GET", "test.php?type=" + tmp, true);
		xhttp.send();

		return xhttp.onreadystatechange = function() {
    		if (xhttp.readyState == 4 && xhttp.status == 200) {
       			alert("My response :" + xhttp.responseText);
       			return eval(xhttp.responseText);
    		}
		};
}


function replace(linha) {
	var done = linha.split(" ");
	var final= done[0] + " ";
	for (var i = 1; i < done.length; i++){
		var tmp = done[i];

		var data = teste(tmp)
			console.log("translate:" + data);
			final = final.concat("<span data-toggle='tooltip' title=" + data + ">" + done[i] + "</span> ");
		
	}
	return final;
}
