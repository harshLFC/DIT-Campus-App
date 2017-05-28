-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2017 at 06:32 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `collegedata`
--

-- --------------------------------------------------------

--
-- Table structure for table `courseinfo`
--

CREATE TABLE `courseinfo` (
  `HEA Descriptors` varchar(25) NOT NULL,
  `Value` varchar(25) NOT NULL,
  `Num` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courseinfo`
--

INSERT INTO `courseinfo` (`HEA Descriptors`, `Value`, `Num`) VALUES
('Programme Credits (ECTS):', '90', 'progCre'),
('Programme Type:', 'Masters Taught (Postgrad)', 'progTy'),
('ISCED:', 'Audio-Visual & Media','isced'),
('Main Subject Area 1:', 'Digital Media', 'ms1'),
('Main Subject Area 2:', 'Computer Science', 'ms2'),
('Main Subject Area 3:', 'Computer Application', 'ms3');

-- --------------------------------------------------------

--
-- Table structure for table `lecturertable`
--

CREATE TABLE `lecturertable` (
  `staffNumber` int(6) NOT NULL,
  `firstName` varchar(10) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `moduleNo1` int(6) NOT NULL,
  `moduleNo2` int(6) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all lecturer records for the example database.';

--
-- Dumping data for table `lecturertable`
--

INSERT INTO `lecturertable` (`staffNumber`, `firstName`, `lastName`, `moduleNo1`, `moduleNo2`, `email`) VALUES
(1024, 'Kelso', 'Hyde', 3323, 2454, 'try@dit.ie'),
(123001, 'Charley', 'Cullen', 999001, 999003, 'charlie@here.com'),
(123002, 'Hugh', 'McAtamney', 999002, 999009, 'hugh@there.com'),
(123003, 'Keith', 'Gardiner', 999006, 999008, 'keith@there.com'),
(123004, 'Paula', 'McGloin', 999004, 999005, 'paula@there.com'),
(123005, 'James', 'Wogan', 999007, 999010, 'james@there.com');

-- --------------------------------------------------------

--
-- Table structure for table `moduletable`
--

CREATE TABLE `moduletable` (
  `moduleNo` int(6) NOT NULL,
  `moduleName` varchar(30) NOT NULL,
  `credits` int(2) NOT NULL,
  `website` varchar(30) NOT NULL,
  `dueDate` date NOT NULL,
  `location` varchar(25) NOT NULL,
  `room` varchar(10) NOT NULL,
  `lat` varchar(20) NOT NULL,
  `long` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all module records for the example database.';

--
-- Dumping data for table `moduletable`
--

INSERT INTO `moduletable` (`moduleNo`, `moduleName`, `credits`, `website`, `dueDate`, `location`, `room`, `lat`, `long`) VALUES
(999001, 'Dynamic Web Development', 15, 'www.dynWeb.ie', '2013-05-14', 'Aungier Street', '4037', '53.338545', '-6.26607'),
(999002, 'Human Computer Interaction', 10, 'www.hci.ie', '2013-04-09', 'Aungier Street', '2005', '53.338545', '-6.26607'),
(999003, 'Introduction to Programming', 15, 'www.jscriptIntro.ie', '2013-01-11', 'Kevin Street', '1045', '53.337015', '-6.267933'),
(999004, 'Design Principles', 15, 'www.designIntro.ie', '2013-04-25', 'Bolton Street', '0130', '53.351406', '-6.268724'),
(999005, 'Design Practice', 10, 'www.designPract.ie', '2013-01-11', 'Cathal Brugha Street', '0123', '53.352044', '-6.259514'),
(999006, 'Digital Audio', 10, 'www.dspAudio.com', '2013-05-10', 'Aungier Street', '3025', '53.338545', '-6.26607'),
(999007, 'Digital Signal Processing', 10, 'www.dspGeneral.ie', '2013-04-04', 'Kevin Street', '2103', '53.337015', '-6.267933'),
(999008, 'History of Digital Media', 5, 'www.itsbeendone.ie', '2013-03-28', 'Aungier Street', '0120', '53.338545', '-6.26607'),
(999009, 'Digital Asset Management', 5, 'www.contentStore.ie', '2013-05-30', 'Bolton Street', '1004', '53.351406', '-6.268724'),
(999010, 'Production Skills', 10, 'www.webDevPro.ie', '2013-04-02', 'Aungier Street', '1089', '53.338545', '-6.26607');

-- --------------------------------------------------------

--
-- Table structure for table `studenttable`
--

CREATE TABLE `studenttable` (
  `studentID` int(6) NOT NULL,
  `firstName` varchar(10) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `moduleNo1` int(6) NOT NULL,
  `moduleNo2` int(6) NOT NULL,
  `courseID` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all student records for the example database.';

--
-- Dumping data for table `studenttable`
--

INSERT INTO `studenttable` (`studentID`, `firstName`, `lastName`, `moduleNo1`, `moduleNo2`, `courseID`) VALUES
(123, 'Kermit', 'Frog', 999003, 999008, 888001),
(124, 'Gonzo', 'Great', 999001, 999009, 888001),
(125, 'Cookie', 'Monster', 999004, 999005, 888002),
(126, 'Fozzie', 'Bear', 999006, 999010, 888001),
(127, 'Bunsen', 'Honeydew', 999007, 999009, 888003),
(128, 'Miss', 'Piggy', 999002, 999003, 888003),
(129, 'Gobo', 'Fraggle', 999008, 999010, 888002),
(130, 'Mokey', 'Fraggle', 999002, 999005, 888001),
(131, 'Red', 'Fraggle', 999006, 999008, 888003),
(132, 'Wembley', 'Fraggle', 999004, 999007, 888003),
(133, 'Travelling', 'Matt', 999002, 999003, 888002),
(134, 'Convincing', 'John', 999004, 999008, 888001),
(135, 'Cotterpin', 'Doozer', 999008, 999009, 888002),
(136, 'Judge', 'Dog', 999003, 999007, 888003),
(137, 'Doctor', 'Astro', 999005, 999001, 888001),
(138, 'Sneaky', 'Snake', 999006, 999008, 888002),
(139, 'Sunni', 'Gummi', 999009, 999010, 888002),
(140, 'Cubbi', 'Gummi', 999004, 999008, 888001),
(141, 'Papa', 'Smurf', 999008, 999009, 888003),
(142, 'Lazy', 'Smurf', 999001, 999002, 888001),
(143, 'Vanity', 'Smurf', 999008, 999010, 888002),
(144, 'Joe', 'Frasier', 999004, 999006, 888003),
(145, 'Muhammad', 'Ali', 999003, 999005, 888002),
(146, 'George', 'Foreman', 999002, 999003, 888001),
(147, 'Larry', 'Holmes', 999001, 999002, 888001),
(148, 'Marvin', 'Hagler', 999004, 999005, 888003),
(149, 'John', 'Coltrane', 999002, 999006, 888002),
(150, 'Sonny', 'Rawlins', 999009, 999010, 888002),
(151, 'Coleman', 'Hawkins', 999006, 999007, 888003),
(152, 'Wes', 'Montgomery', 999002, 999004, 888001),
(153, 'Joe', 'Pass', 999006, 999009, 888001),
(154, 'Charlie', 'Christian', 999008, 999010, 888002),
(155, 'Stanley', 'Jordan', 999004, 999007, 888003),
(156, 'Rory', 'Gallagher', 999006, 999009, 888003),
(157, 'Gary', 'Moore', 999001, 999008, 888002),
(158, 'Jimi', 'Hendrix', 999004, 999008, 888001),
(159, 'Paco', 'Pena', 999005, 999009, 888003),
(160, 'Andres', 'Segovia', 999003, 999007, 888003),
(161, 'Bootsy', 'Collins', 999004, 999005, 888002),
(162, 'George', 'Clinton', 999003, 999010, 888002);

--
-- Indexes for dumped tables
--
  --
-- Indexes for table `courseinfo`
--
ALTER TABLE `courseinfo`
  ADD PRIMARY KEY (`Value`);

--
-- Indexes for table `lecturertable`
--
ALTER TABLE `lecturertable`
  ADD PRIMARY KEY (`staffNumber`);

--
-- Indexes for table `moduletable`
--
ALTER TABLE `moduletable`
  ADD PRIMARY KEY (`moduleNo`);

--
-- Indexes for table `studenttable`
--
ALTER TABLE `studenttable`
  ADD PRIMARY KEY (`studentID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
