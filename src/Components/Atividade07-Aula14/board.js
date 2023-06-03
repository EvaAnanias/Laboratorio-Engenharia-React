import React, { useState, useEffect } from 'react';
import Card from './card';
import Morango from './imagens/morango.jpeg';
import Cenoura from './imagens/cenoura.jpeg';
import Tomate from './imagens/tomate.jpeg';
import Brocolis from './imagens/brocolis.jpeg';

const Board = () => {
	const [cards, setCards] = useState([
		{ id: 1, name: 'Card 1', image: Morango, isFlipped: false },
		{ id: 2, name: 'Card 2', image: Cenoura, isFlipped: false },
		{ id: 3, name: 'Card 3', image: Tomate, isFlipped: false },
		{ id: 4, name: 'Card 4', image: Brocolis, isFlipped: false },
		{ id: 5, name: 'Card 5', image: Morango, isFlipped: false },
		{ id: 6, name: 'Card 6', image: Cenoura, isFlipped: false },
		{ id: 7, name: 'Card 7', image: Tomate, isFlipped: false },
		{ id: 8, name: 'Card 8', image: Brocolis, isFlipped: false },
	]);

	const [flippedCards, setFlippedCards] = useState([]);
	const [shuffledCards, setShuffledCards] = useState([]);

	useEffect(() => {
		shuffleCards();
	}, []);

	const shuffleCards = () => {
		const shuffled = cards.sort(() => Math.random() - 0.5);
		setShuffledCards(shuffled);
	};

	const handleCardClick = (clickedCard) => {
		if (flippedCards.length === 2) {
			setShuffledCards((prevCards) =>
				prevCards.map((card) =>
					card.isFlipped ? { ...card, isFlipped: false } : card
				)
			);

			setFlippedCards([]);
			return;
		}

		setShuffledCards((prevCards) =>
			prevCards.map((card) =>
				card.id === clickedCard.id ? { ...card, isFlipped: true } : card
			)
		);

		setFlippedCards((prevFlippedCards) => [...prevFlippedCards, clickedCard]);
	};

	return (
		<div className="board">
			{shuffledCards.map((card) => (
				<Card key={card.id} card={card} onClick={handleCardClick} />
			))}
		</div>
	);
};

export default Board;
