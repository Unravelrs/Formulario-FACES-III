-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: formularioFACES
-- ------------------------------------------------------
-- Server version	5.5.5-10.5.8-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuestas` (
  `Nombre` varchar(100) DEFAULT NULL,
  `PrimerApellido` varchar(100) DEFAULT NULL,
  `SegundoApellido` varchar(100) DEFAULT NULL,
  `NSS` varchar(100) DEFAULT NULL,
  `Edad` varchar(10) DEFAULT NULL,
  `Sexo` varchar(100) DEFAULT NULL,
  `Ocupacion` varchar(100) DEFAULT NULL,
  `ResPares` int(11) DEFAULT NULL,
  `ResNones` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestas`
--

LOCK TABLES `respuestas` WRITE;
/*!40000 ALTER TABLE `respuestas` DISABLE KEYS */;
INSERT INTO `respuestas` VALUES ('Emmanuel','Galeana','Galeana','1231245','25-30 años','Mujer','Autoempleo',22,23);
INSERT INTO `respuestas` VALUES ('Emmanuel','Galeana','Galeana','123513','25-30 años','Hombre','Autoempleo',30,30);
INSERT INTO `respuestas` VALUES ('Emmanuel','Galeana','Galeana','11222332423','25-30 años','Mujer','Sin empleo',16,16);
INSERT INTO `respuestas` VALUES ('Emmanuel','Galeana','Galeana','11222332423','25-30 años','Mujer','Sin empleo',16,16);
INSERT INTO `respuestas` VALUES ('Emmanuel','Galeana','Galeana','11222332423','25-30 años','Mujer','Sin empleo',16,16);
/*!40000 ALTER TABLE `respuestas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'formularioFACES'
--
/*!50003 DROP PROCEDURE IF EXISTS `insertData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `insertData`(`apellido1` VARCHAR(100),`apellido2` VARCHAR(100),`edad` VARCHAR(100),`nombre` VARCHAR(100),`nss`VARCHAR(100),`ocupacion` VARCHAR(100),`resnones` INT,`respares` INT,`sexo` VARCHAR(100))
begin

	insert into formularioFACES.respuestas(PrimerApellido,SegundoApellido,Edad,Nombre,NSS,Ocupacion,ResNones,ResPares,Sexo)

	values(apellido1,apellido2,edad,nombre,nss,ocupacion,resnones,respares,sexo);

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-18 19:28:02
