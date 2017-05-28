<?php
/*
* Mysql database class - only one connection alowed
*/

// Require database credentials from config file
require_once 'db_config.php';

// Singleton class that creates database conection (once)
class Database {
	private $_connection;
	private static $_instance; //The single instance
	
	// Connection vars come from db_config.php
	private $_host = DB_SERVER;
	private $_username = DB_USER;
	private $_password = DB_PASSWORD;
	private $_database = DB_DATABASE;
	/*
	Get an instance of the Database
	@return Instance
	*/
	public static function getInstance() {
		if(!self::$_instance) { // If no instance then make one
			self::$_instance = new self();
		}
		return self::$_instance;
	}
	// Constructor
	private function __construct() {
		$this->_connection = new mysqli($this->_host, $this->_username, 
			$this->_password, $this->_database);
	
		// Error handling
		if(mysqli_connect_error()) {
			trigger_error("Failed to connect to MySQL: " . mysql_connect_error(),
				 E_USER_ERROR);
		}
	}
	// Magic method clone is empty to prevent duplication of connection
	private function __clone() { }
	// Get mysqli connection
	public function getConnection() {
		return $this->_connection;
	}
}
?>