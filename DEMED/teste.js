function teste(tmp){
	var xhttp = new XMLHttpRequest();
		xhttp.open("GET", "test.php?type=" + tmp, true);
		xhttp.send();
		return xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
       			console.log(xhttp.responseText);
       			return xhttp.responseText;
    		}
		};
}