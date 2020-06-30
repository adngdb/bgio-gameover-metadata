import { FlatFile, Server } from 'boardgame.io/server';
import Game from './Game';

const server = Server({
    games: [Game],
    db: new FlatFile({
        dir: './storage',
        logging: true,
    }),
});
server.run(8000);
