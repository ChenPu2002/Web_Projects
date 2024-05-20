<?php
$blk1show = <<<EOT
<div class="finance show" id="blk1">
  <h2>Block 1 - SP500</h2>
  <p><img src="images/SP500.png" alt="SP500" style="width: 250px;">
  </p>
</div>
EOT;
$blk2show = <<<EOT
<div class="finance show" id="blk2">
  <h2>Block 2 - FTSE 100</h2>
  <p><img src="images/FTSE100.png" alt="FTSE 100">
  </p>
</div>
EOT;
$blk3show = <<<EOT
<div class="finance show" id="blk3">
  <h2>Block 3 - Hang Seng Index</h2>
  <p><img src="images/HSI.png" alt="Hang Seng Index" style="width: 900px;">
  </p>
</div>
EOT;
$blk4show = <<<EOT
<div class="finance show" id="blk4">
  <h2>Block 4 - Nasdaq Composite index</h2>
  <p><img src="images/nasdaq.png" alt="NASDAQ" style="width: 600px;">
  </p>
</div>
EOT;
$blk5show = <<<EOT
<div class="finance show" id="blk5">
  <h2>Block 5 - USD Exchange Rate</h2>
  <p><img src="images/ex_rate.png" alt="USD Rate" style="width: 250px;">
  </p>
</div>
EOT;
$blk6show = <<<EOT
<div class="finance show" id="blk6">
  <h2>Block 6 - Currency Converter</h2>
  <p><img src="images/Convert-Currency.png" alt="Currency Converter" style="width: 300px;">
  </p>
</div>
EOT;
$blk7show = <<<EOT
<div class="finance show" id="blk7">
  <h2>Block 7 - Crypto Index</h2>
  <p><img src="images/Crypto.png" alt="Crypto Index" style="width: 500px;">
  </p>
</div>
EOT;
$blk8show = <<<EOT
<div class="finance show" id="blk8">
  <h2>Block 8 - USD vs. HKD</h2>
  <p><img src="images/USD-HKD.png" alt="USD vs. HKD" style="width: 400px;">
  </p>
</div>
EOT;

$blk1hide = <<<EOT
<div class="finance hide" id="blk1">
  <h2>Block 1 - SP500</h2>
  <p><img src="images/SP500.png" alt="SP500" style="width: 250px;">
  </p>
</div>
EOT;
$blk2hide = <<<EOT
<div class="finance hide" id="blk2">
  <h2>Block 2 - FTSE 100</h2>
  <p><img src="images/FTSE100.png" alt="FTSE 100">
  </p>
</div>
EOT;
$blk3hide = <<<EOT
<div class="finance hide" id="blk3">
  <h2>Block 3 - Hang Seng Index</h2>
  <p><img src="images/HSI.png" alt="Hang Seng Index" style="width: 900px;">
  </p>
</div>
EOT;
$blk4hide = <<<EOT
<div class="finance hide" id="blk4">
  <h2>Block 4 - Nasdaq Composite index</h2>
  <p><img src="images/nasdaq.png" alt="NASDAQ" style="width: 600px;">
  </p>
</div>
EOT;
$blk5hide = <<<EOT
<div class="finance hide" id="blk5">
  <h2>Block 5 - USD Exchange Rate</h2>
  <p><img src="images/ex_rate.png" alt="USD Rate" style="width: 250px;">
  </p>
</div>
EOT;
$blk6hide = <<<EOT
<div class="finance hide" id="blk6">
  <h2>Block 6 - Currency Converter</h2>
  <p><img src="images/Convert-Currency.png" alt="Currency Converter" style="width: 300px;">
  </p>
</div>
EOT;
$blk7hide = <<<EOT
<div class="finance hide" id="blk7">
  <h2>Block 7 - Crypto Index</h2>
  <p><img src="images/Crypto.png" alt="Crypto Index" style="width: 500px;">
  </p>
</div>
EOT;
$blk8hide = <<<EOT
<div class="finance hide" id="blk8">
  <h2>Block 8 - USD vs. HKD</h2>
  <p><img src="images/USD-HKD.png" alt="USD vs. HKD" style="width: 400px;">
  </p>
