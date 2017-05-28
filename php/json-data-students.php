<?php
/*
 * Following code will list all the students on a course
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
$sql_query = "SELECT * FROM studentTable";

// Query database using connection
$result = $conn->query($sql_query);

// check for empty result
if (mysqli_num_rows($result) > 0)
 {
	// Create Array for JSON response
	$response = array();
    
    // Create Array called students inside response Array
    $response["students"] = array();
	
	// Loop through all results from Database
    while ($row = mysqli_fetch_array($result)) 
     {
        	// Assign results for each database row, to temp student array
            $student = array();
            $student["studentID"] = $row["studentID"];
            $student["firstName"] = $row["firstName"];
            $student["lastName"] = $row["lastName"];
            $student["moduleNo1"] = $row["moduleNo1"];
            $student["moduleNo2"] = $row["moduleNo2"];
            $student["courseID"] =$row["courseID"];


       // push single student into final response array
        array_push($response["students"], $student);
    }
    // success
    $response["success"] = 1;

    // print JSON response
    print (json_encode($response));

}
else {
    // no students found
    $response["success"] = 0;
    $response["message"] = "No students found";

    // print no students JSON
    print (json_encode($response));
}
?>