function replace(linha) {
	var done = linha.split(" ");
	var final= done[0] + " ";
	for (var i = 1; i < done.length; i++){
		var tmp = done[i];


		axios.get('/test.php?type=' + tmp)
  			.then(function (response) {
    			console.log(response + "YEY");
    			final = final.concat("<span data-toggle='tooltip' title=" + "PUTA" + ">" + done[i] + "</span> ");
  			})
  			.catch(function (error) {
    			console.log(error);
  			});



			//console.log("translate:" + data);
			final = final.concat("<span data-toggle='tooltip' title=" + "PUTA" + ">" + done[i] + "</span> ");
		
	}
	return final;
}


function teste2(tmp) {
	$.get('http://www.infopedia.pt/dicionarios/termos-medicos/' + tmp, function( html ) {

    // Loop through elements you want to scrape content from
    $(html).find("span[class=dolTraduzTrad]").each( function(){

        var text = $(this).text();
        // Do something with content
        console.log(text);

    } )

} );
}


function replace(linha) {
	var done = linha.split(" ");
	var final= done[0] + " ";
	for (var i = 1; i < done.length; i++){
		var tmp = done[i]; 

		if (document.getElementById('day_sel') == 3)
    		final = final.concat("<span data-toggle='tooltip' title=" + meaning3[TUSABES] + ">" + tmp + "</span> ");
    	else 
    		final = final.concat("<span data-toggle='tooltip' title=" + meaning1[TUSABES] + ">" + tmp + "</span> ");
    	TUSABES++;
		
	}
	return final;
}
