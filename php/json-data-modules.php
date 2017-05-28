<?php
/*
 * Following code will list all the modules on a course
 */

//Enable cross domain Communication - Beware, this can be a security risk 
header('Access-Control-Allow-Origin: http://localhost:8383');

//include db connect class
require_once 'db_connect.php';

// Get access to datbase instance 
$db = Database::getInstance();

// Get database connection from database
$conn = $db->getConnection(); 

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Create query using SQL string
$sql_query = "SELECT * FROM moduleTable";

// Query database using connection
$result = $conn->query($sql_query);

// check for empty result
if (mysqli_num_rows($result) > 0)
 {
	// Create Array for JSON response
	$response = array();
    
    // Create Array called modules inside response Array
    $response["modules"] = array();
	
	// Loop through all results from Database
    while ($row = mysqli_fetch_array($result)) 
     {
        	// Assign results for each database row, to temp module array
            $module = array();
            $module["moduleNo"] = $row["moduleNo"];
            $module["moduleName"] = $row["moduleName"];
            $module["credits"] = $row["credits"];
            $module["website"] = $row["website"];
            $module["dueDate"] = $row["dueDate"];
            $module["location"] =$row["location"];
            $module["room"] = $row["room"];
            $module["lat"] = $row["lat"];
            $module["long"] = $row["long"];


       // push single student into final response array
        array_push($response["modules"], $module);
    }
    // success
    $response["success"] = 1;

    // print JSON response
    print (json_encode($response));

}
else {
    // no modules found
    $response["success"] = 0;
    $response["message"] = "No modules found";

    // print no modules JSON
    print (json_encode($response));
}
?>