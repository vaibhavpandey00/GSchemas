<?php
$username = "root";
$password = "root";
$servername = "localhost";
$db_name = "gscheme";

$conn = mysqli_connect($servername, $username, $password, $db_name);

if (!$conn) {
  die("Connection Failed" . mysqli_connect_error());
}


if (isset($_POST['submit'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $password = md5($password);
  $sql = "select * from users where name='$username' and password='$password'";

  echo $username;

  if ($result = mysqli_query($conn, $sql)) {
    $user_id = $result['user_id'];
    $rowcount = mysqli_num_rows($result);
    if ($rowcount == 1) {
      echo $user_id;
      setcookie('user_id', $user_id, time() + 60 * 60 * 7);
      setcookie('user_name', $username, time() + 60 * 60 * 7);
      //session_start();
      $_SESSION['user_id'] = $user_id;
      //setcookie('userid',$user_id);
      header("Location:./index.html");
    } else {
      header("Location:./login.html");
    }
  }
}

$conn->close();
