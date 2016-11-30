<?php
	header('Content-Type: text/xml');
	
	echo '<response>';
		$food = $_GET['food'];
		$foodArray = array('tuna','bacon','beef','loaf','ham');
		if(in_array($food,$foodArray))
			echo 'we do have '.$food;
		else if($food=='')
			echo "Enter a food you idiot";
		else
			echo 'Sorry we dont sell '.$food;
		echo "</response>";
?>