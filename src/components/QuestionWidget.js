import React from 'react';
import Button from './Button';
import Widget from './Widget';


 export default function QuestionWidget({
    question,
    questionIndex,
    totalQuestions,
    onSubmit,
}) {
    const questionId = `question__${questionIndex}`;
    
    return (
        <Widget>
            <Widget.Header>
                {/* <BackLinkArrow href="/" /> */}
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        return (
                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}
                            >
                                <input
                                    // style={{ display: 'none' }}
                                    id={alternativeId}
                                    name={questionId}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button type="submit">
                        Confirmar
                    </Button>
                </form>
            </Widget.Content>
        </Widget>
    );
}