export default {
    name: 'GameOverTestGame',
    setup: () => {
        return {
            count: 1,
        };
    },
    moves: {
        pass: (G, ctx) => {
            G.count--;
        },
    },
    endIf: (G, ctx) => {
        if (G.count <= 0) {
            return 'finished';
        }
    },
};
