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

    let moduleOne = () => {
        // module one learning info
        $('header').css('border', '4px solid #F5221B');
        Swal.fire({
            title: 'Meet < header >!',
            text: 'It\'s called < header > because it\'s in the "head" of every web page.',
            confirmButtonText: 'Got it!'
        })
        
        .then(() => {
            $('header').css('border', '4px solid #FFFFFF');
            $('footer').css('border', '4px solid #F5221B');
            Swal.fire({
                title: 'This is < footer >!',
                text: 'It\'s at the very bottom of every web page. Just like your foot is at the very bottom of your body.',
                confirmButtonText: 'Got it!'
            })
                .then(() => {
                    $('footer').css('border', '4px solid #FFFFFF');
                })
                    
            .then(() => {
                $('main').css('border', '4px solid #F5221B');
            Swal.fire({
                title: 'This is < main >!',
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
            quizOne()
        }, 1500); 
    });

    // QUIZ part
    // success and fail messages
    success = () => {
        Swal.fire({
            icon: 'success',
            title: 'YES',
            showConfirmButton: false,
            timer: 1500
        })
    }

    fail = () => {
        Swal.fire({
            icon: 'error',
            title: 'STUPID',
            showConfirmButton: false
        })
    }

    //questions
    questionOne = () => {
        $('.quizOne .cloud p').empty();
        Swal.fire({
            text: 'Catch the footer cloud.',
            confirmButtonText: 'On it!'
        });
    }

    questionTwo = () => {
        Swal.fire({
            text: 'Catch the main cloud.',
            confirmButtonText: 'On it!'
        });
    }

    questionThree = () => {
        Swal.fire({
            text: 'Catch the header cloud.',
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
    console.log(randomQuestions());

    randomTags = () => {
    //making random tags
        let myTags = ['< aside \>', '< footer \>', '< main \>', '< div \>', '< header \>',]
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
    console.log(randomTags());

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
    }
    // let quizOne = () => {
    //     Swal.fire({
    //         text: 'Catch the cloud with a tag you can find in the bottom of a web page.',
    //         confirmButtonText: 'On it!'
    //     }) 

        // .then (() => {
        //     $(".quizOne .cloudOne .cloud p").append($(aside));
        //     $(".quizOne .cloudTwo .cloud p").append($(footer));
        //     $(".quizOne .cloudThree .cloud p").append($(div));
        //     $(".quizOne .cloudFour .cloud p").append($(header));
        //     $(".quizOne .cloudFive .cloud p").append($(main));

            // $(".quizOne .cloud p:not(:contains('footer'))").on('click', function () {
            //     fail();
            // });

            // $(".quizOne .cloud p:contains('footer')").on('click', function() {
            //     success()
            //     $(".quizOne .cloud p").empty();
            // })

            // $(".quizOne .cloud").on('click', function () {
            //     $(".quizOne .cloud p:contains('footer')").click(success())
                // $(".quizOne .cloud p:not(:contains('footer'))").click(fail());
    //         })
    //     });
    // }

    // let qOne = () => {
    //     Swal.fire({
    //         title: 'Where is < header >?'
    //     })
    // }

    // let qTwo = () => {
    //     Swal.fire({
    //         title: 'Where is < main >?'
    //     })
    // }

    // let qThree = () => {
    //     Swal.fire({
    //         title: 'Where is < footer >?'
    //     })
    // }

    // let quizOne = () => {
    //     qOne();
    //     $('.quizOne header, .quizOne main, .quizOne footer').css('border', '2px solid red');

    //     $('.quizOne footer, .quizOne main').click(function () {
    //         fail();
    //     });

    //     $('.quizOne header').click(function (){
    //         $('.quizOne header').css('border', '3px solid green');
    //         $('.quizOne main, .quizOne footer').css('border', 'none');
    //         success();   
    //         setTimeout(() => {
    //             quizTwo()
    //         }, 2000);
    //     });
    // }

    // let quizTwo = () => {
    //     qTwo();
    //     $('.quizOne header, .quizOne main, .quizOne footer').css('border', '2px solid red');

    //     $('.quizOne footer, .quizOne header').click(function () {
    //         fail();
    //     });

    //     $('.quizOne main').click(function () {
    //         $('.quizOne main').css('border', '3px solid green');
    //         $('.quizOne header, .quizOne footer').css('border', 'none');
    //         success();
    //         setTimeout(() => {
    //             quizThree()
    //         }, 2000);
    //     });
    // }

    // let quizThree = () => {
    //     qThree();
    //     $('.quizOne header, .quizOne main, .quizOne footer').css('border', '2px solid red');

    //     $('.quizOne main, .quizOne header').click(function () {
    //         fail();
    //     });

    //     $('.quizOne footer').click(function () {
    //         $('.quizOne footer').css('border', '3px solid green');
    //         $('.quizOne header, .quizOne main').css('border', 'none');
    //         success();
    //     });
    // }

});
