/*
Navicat MySQL Data Transfer

Source Server         : lac
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : message_table

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2017-03-24 22:46:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for msgtable
-- ----------------------------
DROP TABLE IF EXISTS `msgtable`;
CREATE TABLE `msgtable` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `msg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
