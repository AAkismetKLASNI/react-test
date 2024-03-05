export const gameEndedIsTrue = (currentPlayer) => ({
	type: 'GAME_IS_ENDED_TRUE',
	payload: `Победитель ${currentPlayer}`,
});
