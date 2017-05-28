<?php
/*
 * Following code will list the courses information
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
$sql_query = "SELECT * FROM courseinfo";

// Query database using connection
$result = $conn->query($sql_query);

// check for empty result
if (mysqli_num_rows($result) > 0)
 {
	// Create Array for JSON response
	$response = array();
    
    // Create Array called courses inside response Array
    $response["courses"] = array();
	
	// Loop through all results from Database
    while ($row = mysqli_fetch_array($result)) 
     {
        	// Assign results for each database row, to temp course array
            $course = array();
            $course["num"] = $row["Num"];
            $course["hea_descriptors"] = $row["HEA Descriptors"];
            $course["value"] = $row["Value"];
            $course["image"] = $row["image"];
           

       // push single course into final response array
        array_push($response["courses"], $course);
    }
    // success
    $response["success"] = 1;

    // print JSON response
    print (json_encode($response));

}
else {
    // no courses found
    $response["success"] = 0;
    $response["message"] = "No courses found";

    // print no courses JSON
    print (json_encode($response));
}
?>