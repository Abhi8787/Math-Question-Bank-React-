import { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useEffect } from "react";
import "./App.css";
import QuizView from "./Components/QuizView";

function App() {
    const [index, setIndex] = useState(0);
    const questions = [
        {
            question:
                "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_1",
        },
        {
            question:
                "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2",
        },
        {
            question:
                "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_3",
        },
        {
            question:
                "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_4",
        },
        {
            question:
                "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_5",
        },
    ];

    // async function getdata() {
    //     let res = await fetch(
    //         "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2"
    //     );

    //     console.log(await res.json());
    // }

    // useEffect(() => {
    //     getdata();
    // }, []);

    const currentQuestion = questions[index];

    // Function to handle next and previous
    const handleClick = (direction) => {
        if (direction === "next") {
            setIndex(index + 1);
        } else if (direction === "prev" && index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <div id="questionBox" class="card border-primary">
                <QuizView questions={questions} currentQuestion={index} />
                <div class="row">
                    <div id="button1" class="col">
                        {index > 0 && (
                            <button
                                type="button"
                                class="btn btn-primary btn-lg"
                                onClick={() => handleClick("prev")}
                            >
                                Previous
                            </button>
                        )}
                    </div>
                    <div id="button2" class="col">
                        <div class="float-end">
                            {index < questions.length - 1 && (
                                <button
                                    type="button"
                                    class="btn btn-primary btn-lg"
                                    onClick={() => handleClick("next")}
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
