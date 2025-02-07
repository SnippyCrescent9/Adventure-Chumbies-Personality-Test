import Button from "../Button";

function QuizContainer () {
    //need to create list of questions and answers: text and images

    //starts: simple button insdie the form box saying to take quiz

    //when clicked, form box changes size and displays in order from top to bottom: Question, Image for choices, choices, prev and next button
        //Clicking on Prev will go back one questions, clicking next will go to next question
        //need a limit to check taht currentQuestionIndex < questions array length -1

    //when reaching the end of the quiz, next button changes to Submit
        //when submit is clicked, prev button turns to take quiz again, and next button becomes Share Adventure Chumbie with friends!
            //clicking on take quiz again reloads quiz from the start
            //clicking on Share button creates url to share with friends to take Quiz
}

export default QuizContainer