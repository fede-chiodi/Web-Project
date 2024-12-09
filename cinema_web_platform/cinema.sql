-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 21, 2024 at 10:08 PM
-- Server version: 11.6.2-MariaDB
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinema`
--
CREATE DATABASE IF NOT EXISTS `cinema` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `cinema`;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'booking id',
  `movie_id` int(10) UNSIGNED DEFAULT NULL COMMENT 'movie''s \r\n\r\nassociated movie id ',
  `name` varchar(255) DEFAULT NULL COMMENT 'booking name',
  `surname` varchar(255) DEFAULT NULL COMMENT 'booking surname',
  `email` varchar(255) DEFAULT NULL COMMENT 'booking email',
  `phone` varchar(255) DEFAULT NULL COMMENT 'booking phone number',
  `price` double UNSIGNED DEFAULT NULL COMMENT 'booking price',
  `seat` int(10) UNSIGNED DEFAULT NULL COMMENT 'booking seat number'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='bookings table';

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'movie id',
  `title` varchar(255) DEFAULT NULL COMMENT 'movie title',
  `routename` varchar(255) DEFAULT NULL COMMENT 'movie routename',
  `duration` int(10) UNSIGNED DEFAULT NULL COMMENT 'movie duration(minutes)',
  `genre` varchar(255) DEFAULT NULL COMMENT 'movie genre',
  `imageurl` varchar(255) DEFAULT NULL COMMENT 'movie image url',
  `releasedate` date DEFAULT NULL COMMENT 'movie release date',
  `price` double DEFAULT NULL COMMENT 'movie price per ticket'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='movies table';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'booking id';

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'movie id';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
