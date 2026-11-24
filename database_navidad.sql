-- ==========================================================
-- BASE DE DATOS: articulos_navidenos_db
-- Tienda de Artículos Navideños
-- ==========================================================

CREATE DATABASE IF NOT EXISTS `articulos_navidenos_db`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `articulos_navidenos_db`;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `detalle_ventas`;
DROP TABLE IF EXISTS `ventas`;
DROP TABLE IF EXISTS `articulos`;
DROP TABLE IF EXISTS `usuarios`;
SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------------------------------------
-- 1. TABLA: usuarios (Sin relación con ventas ni artículos)
-- ----------------------------------------------------------
CREATE TABLE `usuarios` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `usuario` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `rol` VARCHAR(50) NOT NULL DEFAULT 'admin',
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 2. TABLA: articulos (Productos navideños)
-- ----------------------------------------------------------
CREATE TABLE `articulos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(150) NOT NULL,
  `descripcion` VARCHAR(255) DEFAULT NULL,
  `categoria` VARCHAR(100) NOT NULL,
  `precio` DECIMAL(10, 2) NOT NULL,
  `stock` INT NOT NULL DEFAULT 0,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 3. TABLA: ventas (Encabezado de venta)
-- ----------------------------------------------------------
CREATE TABLE `ventas` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `codigo_venta` VARCHAR(50) NOT NULL UNIQUE,
  `fecha` DATE NOT NULL,
  `cliente` VARCHAR(100) NOT NULL,
  `total` DECIMAL(10, 2) NOT NULL,
  `metodo_pago` VARCHAR(50) NOT NULL,
  `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- 4. TABLA: detalle_ventas (Líneas de cada venta)
-- ----------------------------------------------------------
CREATE TABLE `detalle_ventas` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `venta_id` INT NOT NULL,
  `articulo_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(10, 2) NOT NULL,
  `subtotal` DECIMAL(10, 2) NOT NULL,
  CONSTRAINT `fk_detalle_venta` 
    FOREIGN KEY (`venta_id`) 
    REFERENCES `ventas` (`id`) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE,
  CONSTRAINT `fk_detalle_articulo` 
    FOREIGN KEY (`articulo_id`) 
    REFERENCES `articulos` (`id`) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================================
-- INSERCIÓN DE DATOS INICIALES
-- ==========================================================

-- 1 Usuario independiente (sin relación)
INSERT INTO `usuarios` (`id`, `usuario`, `password`, `nombre`, `rol`) VALUES
(1, 'admin', '123', 'Administrador Navideño', 'admin');

-- Artículos navideños
INSERT INTO `articulos` (`id`, `nombre`, `descripcion`, `categoria`, `precio`, `stock`) VALUES
(1, 'Árbol de Navidad Pino Nevado 2.10m', 'Árbol artificial frondoso con efecto nevado y piñas naturales', 'Árboles', 120.00, 15),
(2, 'Set de 24 Esferas Navideñas Doradas y Rojas', 'Esferas brillantes, escarchadas y mates irrompibles de 8cm', 'Decoración', 25.00, 40),
(3, 'Luces LED Navideñas Blanco Cálido 100 Luces', 'Guirnalda de luces LED de 10m para interior y exterior con 8 modos', 'Iluminación', 15.00, 60),
(4, 'Corona Navideña para Puerta 45cm', 'Corona con piñas, frutos rojos, lazo y ramas de pino', 'Decoración', 38.00, 20),
(5, 'Figura Papá Noel Musical con Movimiento', 'Figura de 35cm con música navideña y movimiento realista', 'Figuras', 45.00, 12),
(6, 'Guirnalda Navideña Verde Escarchada 2.7m', 'Guirnalda para barandillas o chimeneas', 'Decoración', 18.00, 30);

-- 2 Ventas registradas
INSERT INTO `ventas` (`id`, `codigo_venta`, `fecha`, `cliente`, `total`, `metodo_pago`) VALUES
(1, 'VNT-2026-001', '2026-11-15', 'Carlos Mendoza', 145.00, 'Tarjeta de Crédito'),
(2, 'VNT-2026-002', '2026-11-20', 'María Gómez', 68.00, 'Efectivo');

-- Detalles de las 2 ventas
-- Venta 1: 1 Árbol (120.00) + 1 Set de Esferas (25.00) = 145.00
INSERT INTO `detalle_ventas` (`venta_id`, `articulo_id`, `cantidad`, `precio_unitario`, `subtotal`) VALUES
(1, 1, 1, 120.00, 120.00),
(1, 2, 1, 25.00, 25.00);

-- Venta 2: 2 Luces LED (30.00) + 1 Corona Navideña (38.00) = 68.00
INSERT INTO `detalle_ventas` (`venta_id`, `articulo_id`, `cantidad`, `precio_unitario`, `subtotal`) VALUES
(2, 3, 2, 15.00, 30.00),
(2, 4, 1, 38.00, 38.00);
