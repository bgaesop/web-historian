var htmlPrinter = function() {
  return (`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  Enter a URL here:
  <form method="POST">
    <input type="input" name="url"></input>
    <input type="submit" value="Submit"></form>
    <form action="/action_page.php" target="_blank">
  </form>
  <script src="./basic-server.js"></script>
  <script src="./request-handler.js"></script>
  <script src="./archive-handler.js"></script>
  <script src="./initialize.js"></script>
</body>
</html>
`);
  
};