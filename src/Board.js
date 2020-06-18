import React from 'react';


export default function Board(props) {
    const { G, ctx, moves } = props;

    return <main>
        <p>Count: { G.count }</p>
        <p>Gameover: { ctx.gameover }</p>
        <button onClick={ () => moves.pass() }>Pass</button>
    </main>;
}
