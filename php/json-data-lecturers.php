<?php
/*
 * Following code will list all the lecturers on a course
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
$sql_query = "SELECT * FROM lecturerTable";

// Query database using connection
$result = $conn->query($sql_query);

// check for empty result
if (mysqli_num_rows($result) > 0)
 {
	// Create Array for JSON response
	$response = array();
    
    // Create Array called lecturers inside response Array
    $response["lecturers"] = array();
	
	// Loop through all results from Database
    while ($row = mysqli_fetch_array($result)) 
     {
        	// Assign results for each database row, to temp lecturer array
            $lecturer = array();
            $lecturer["staffNumber"] = $row["staffNumber"];
            $lecturer["firstName"] = $row["firstName"];
            $lecturer["lastName"] = $row["lastName"];
            $lecturer["moduleNo1"] = $row["moduleNo1"];
            $lecturer["moduleNo2"] = $row["moduleNo2"];
            $lecturer["email"] =$row["email"];


       // push single lecturer into final response array
        array_push($response["lecturers"], $lecturer);
    }
    // success
    $response["success"] = 1;

    // print JSON response
    print (json_encode($response));

}
else {
    // no lecturers found
    $response["success"] = 0;
    $response["message"] = "No lecturers found";

    // print no lecturers JSON
    print (json_encode($response));
}
?>