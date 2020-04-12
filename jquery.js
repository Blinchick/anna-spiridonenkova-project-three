$(function () {
    $('a.landingButton').on('click', function(event) {
        // smooth scroll to first button
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
        setTimeout(() => {
            moduleOne()
        }, 1500);
    });

    moduleOne = () => {
        // module one learning info
        $('header').css('border', '4px solid #F5221B');
        Swal.fire({
            title: 'Meet <br> < header >!',
            text: 'It\'s called < header > because it\'s in the "head" of every web page.',
            confirmButtonText: 'Got it!'
        })
        
        .then(() => {
            $('header').css('border', '4px solid #FFFFFF');
            $('footer').css('border', '4px solid #F5221B');
            Swal.fire({
                title: 'This is <br> < footer >!',
                text: 'It\'s at the very bottom of every web page. Just like your foot is at the very bottom of your body.',
                confirmButtonText: 'Got it!'
            })
                .then(() => {
                    $('footer').css('border', '4px solid #FFFFFF');
                })
                    
            .then(() => {
                $('main').css('border', '4px solid #F5221B');
            Swal.fire({
                title: 'This is <br>< main >!',
                text: 'It has everything you want to see when you open the web page.',
                confirmButtonText: 'Got it!'
            })
            
            .then(() => {
                $('main').css('border', '4px solid #FFFFFF');
            })

                .then(() =>{

                    Swal.fire({
                        title: 'Hooray!',
                        text: "You just learnt the most popular tags used to create any web page. Now it's time for the real challenge. Are you ready?",
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, let\'s do it!',
                        cancelButtonText: 'I want to review tags one more time'
                    }).then((result) => {
                        if (result.value) {
                            $('html, body').animate({
                                scrollTop: $("#infoQuizPage").offset().top
                            }, 1000);
                            window.scrollTo(0, 100);
                        } else {
                            return moduleOne();
                        }
                    });
                });
            });
        });
    };

    $('a.quizButton').on('click', function (event) {
        // smooth scroll
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
        setTimeout(() => {
            quizOne();
        }, 1500); 
    });

    // QUIZ part
    //questions
    questionOne = () => {
        Swal.fire({
            text: 'What is on the bottom of a web page?',
            confirmButtonText: 'On it!'
        });
    }

    questionTwo = () => {
        Swal.fire({
            text: 'Where can you find major information of a web page?',
            confirmButtonText: 'On it!'
        });
    }

    questionThree = () => {
        Swal.fire({
            text: 'What\'s on the top of a page?',
            confirmButtonText: 'On it!'
        });
    }

    randomQuestions = () => {

    //making random questions
        let questionsArray = [questionOne, questionTwo, questionThree];
        let randomQuestion1 = questionsArray[Math.floor(Math.random() * questionsArray.length)];
        let index1 = questionsArray.indexOf(randomQuestion1);
        questionsArray.splice(index1, 1);

        let randomQuestion2 = questionsArray[Math.floor(Math.random() * questionsArray.length)];
        let index2 = questionsArray.indexOf(randomQuestion2);
        questionsArray.splice(index2, 1);
        
        let randomQuestion3 = questionsArray[0];

        randomQuestionsArray = [randomQuestion1, randomQuestion2, randomQuestion3];

        return randomQuestionsArray;

    }
    
    randomTags = () => {
        //making random tags
        let myTags = ['<p>< aside \></p>', '<p>< footer \></p>', '<p>< main \></p>', '<p>< div \></p>', '<p>< header \></p>',]
        let randomTag1 = myTags[Math.floor(Math.random() * myTags.length)];
        let tagIndex1 = myTags.indexOf(randomTag1);
        myTags.splice(tagIndex1, 1);
        
        let randomTag2 = myTags[Math.floor(Math.random() * myTags.length)];
        let tagIndex2 = myTags.indexOf(randomTag2);
        myTags.splice(tagIndex2, 1);
        
        let randomTag3 = myTags[Math.floor(Math.random() * myTags.length)];
        let tagIndex3 = myTags.indexOf(randomTag3);
        myTags.splice(tagIndex3, 1);
        
        let randomTag4 = myTags[Math.floor(Math.random() * myTags.length)];
        let tagIndex4 = myTags.indexOf(randomTag4);
        myTags.splice(tagIndex4, 1);
        
        let randomTag5 = myTags[0];
        
        let myNewTags = [randomTag1, randomTag2, randomTag3, randomTag4, randomTag5];
        
        return myNewTags;
    }
    
    addTagsToClouds = () => {
        let tags = randomTags();
        $(".quizOne .cloudOne .cloud p").append(tags[0]);
        $(".quizOne .cloudTwo .cloud p").append(tags[1]);
        $(".quizOne .cloudThree .cloud p").append(tags[2]);
        $(".quizOne .cloudFour .cloud p").append(tags[3]);
        $(".quizOne .cloudFive .cloud p").append(tags[4]);
    }
    
    quizOne = () => {
        let questions = randomQuestions();
        questions[0]();
        addTagsToClouds();

        if (questions[0] === questionOne) {
            $('.quizOne .cloud p:contains("footer")').on('click', function () {
                $('.quizOne .cloud p').empty();
                finalMessage();
            });
            $('.quizOne .cloud p:not(:contains("footer"))').on('click', function () {
                fail();
            });

        } else if (questions[0] === questionTwo) {
            $('.quizOne .cloud p:contains("main")').on('click', function () {
                $('.quizOne .cloud p').empty();
                finalMessage();
            });
            $('.quizOne .cloud p:not(:contains("main"))').on('click', function () {
                fail();
            });

        } else if (questions[0] === questionThree) {
            $('.quizOne .cloud p:contains("header")').on('click', function () {
                $('.quizOne .cloud p').empty();
                finalMessage();
            });
            $('.quizOne .cloud p:not(:contains("header"))').on('click', function () {
                fail();
            });
        } else {
            fail();
        }
    }

    //in case user scrolls to another section
    $('.infoPage, .samplePage, .infoQuizPage, .finalPage').on('click', function () {
        $('.quizOne .cloud p').empty();
    })

    fail = () => {
        Swal.fire({
            icon: 'error',
            title: 'Try again!',
            showConfirmButton: false
        }).then((result) => {
            $('.quizOne .cloud p').empty();
            return quizOne();
        });
    }

    finalMessage = () => {
        Swal.fire({
            icon: 'success',
            text: "That's correct! Wanna try one more time?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, let\'s do it!',
            cancelButtonText: 'No, I\'m good.'
        }).then((result) => {
            if (result.value) {
                return quizOne();
            } else {
                $('html, body').animate({
                    scrollTop: $("#finalPage").offset().top
                }, 1000);
                window.scrollTo(0, 100);
            }
        });
    }

});
