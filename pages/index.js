import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';


export default function Home() {

  const [name, setName]=useState('');
  const router = useRouter();

  function handleSubmit(e){
    e.preventDefault();
    router.push(`/quiz/?name=${name}`)
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={handleSubmit}>
            <Input
                name="user-name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz ai seu nome "
                value={name}
              />
              <Button type="submit" disabled={name!==''?false : true}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Da uma olhada nesses quizes incríveis que o pessoal 
              da Imersão Alura fez:
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/matheus-commits" />
    </QuizBackground>
  );
}