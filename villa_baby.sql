-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03/06/2026 às 04:46
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `villa_baby`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `comments`
--

CREATE TABLE `comments` (
  `comments_id` int(11) NOT NULL,
  `comments_posts_id` int(11) DEFAULT NULL,
  `comments_users_id` int(11) DEFAULT NULL,
  `comments_content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `communities`
--

CREATE TABLE `communities` (
  `communities_id` int(11) NOT NULL,
  `communities_name` varchar(255) NOT NULL,
  `communities_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `communities`
--

INSERT INTO `communities` (`communities_id`, `communities_name`, `communities_desc`) VALUES
(1, 'Janeiro 2026', 'Pais e mães com bebês nascidos em janeiro de 2026.'),
(2, 'Fevereiro 2026', 'Comunidade para compartilhar experiências de bebês nascidos em fevereiro de 2026.'),
(3, 'Março 2026', 'Espaço para famílias de bebês nascidos em março de 2026.'),
(4, 'Abril 2026', 'Troca de dicas e experiências sobre bebês nascidos em abril de 2026.'),
(5, 'Maio 2026', 'Comunidade para pais de primeira viagem com bebês de maio de 2026.'),
(6, 'Junho 2026', 'Grupo para acompanhar o desenvolvimento dos bebês nascidos em junho de 2026.'),
(7, 'Julho 2026', 'Compartilhe dúvidas, conquistas e momentos dos bebês de julho de 2026.'),
(8, 'Agosto 2026', 'Espaço dedicado aos bebês nascidos em agosto de 2026.'),
(9, 'Setembro 2026', 'Comunidade para famílias de bebês nascidos em setembro de 2026.'),
(10, 'Outubro 2026', 'Troca de experiências sobre maternidade e paternidade em outubro de 2026.'),
(11, 'Novembro 2026', 'Grupo para pais e mães de bebês nascidos em novembro de 2026.'),
(12, 'Dezembro 2026', 'Comunidade para acompanhar o crescimento dos bebês de dezembro de 2026.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `employees`
--

CREATE TABLE `employees` (
  `employees_id` int(11) NOT NULL,
  `employees_name` varchar(255) NOT NULL,
  `employees_email` varchar(45) NOT NULL,
  `employees_password` varchar(45) NOT NULL,
  `employees_desc` varchar(255) NOT NULL,
  `employees_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `employees`
--

INSERT INTO `employees` (`employees_id`, `employees_name`, `employees_email`, `employees_password`, `employees_desc`, `employees_url`) VALUES
(1, 'Dra. Ana Martins', 'ana.martins@villababy.com', '123456', 'Pediatra especializada em recém-nascidos e desenvolvimento infantil.', 'https://i.pravatar.cc/300?img=1'),
(2, 'Dr. Carlos Oliveira', 'carlos.oliveira@villababy.com', '123456', 'Neonatologista com experiência em cuidados intensivos neonatais.', 'https://i.pravatar.cc/300?img=2'),
(3, 'Dra. Mariana Costa', 'mariana.costa@villababy.com', '123456', 'Nutricionista infantil focada em introdução alimentar e amamentação.', 'https://i.pravatar.cc/300?img=3'),
(4, 'Fernanda Ribeiro', 'fernanda.ribeiro@villababy.com', '123456', 'Consultora de amamentação certificada e orientadora parental.', 'https://i.pravatar.cc/300?img=4'),
(5, 'Dr. Ricardo Gomes', 'ricardo.gomes@villababy.com', '123456', 'Pediatra especializado em vacinação e crescimento infantil.', 'https://i.pravatar.cc/300?img=5'),
(6, 'Juliana Almeida', 'juliana.almeida@villababy.com', '123456', 'Psicóloga perinatal especialista em maternidade e paternidade.', 'https://i.pravatar.cc/300?img=6'),
(7, 'Dr. Eduardo Santos', 'eduardo.santos@villababy.com', '123456', 'Nutrólogo pediátrico com foco em alimentação saudável para bebês.', 'https://i.pravatar.cc/300?img=7'),
(8, 'Patricia Souza', 'patricia.souza@villababy.com', '123456', 'Enfermeira neonatal especializada em cuidados ao recém-nascido.', 'https://i.pravatar.cc/300?img=8'),
(9, 'Dra. Camila Ferreira', 'camila.ferreira@villababy.com', '123456', 'Fonoaudióloga especialista em alimentação e desenvolvimento infantil.', 'https://i.pravatar.cc/300?img=9'),
(10, 'Dr. Rafael Lima', 'rafael.lima@villababy.com', '123456', 'Pediatra com atuação em acompanhamento do primeiro ano de vida.', 'https://i.pravatar.cc/300?img=10');

-- --------------------------------------------------------

--
-- Estrutura para tabela `likes`
--

CREATE TABLE `likes` (
  `likes_users_id` int(11) NOT NULL,
  `likes_posts_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `posts`
--

CREATE TABLE `posts` (
  `posts_id` int(11) NOT NULL,
  `posts_users_id` int(11) DEFAULT NULL,
  `posts_communities_id` int(11) DEFAULT NULL,
  `posts_content` varchar(255) NOT NULL,
  `posts_url` varchar(255) DEFAULT NULL,
  `posts_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `posts`
--

INSERT INTO `posts` (`posts_id`, `posts_users_id`, `posts_communities_id`, `posts_content`, `posts_url`, `posts_title`) VALUES
(41, 1, 1, 'Hoje saímos da maternidade com nosso bebê. Nunca senti tanta responsabilidade e felicidade ao mesmo tempo.', NULL, ''),
(42, 2, 3, 'Alguém tem dicas para fazer o recém-nascido dormir melhor durante a noite?', NULL, ''),
(43, 3, 5, 'Primeira troca de fralda concluída com sucesso! Achei que seria muito mais difícil.', NULL, ''),
(44, 4, 2, 'Minha filha nasceu ontem e ainda não consigo acreditar que agora sou pai.', NULL, ''),
(45, 5, 4, 'Qual foi o item mais útil que vocês levaram para a maternidade?', NULL, ''),
(46, 6, 6, 'Estamos registrando cada momento do nosso bebê. Como o tempo passa rápido!', NULL, ''),
(47, 7, 8, 'Alguém mais ficou extremamente nervoso no primeiro banho do recém-nascido?', NULL, ''),
(48, 8, 1, 'Hoje escutei o primeiro choro do meu filho. Foi emocionante.', NULL, ''),
(49, 9, 9, 'Quais aplicativos vocês usam para acompanhar horários de mamada?', NULL, ''),
(50, 10, 7, 'Primeira noite em casa e já descobrimos que dormir será um desafio.', NULL, ''),
(51, 1, 10, 'Como vocês organizam as visitas de familiares nos primeiros dias?', NULL, ''),
(52, 2, 2, 'Meu bebê dorme o dia inteiro e fica acordado à noite. É normal?', NULL, ''),
(53, 3, 6, 'A saída da maternidade foi um dos momentos mais marcantes da minha vida.', NULL, ''),
(54, 4, 4, 'Pais experientes, qual o melhor conselho para quem acabou de ter o primeiro filho?', NULL, ''),
(55, 5, 7, 'Hoje consegui acalmar o bebê sozinho pela primeira vez. Vitória desbloqueada!', NULL, ''),
(56, 6, 3, 'Qual marca de fraldas vocês recomendam para recém-nascidos?', NULL, ''),
(57, 7, 5, 'Estou aprendendo a identificar os diferentes tipos de choro. Não é fácil!', NULL, ''),
(58, 8, 8, 'Nosso bebê completou uma semana de vida hoje. Parece que nasceu ontem.', NULL, ''),
(59, 9, 1, 'Alguém mais ficou verificando se o bebê estava respirando durante a madrugada?', NULL, ''),
(60, 10, 9, 'A maternidade entregou várias orientações, mas ainda me sinto perdido às vezes.', NULL, ''),
(61, 1, 2, 'Primeira consulta pediátrica marcada para amanhã. Estamos ansiosos.', NULL, ''),
(62, 2, 4, 'Qual foi a maior surpresa que vocês tiveram ao se tornarem pais?', NULL, ''),
(63, 3, 7, 'O bebê finalmente dormiu e agora ninguém tem coragem de fazer barulho.', NULL, ''),
(64, 4, 10, 'Hoje montamos o álbum de fotos dos primeiros dias na maternidade.', NULL, ''),
(65, 5, 3, 'Estou impressionado com a quantidade de roupas que um recém-nascido usa.', NULL, ''),
(66, 6, 5, 'Meu filho segurou meu dedo pela primeira vez. Momento inesquecível.', NULL, ''),
(67, 7, 9, 'Como vocês dividem as tarefas durante as madrugadas?', NULL, ''),
(68, 8, 6, 'A sensação de colocar o bebê no colo pela primeira vez é indescritível.', NULL, ''),
(69, 9, 8, 'Estamos aprendendo muito todos os dias. Nenhum manual prepara para isso.', NULL, ''),
(70, 10, 1, 'Qual foi o presente mais útil que vocês receberam após o nascimento?', NULL, ''),
(71, 3, 2, 'Hoje conseguimos fazer o bebê dormir sem precisar passear pela casa inteira.', NULL, ''),
(72, 5, 6, 'Meu recém-nascido adora ouvir música calma antes de dormir.', NULL, ''),
(73, 7, 4, 'A equipe da maternidade foi incrível conosco durante todo o processo.', NULL, ''),
(74, 9, 10, 'Pais de primeira viagem: qual foi o maior medo de vocês nos primeiros dias?', NULL, ''),
(75, 2, 8, 'Estamos criando uma cápsula do tempo para nosso bebê abrir no futuro.', NULL, ''),
(76, 4, 5, 'Nunca imaginei que ficaria tão feliz ao ouvir um arroto depois da mamada.', NULL, ''),
(77, 6, 9, 'Hoje foi o primeiro passeio curto do bebê fora de casa.', NULL, ''),
(78, 8, 3, 'As noites são cansativas, mas cada sorriso compensa tudo.', NULL, ''),
(79, 10, 7, 'Descobri que trocar fralda no escuro é uma habilidade que se aprende rápido.', NULL, ''),
(80, 1, 4, 'Qual a melhor forma de organizar as roupas do bebê por tamanho?', NULL, '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_url` varchar(255) DEFAULT NULL,
  `user_desc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_url`, `user_desc`) VALUES
(1, 'Carlos Silva', 'carlos.silva@gmail.com', '123456', 'https://i.pravatar.cc/150?img=11', 'Pai de primeira viagem 👶 | Aprendendo algo novo todo dia'),
(2, 'Ana Souza', 'ana.souza@gmail.com', '123456', 'https://i.pravatar.cc/150?img=12', 'Mãe coruja 🍼 | Compartilhando minha rotina com bebê'),
(3, 'Bruno Lima', 'bruno.lima@gmail.com', '123456', 'https://i.pravatar.cc/150?img=13', 'Pai cansado 😴 | Sobrevivendo às madrugadas'),
(4, 'Juliana Rocha', 'juliana.rocha@gmail.com', '123456', 'https://i.pravatar.cc/150?img=14', 'Mãe de um anjinho 👼 | Amor que não cabe no peito'),
(5, 'Pedro Alves', 'pedro.alves@gmail.com', '123456', 'https://i.pravatar.cc/150?img=15', 'Pai dedicado 💙 | Fraldas, mamadeiras e muito amor'),
(6, 'Mariana Costa', 'mariana.costa@gmail.com', '123456', 'https://i.pravatar.cc/150?img=16', 'Maternidade real 🤱 | Sem filtros, só amor'),
(7, 'Lucas Ferreira', 'lucas.ferreira@gmail.com', '123456', 'https://i.pravatar.cc/150?img=17', 'Pai gamer 🎮 | Agora jogando no modo hard: bebê'),
(8, 'Fernanda Martins', 'fernanda.martins@gmail.com', '123456', 'https://i.pravatar.cc/150?img=18', 'Mãe de primeira viagem 🌸 | Descobrindo esse novo mundo'),
(9, 'Rafael Gomes', 'rafael.gomes@gmail.com', '123456', 'https://i.pravatar.cc/150?img=19', 'Pai babão 🍼 | Cada sorriso vale tudo'),
(10, 'Beatriz Ribeiro', 'beatriz.ribeiro@gmail.com', '123456', 'https://i.pravatar.cc/150?img=20', 'Mãe apaixonada 💕 | Vivendo a magia da maternidade');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comments_id`,`comments_content`),
  ADD KEY `postsid_idx` (`comments_posts_id`),
  ADD KEY `IDusers_idx` (`comments_users_id`);

--
-- Índices de tabela `communities`
--
ALTER TABLE `communities`
  ADD PRIMARY KEY (`communities_id`);

--
-- Índices de tabela `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employees_id`);

--
-- Índices de tabela `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`likes_users_id`,`likes_posts_id`),
  ADD KEY `idposts_idx` (`likes_posts_id`);

--
-- Índices de tabela `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`posts_id`),
  ADD KEY `idusers_idx` (`posts_users_id`),
  ADD KEY `fk_communities_posts_idx` (`posts_communities_id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `communities`
--
ALTER TABLE `communities`
  MODIFY `communities_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `employees`
--
ALTER TABLE `employees`
  MODIFY `employees_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `posts`
--
ALTER TABLE `posts`
  MODIFY `posts_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `IDposts` FOREIGN KEY (`comments_posts_id`) REFERENCES `posts` (`posts_id`),
  ADD CONSTRAINT `IDuser` FOREIGN KEY (`comments_users_id`) REFERENCES `users` (`user_id`);

--
-- Restrições para tabelas `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `postsid` FOREIGN KEY (`likes_posts_id`) REFERENCES `posts` (`posts_id`),
  ADD CONSTRAINT `userid` FOREIGN KEY (`likes_users_id`) REFERENCES `users` (`user_id`);

--
-- Restrições para tabelas `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_communities_posts` FOREIGN KEY (`posts_communities_id`) REFERENCES `communities` (`communities_id`),
  ADD CONSTRAINT `idusers` FOREIGN KEY (`posts_users_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
