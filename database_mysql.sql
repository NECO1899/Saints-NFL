-- ==========================================================
-- SCRIPT DE BASE DE DATOS MYSQL PARA EL PROYECTO
-- Basado en los modelos y estructuras del Backend
-- ==========================================================

CREATE DATABASE IF NOT EXISTS `project_pre` 
  DEFAULT CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE `project_pre`;

-- Desactivar temporalmente revisión de claves foráneas para limpieza
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `temporada`;
DROP TABLE IF EXISTS `detalle_temporada`;
DROP TABLE IF EXISTS `temporada_plantilla`;
DROP TABLE IF EXISTS `usuarios`;
SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------------------------------------
-- 1. TABLA: temporada_plantilla (Jugadores / Integrantes)
-- ----------------------------------------------------------
CREATE TABLE `temporada_plantilla` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(100) NOT NULL,
  `estado` VARCHAR(100) NOT NULL,
  `ciudad` VARCHAR(100) NOT NULL,
  `posicion` VARCHAR(50) NOT NULL,
  `estadisticas` VARCHAR(255) DEFAULT NULL,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 2. TABLA: detalle_temporada (Encuentros y detalles)
-- ----------------------------------------------------------
CREATE TABLE `detalle_temporada` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `fecha` DATE NOT NULL,
  `estadio` VARCHAR(150) NOT NULL,
  `rival` VARCHAR(100) NOT NULL,
  `marcador` VARCHAR(20) NOT NULL,
  `plantilla` VARCHAR(100) NOT NULL,
  `plantillaId` INT DEFAULT NULL,
  `temporadaId` INT DEFAULT NULL,
  `anio` INT DEFAULT NULL,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_detalle_plantilla` 
    FOREIGN KEY (`plantillaId`) 
    REFERENCES `temporada_plantilla` (`id`) 
    ON DELETE SET NULL 
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 3. TABLA: temporada (Resumen de temporadas)
-- ----------------------------------------------------------
CREATE TABLE `temporada` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `anio` INT NOT NULL,
  `titulo` VARCHAR(150) NOT NULL,
  `noTD` INT NOT NULL,
  `mvp` VARCHAR(100) NOT NULL,
  `detalleTemporadaId` INT DEFAULT NULL,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_temporada_detalle` 
    FOREIGN KEY (`detalleTemporadaId`) 
    REFERENCES `detalle_temporada` (`id`) 
    ON DELETE SET NULL 
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 4. TABLA: usuarios (Para el sistema de Login)
-- ----------------------------------------------------------
CREATE TABLE `usuarios` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `usuario` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `rol` VARCHAR(50) NOT NULL DEFAULT 'usuario',
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ==========================================================
-- INSERCIÓN DE DATOS INICIALES (Mismos datos del Backend)
-- ==========================================================

-- Datos de temporada_plantilla
INSERT INTO `temporada_plantilla` (`id`, `nombre`, `estado`, `ciudad`, `posicion`, `estadisticas`) VALUES
(1, 'Tyler Shough', 'Texas', 'Arlington', 'Quarterback', '3850 Yds, 42 TD, 8 INT'),
(2, 'Chris Olave', 'Florida', 'Jacksonville', 'Wide Receiver', '1120 Yds, 10 TD, 85 REC');

-- Datos de detalle_temporada
INSERT INTO `detalle_temporada` (`id`, `fecha`, `estadio`, `rival`, `marcador`, `plantilla`, `plantillaId`, `anio`) VALUES
(1, '2024-09-15', 'Caesars Superdome', 'Atlanta Falcons', '24-17', 'Plantilla Titular 2024', 1, 2024),
(2, '2024-09-22', 'Mercedes-Benz Stadium', 'Carolina Panthers', '31-20', 'Plantilla Alterna 2024', 2, 2024);

-- Datos de temporada
INSERT INTO `temporada` (`id`, `anio`, `titulo`, `noTD`, `mvp`, `detalleTemporadaId`) VALUES
(1, 2024, 'Campeón Divisional', 42, 'Tyler Shough', 1),
(2, 2023, 'Subcampeón de Conferencia', 38, 'Chris Olave', 2);

-- Datos de usuarios para Login
INSERT INTO `usuarios` (`id`, `usuario`, `password`, `nombre`, `rol`) VALUES
(1, 'admin', '123', 'Administrador', 'admin'),
(2, 'esteban', '123', 'Esteban', 'usuario');
