<?php
  define('DB_SERVER', 'localhost');
  define('DB_USERNAME', 'root');
  define('DB_PASSWORD', '1111');
  define('DB_DATABASE', 'user_info');
  $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE) or die("Failed to connect to MySQL: " .     mysql_error());
  $list = array();

  /*create sql database first using user_info.sql file*/
  $requestlist = "SELECT * FROM employee";
  $requestList_query= $db->query($requestlist);

 while ($row = $requestList_query->fetch_assoc() ){
   $list[]= $row;
 }

 echo json_encode($list);
?>
