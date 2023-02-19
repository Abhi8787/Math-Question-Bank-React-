import React from "react";
import "./QuizView.css";
import { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useEffect } from "react";

function QuizView({ questions, currentQuestion }) {
    const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
            packages: { "[+]": ["html"] },
            inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"],
            ],
            displayMath: [
                ["$$", "$$"],
                ["\\[", "\\]"],
            ],
        },
    };

    let [qqq, setqqq] = useState("");
    let json = null;
    async function getdata() {
        let res = await fetch(questions[currentQuestion].question);
        json = await res.json();
        console.log(json[0].Question);
        setqqq(json[0].Question);
    }
    useEffect(() => {
        getdata();
    }, [questions]);
    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div class="card bore=der-bottom-0">
                <div class="card-header text-center">
                    <h1>
                        Question {currentQuestion + 1} / {questions.length}
                    </h1>
                </div>
                <div class="card-body">
                    <div className="question-text">
                        <MathJaxContext config={config}>
                            <MathJax inline dynamic>
                                <h3>{"$" + qqq + "$"}</h3>
                            </MathJax>{" "}
                            {/* <MathJax>{qqq}</MathJax> */}
                        </MathJaxContext>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuizView;
