export default {
    name: 'GameOverTestGame',
    moves: {
        finish: (G, ctx) => {
            ctx.events.endGame('finished');
        },
    },
};
