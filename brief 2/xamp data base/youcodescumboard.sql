-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 29 oct. 2022 à 15:42
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `youcodescumboard`
--

-- --------------------------------------------------------

--
-- Structure de la table `priorities`
--

CREATE TABLE `priorities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `priorities`
--

INSERT INTO `priorities` (`id`, `name`) VALUES
(1, 'Low'),
(2, 'Medium'),
(3, 'High'),
(4, 'Critical');

-- --------------------------------------------------------

--
-- Structure de la table `statuses`
--

CREATE TABLE `statuses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `statuses`
--

INSERT INTO `statuses` (`id`, `name`) VALUES
(1, 'To Do'),
(2, 'In Progress'),
(3, 'Done');

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `priority_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `task_datetime` datetime NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `type_id`, `priority_id`, `status_id`, `task_datetime`, `description`) VALUES
(4, 'test_title', 1, 1, 1, '2022-10-29 00:00:00', 'karime'),
(5, 'Nobis omnis cupidata', 1, 3, 1, '1988-02-09 00:00:00', 'Exercitationem minim'),
(6, 'Ad fugiat neque fug', 2, 4, 1, '1978-02-02 00:00:00', 'Tenetur consequatur'),
(7, 'Libero perferendis e', 1, 4, 2, '1999-01-24 00:00:00', 'Doloribus excepturi '),
(8, 'sssssssssss', 1, 4, 3, '1974-12-25 00:00:00', 'Impedit sint accus'),
(9, 'Dolorum lorem tenetu', 1, 3, 1, '2004-06-18 00:00:00', 'Aliquip voluptas eum'),
(10, 'Perspiciatis quod u', 2, 3, 3, '2021-01-15 00:00:00', 'Deserunt voluptatem '),
(11, 'abdellah', 2, 1, 1, '1997-11-09 00:00:00', 'Assumenda labore atq'),
(12, 'Labore mollitia fuga', 1, 3, 2, '2014-07-09 00:00:00', 'Numquam quidem tempo'),
(13, 'hhhhh', 2, 4, 2, '2018-01-14 00:00:00', 'Nam minus voluptatib'),
(14, 'Qui cupiditate in en', 2, 2, 1, '2000-06-26 00:00:00', 'Adipisicing tempora '),
(15, 'Velit ipsum eum aut', 2, 3, 3, '2001-07-16 00:00:00', 'Hic omnis veniam vi'),
(16, 'Excepturi commodo ve', 2, 1, 2, '2016-12-04 00:00:00', 'Velit iure officia '),
(17, 'FFFFFFFFFFF', 1, 1, 1, '1995-02-19 00:00:00', 'Et et aut non suscip');

-- --------------------------------------------------------

--
-- Structure de la table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'Feature'),
(2, 'Bug');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `priorities`
--
ALTER TABLE `priorities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `priorities`
--
ALTER TABLE `priorities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
