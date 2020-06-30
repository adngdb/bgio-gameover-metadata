import React from 'react';


export default function Board(props) {
    const { ctx, moves } = props;

    return <main>
        <p>Gameover: { ctx.gameover }</p>
        <button onClick={ () => moves.finish() }>Finish</button>
    </main>;
}
