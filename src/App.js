import React from 'react';
import { Lobby } from 'boardgame.io/react';

import Game from './Game';
import Board from './Board';


export default function App() {
    return <Lobby
        gameServer={ `http://${window.location.hostname}:8000` }
        lobbyServer={ `http://${window.location.hostname}:8000` }
        gameComponents={ [{ game: Game, board: Board }] }
    />;
}