</div>
EOT;

// Database connection setup
define("DB_HOST", "mydb");
define("USERNAME", "dummy");
define("PASSWORD", "c3322b");
define("DB_NAME", "db3322");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if the user ID is provided in the request
    if (isset($_COOKIE['user_id'])) {
        $userId = $_COOKIE['user_id'];

        // Connect to the database
        $conn = new mysqli(DB_HOST, USERNAME, PASSWORD, DB_NAME);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "DELETE FROM users WHERE timestamp < UNIX_TIMESTAMP()";
        $conn->query($sql);
        // Check if the user ID exists in the database
        $sql = "SELECT * FROM users WHERE uid = '$userId'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // User ID exists, retrieve the user's personalized settings
            $row = $result->fetch_assoc();
            // echo var_dump($row['visible']);
            $visibleBlocks = explode(",", $row['visible']);
            //echo($visibleBlocks);
            $hiddenBlocks = explode(",", $row['hidden']);
            //echo"1";
        } else {
            $time = time() + (5 * 60);
            $visible = '"blk1","blk2","blk3","blk4","blk5","blk6","blk7","blk8"';
            $sql = "INSERT INTO users (uid, visible, hidden,timestamp) VALUES ('$userId', '$visible', '',$time)";
            $conn->query($sql);
            $visibleBlocks = explode(",", $visible);
            $hiddenBlocks = explode(",", $hidden);
            $userid = uniqid();
            // Set the new user ID as a cookie with a 5-minute expiration time
            setcookie('user_id', $userid, time() + (5 * 60), '/');
            //echo"2";
        }

        // Close the database connection
        $conn->close();

        // Send the HTML content as the response
        // echo $content;
    } else {
        // User ID not provided, send the default content and new user ID as a cookie
        $newUserId = uniqid();
        $conn = new mysqli(DB_HOST, USERNAME, PASSWORD, DB_NAME);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $time = time() + (5 * 60);
        $visible = '"blk1","blk2","blk3","blk4","blk5","blk6","blk7","blk8"';
        $sql = "INSERT INTO users (uid, visible, hidden,timestamp) VALUES ('$newUserId', '$visible', '',$time)";
        $conn->query($sql);
        $conn->close();
        setcookie('user_id', $newUserId, time() + (5 * 60), '/');
        //echo"3";
    }
}
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  $request = json_decode(file_get_contents('php://input'), true);
  $requestData = $request["data"];
  //$user_id = $requestData["userId"];
  //echo ("userid: ".$user_id.' ');
  $Preference = $requestData["preference"];
  //print_r($Preference);
  $user_id = $_COOKIE['user_id'];

 
  //$userPreference = $_COOKIE['preference-cookie'];
  if (empty($user_id) || empty($Preference)) {
      http_response_code(400); // Send response with code 400 (Bad Request)
      exit('Empty user ID or preference cookie');
  }
  //$Preference = json_decode($userPreference, true);
  //print_r($Preference);
  // Connect to your MySQL database
  define("DB_HOST", "mydb");
  define("USERNAME", "dummy");
  define("PASSWORD", "c3322b");
  define("DB_NAME", "db3322");

  // Establish database connection
  $conn = mysqli_connect(DB_HOST, USERNAME, PASSWORD, DB_NAME);

  if (!$conn) {
      http_response_code(500); // Send response with code 500 (Internal Server Error)
      exit('Error connecting to database');
  }
  $sql = "DELETE FROM users WHERE timestamp < UNIX_TIMESTAMP()";
  $conn->query($sql);

  // Check if the user ID exists in the database
  $query = "SELECT uid FROM users WHERE uid = '$user_id'";
  $result = mysqli_query($conn, $query);
  //echo mysqli_num_rows($result);

  if (!$result) {
      mysqli_close($conn);
      http_response_code(500); // Send response with code 500 (Internal Server Error)
      exit('500 Error checking user ID');
  }
  if (mysqli_num_rows($result) > 0) {
      // User ID exists, update user preference in the database
      $visibleblocks = "";
      $hiddenblocks = "";
      //echo $userPreference;
      foreach ($Preference as $item) {
          $block = $item[0]; // Get the block name
          $visibility = $item[1]; // Get the visibility status
          //echo $block;
          if ($visibility === "visible") {
              $visibleblocks .= '"'.$block.'",';
          } elseif ($visibility === "hidden") {
              $hiddenblocks .= '"'.$block.'",';
          }
      }
      $visibleblocks = rtrim($visibleblocks, ",");
      $hiddenblocks = rtrim($hiddenblocks, ",");
      $query = "UPDATE users SET visible = '$visibleblocks' WHERE uid = '$user_id'";
      $querybackup = "UPDATE users SET hidden = '$hiddenblocks' WHERE uid = '$user_id'";
  } else {
      // User ID doesn't exist, create a new user and store preference in the database
      $visibleblocks = "";
      $hiddenblocks = "";
      //echo $userPreference;
      foreach ($Preference as $item) {
          $block = $item[0]; // Get the block name
          $visibility = $item[1]; // Get the visibility status
          //echo $block;
          if ($visibility === "visible") {
              $visibleblocks .= '"'.$block.'",';
          } elseif ($visibility === "hidden") {
              $hiddenblocks .= '"'.$block.'",';
          }
      }
      $visibleblocks = rtrim($visibleblocks, ",");
      $hiddenblocks = rtrim($hiddenblocks, ",");
      $time = time() + (5 * 60);
      $user_id = uniqid();
      $query1 = "INSERT INTO users (uid, visible,hidden,timestamp) VALUES ('$user_id', '$visibleblocks','$hiddenblocks',$time)";
      setcookie('user_id', $user_id, time() + (5 * 60), '/');
  }
  if (isset($query1)){
    $result1 = $conn->query($query1);
    $error = mysqli_error($conn);
    echo $error;
  }
  if (isset($query)){
    $result = mysqli_query($conn, $query);
  }
  //$result = mysqli_query($conn, $query);
  if (isset($querybackup)){
    $backresult = mysqli_query($conn, $querybackup);
  }
  if (!$result) {
      mysqli_close($conn);
      http_response_code(500); // Send response with code 500 (Internal Server Error)
      exit('500 Error storing user preference');
  }
  // if (!$result1) {
  //   mysqli_close($conn);
  //   http_response_code(500); // Send response with code 500 (Internal Server Error)
  // }
  // if (!$backresult) {
  //   mysqli_close($conn);
  //   http_response_code(500); // Send response with code 500 (Internal Server Error)
  //   exit('Error storing user preference');
  // }
  mysqli_close($conn);

  //setcookie('preference', '', time() - 3600); // Instruct client to remove the preference cookie

  http_response_code(200); // Send response with code 200 (OK)
  exit('200 User preference stored successfully');
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Financial Dashboard</title>
<link rel="stylesheet" href="index.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="index.js" charset="UTF-8"></script>
</head>
<body>
  <div id="outmost">
    <h1>Financial Dashboard</h1>
    <div id='container'>
      <?php 
      if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Check if the user ID is provided in the request
        if (isset($_COOKIE['user_id'])) {
            if ($result->num_rows > 0) {
                foreach ($visibleBlocks as $block) {
                  //echo $temp."show";
                  $temp = str_replace('"', '', $block);
                  echo ${$temp."show"};
                }
                foreach ($hiddenBlocks as $block) {
                  //print_r($hiddenBlocks);
                  //echo $temp."hide";
                  $temp = str_replace('"', '', $block);
                  echo ${$temp."hide"};
                }
            } else {
                foreach ($visibleBlocks as $block) {
                  $temp = str_replace('"', '', $block);
                  echo ${$temp."show"};
                }
                foreach ($hiddenBlocks as $block) {
                  $temp = str_replace('"', '', $block);
                  echo ${$temp."hide"};
                }
            }
        } else {
            $visibleBlocks = explode(",", $visible);
            foreach ($visibleBlocks as $block){
              $temp = str_replace('"', '', $block);
              echo ${$temp."show"};
            }
            //echo $content;
        }
      }

      ?>
    </div>
  </div>
</body>
</html>
