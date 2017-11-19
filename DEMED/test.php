<?php
include_once '/home/pimonteiro/dev/HeartBits/simple_html_dom.php';

if (defined('STDIN')) {
  $type = $argv[1];
} else { 
  $type = $_GET['type'];
}
	$url = "http://www.infopedia.pt/dicionarios/termos-medicos/";
	$url .= $type;
	$html = file_get_html($url);
	$cenas = $html->find('span[class=dolTraduzTrad]',0);
	$cenasOpen = str_replace('<span class="dolTraduzTrad"> ', "", "$cenas");
	
	$data = str_replace('</span>', "", $cenasOpen);


	echo $data;
?>