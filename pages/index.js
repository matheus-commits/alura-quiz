import React, {useState} from 'react';
import {useRouter} from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Link from '../src/components/Link';
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
        <Widget
           as={motion.section}
           transition={{ delay: 0, duration: 0.5 }}
           variants={{
             show: { opacity: 1, y: '0' },
             hidden: { opacity: 0, y: '100%' },
           }}
           initial="hidden"
           animate="show"
        >
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

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Da uma olhada nesses quizes incríveis que o pessoal 
              da Imersão Alura fez:
            </p>

            <ul>
              {db.external.map(
                (linkExterno) =>{
                  const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                  return( 
                    <li key={linkExterno}>
                      <Widget.Topic
                      as={Link}
                        href={linkExterno}
                        >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                   
                    )
                }
              )}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer 
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/matheus-commits" />
    </QuizBackground>
  );
}