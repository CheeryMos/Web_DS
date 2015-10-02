<?php
function getAPIArray($url){
	#Get file contents from url api
	$JSON = file_get_contents($url);
    
	#Attain array version of json code
	$array = json_decode($JSON, true);
	
	#Return array
	return $array;
}
?>