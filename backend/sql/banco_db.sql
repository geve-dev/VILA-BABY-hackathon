-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema villa_baby
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema villa_baby
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `villa_baby` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `villa_baby` ;

-- -----------------------------------------------------
-- Table `villa_baby`.`communities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `villa_baby`.`communities` (
  `communities_id` INT NOT NULL AUTO_INCREMENT,
  `communities_name` VARCHAR(255) NOT NULL,
  `communities_desc` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`communities_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `villa_baby`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `villa_baby`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(255) NOT NULL,
  `user_email` VARCHAR(255) NOT NULL UNIQUE,
  `user_password` VARCHAR(45) NOT NULL,
  `user_url` VARCHAR(255) NULL DEFAULT NULL,
  `user_desc` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `villa_baby`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `villa_baby`.`posts` (
  `posts_id` INT NOT NULL AUTO_INCREMENT,
  `posts_users_id` INT NOT NULL,
  `posts_communities_id` INT NOT NULL,
  `posts_content` VARCHAR(255) NOT NULL,
  `posts_url` VARCHAR(255) NULL DEFAULT NULL,
  `posts_title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`posts_id`),
  INDEX `idusers_idx` (`posts_users_id` ASC) VISIBLE,
  INDEX `fk_communities_posts_idx` (`posts_communities_id` ASC) VISIBLE,
  CONSTRAINT `fk_communities_posts`
    FOREIGN KEY (`posts_communities_id`)
    REFERENCES `villa_baby`.`communities` (`communities_id`),
  CONSTRAINT `idusers`
    FOREIGN KEY (`posts_users_id`)
    REFERENCES `villa_baby`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `villa_baby`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `villa_baby`.`comments` (
  `comments_id` INT NOT NULL AUTO_INCREMENT,
  `comments_posts_id` INT NULL DEFAULT NULL,
  `comments_users_id` INT NULL DEFAULT NULL,
  `comments_content` VARCHAR(255) NOT NULL,

  PRIMARY KEY (`comments_id`),

  INDEX `postsid_idx` (`comments_posts_id` ASC) VISIBLE,
  INDEX `IDusers_idx` (`comments_users_id` ASC) VISIBLE,

  CONSTRAINT `IDposts`
    FOREIGN KEY (`comments_posts_id`)
    REFERENCES `villa_baby`.`posts` (`posts_id`),

  CONSTRAINT `IDuser`
    FOREIGN KEY (`comments_users_id`)
    REFERENCES `villa_baby`.`users` (`user_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `villa_baby`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `villa_baby`.`employees` (
  `employees_id` INT NOT NULL AUTO_INCREMENT,
  `employees_name` VARCHAR(255) NOT NULL,
  `employees_email` VARCHAR(45) NOT NULL UNIQUE,
  `employees_password` VARCHAR(45) NOT NULL,
  `employees_desc` VARCHAR(255) NOT NULL,
  `employees_url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`employees_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `villa_baby`.`likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `villa_baby`.`likes` (
  `likes_users_id` INT NOT NULL,
  `likes_posts_id` INT NOT NULL,
  PRIMARY KEY (`likes_users_id`, `likes_posts_id`),
  INDEX `idposts_idx` (`likes_posts_id` ASC) VISIBLE,
  CONSTRAINT `postsid`
    FOREIGN KEY (`likes_posts_id`)
    REFERENCES `villa_baby`.`posts` (`posts_id`),
  CONSTRAINT `userid`
    FOREIGN KEY (`likes_users_id`)
    REFERENCES `villa_baby`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
