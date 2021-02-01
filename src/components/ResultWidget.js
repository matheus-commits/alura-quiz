import React from 'react';
import Widget from './Widget.js';
import Button from './Button';


export default function ResultWidget({results}){

    

    return(
        <Widget>
            <Widget.Header>
            Resultado
            </Widget.Header>
            <Widget.Content>
                <p>Mandou bem</p>
                <h3>Você acertou {results.filter((x) => x).length} questões, parabéns!</h3>
                <p>ScoreBoard</p>
                <Button type="submit">Adicionar ao meu projeto</Button>
                <p className="center-align">Voltar para home</p>
            </Widget.Content>
        </Widget>
        
    );
};