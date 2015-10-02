	<!-- Php start for API key search for job descriptions -->
	<!-- Remember php architecture logic on top -->
	<?php
		require('./GetJSONBooks.php');
		
		if(!empty($_POST['bookSearch'])){
			
			$url = "https://".
			"www.googleapis.com/".
			"books/v1/volumes".
			"?q=".urlencode($_POST['bookSearch']);
			
			$bookArray = getAPIArray($url);
				
		}
	?>
	
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>ISBNSearch</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Welcome to ISBNSearch!</h1>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		  </button>
		  <a class="navbar-brand" href="ISBNSearch.php">ISBNSearch</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		  <form class="navbar-form navbar-left" role="search" action="#" method="post">
			<div class="form-group">
			  <input type="text" class="form-control" placeholder="Book Title" name="bookSearch" required>
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
		  </form>
		</div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
	
	<?php
	
		if(!empty($bookArray)){
			//Can use $bookArray['totalItems'] for upper limit but we are using limited api 
			//and only 10 results are displayed regardless. 
			for($i=0; $i<10 ; $i++){
				
				$title = $bookArray['items'][$i]['volumeInfo']['title'];
				$authors = $bookArray['items'][$i]['volumeInfo']['authors'];
				$publishDate = $bookArray['items'][$i]['volumeInfo']['publishedDate'];
				$ISBN10 = $bookArray['items'][$i]['volumeInfo']['industryIdentifiers'][0]['identifier'];
				$ISBN13 = $bookArray['items'][$i]['volumeInfo']['industryIdentifiers'][1]['identifier'];
				$thumbnail = $bookArray['items'][$i]['volumeInfo']['imageLinks']['thumbnail'];
				$infoLink = $bookArray['items'][$i]['volumeInfo']['infoLink'];
				$snippet = $bookArray['items'][$i]['searchInfo']['textSnippet'];
				
				echo '<div class="container">';
				echo '<div class="ISBN10">'.$title.'</div>';
				echo '<div class="image"><img src="'.$thumbnail.'" alt=""/></div>';
				//echo '<div class="authors">'.foreach($authors as $a){$a.', '.}.'</div>';
				echo '<div class="ISBN10">'.$ISBN10.'</div>';
				echo '<div class="ISBN10">'.$ISBN13.'</div>';
				echo '<div class="infoLink">'.$infoLink.'</div>';
				echo '<div class="snippet">'.$snippet.'</div>';
				echo '</div>';
			}
		}
	
	?>
	

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	
  </body>
</html>