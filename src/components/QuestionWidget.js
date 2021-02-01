import React,{useState} from 'react';
import AlternativesForm from './AlternativesForm';
import Button from './Button';
import Widget from './Widget';


 export default function QuestionWidget({
    question,
    questionIndex,
    totalQuestions,
    onSubmit,
    addResult
}) {

    const[selectedAlternative,setSelectedAlternative] = useState(undefined);
    const isCorrect = selectedAlternative === question.answer;
    const [isFormSubmitted, setIsFormSubmitted] = useState();
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

                <AlternativesForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        setIsFormSubmitted(true);
                        setTimeout(()=>{
                            addResult(isCorrect);
                            onSubmit();
                            setIsFormSubmitted(false)
                            setSelectedAlternative(undefined);
                        },3*1000)
                    }}
                >
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                         const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                         const isSelected = selectedAlternative === alternativeIndex;
                       
                        return (
                            <Widget.Topic
                                key={alternativeId}
                                as="label"
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={isFormSubmitted && alternativeStatus}
                            >
                                <input
                                    style={{ display: 'none' }}
                                    id={alternativeId}
                                    name={questionId}
                                    type="radio"
                                    onChange={()=>{setSelectedAlternative(alternativeIndex)}}
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button 
                        type="submit" 
                        disabled={selectedAlternative !== undefined? false:true}
                    >
                        Confirmar
                    </Button>
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    );
}