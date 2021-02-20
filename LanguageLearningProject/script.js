let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mesca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
];

let app = {
    start: function(){

        this.currentPosition = 0;

        this.score = 0;

        //Get alternatives
        let alts = document.querySelectorAll('.alternative');
   
        alts.forEach(function(element, index) {
            element.addEventListener('click', function() {

                //Check correct answer
                this.checkAnswer(index);   
            }.bind(this));
        }.bind(this));

    //Initialize stats
    this.updateStats();
    
    //Show first question
    this.showQuestion(questions[this.currentPosition]); 
    },
    showQuestion: function(q){

        // Show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        //Show alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach(function(element, index) {
            element.textContent = q.alternatives[index];
    });

    },
    checkAnswer: function(userSelected) {

        let currentQuestion = questions[this.currentPosition];

        if (currentQuestion.correctAnswer == userSelected) {
            //correct
            console.log('Correct!');
            this.score++;
            this.showResult(true);
        } else {
            //not correct
            console.log('Incorrect!');
            this.showResult(false);
        }

        //Refresh stats
        this.updateStats();

        //Increase position
        this.increasePosition();

        //Show the next question
        this.showQuestion(questions[this.currentPosition]); 

    },

    increasePosition: function() {
        this.currentPosition++;

        if (this.currentPosition == questions.length) {
            this.currentPosition = 0;
        }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = "Your Score: " + this.score;
    },

    showResult: function(isCorrect) {

        let resultDiv = document.getElementById('result');
        let result = '';

        //Checks
        if (isCorrect) {
            result = 'Correct!';
        } else {
            //Get the current question
            let currentQuestion = questions[this.currentPosition];

            //Get correct answer index
            let correctAnswerIndex = currentQuestion.correctAnswer;

            //Get correct answer text
            let correctAnswerText = currentQuestion.alternatives[correctAnswerIndex];

            result = 'Wrong! The correct answer is ' + correctAnswerText;
        }

        resultDiv.textContent = result;
    }
};


 app.start();