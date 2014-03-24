<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Textkoll</title>
  <link rel="stylesheet" href="styles.css">
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="main.js"></script>
</head>
<body>

  <div class="wrapper">
    <form action="JavaScript:textCheck()">
      <p class="center">
        <label for="seqLength">Word sequence length: </label><input id="seqLength" value="5" type="number">
        <input type="submit" value="Match!">
      </p>

      <div class="cf">
        <p class="text"><textarea placeholder="text1" id="text1" cols="60" rows="10"></textarea></p>
        <p class="text"><textarea placeholder="text2" id="text2" cols="60" rows="10"></textarea></p>
      </div>
    </form>

  </div>

  <div class="wrapper cf">
    <h2>Matches</h2>
    <div id="res"></div>
  </div>


</body>
</html>