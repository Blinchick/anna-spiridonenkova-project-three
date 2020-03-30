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
        $('header').css('border', '2px solid red');
        Swal.fire({
            title: 'Meet < header >!',
            text: 'It\'s called < header > because it\'s in the "head" of every web page.',
            confirmButtonText: 'Got it!'
        })
        
        .then(() => {
            $('header').css('border', 'none');
            $('footer').css('border', '2px solid red');
            Swal.fire({
                title: 'This is < footer >!',
                text: 'It\'s at the very bottom of every web page. Just like your foot is at the very bottom of your body.',
                confirmButtonText: 'Got it!'
            })
                    
            .then(() => {
            $('footer, header').css('border', 'none');
            $('main').css('border', '2px red solid');
            Swal.fire({
                title: 'This is < main >!',
                text: 'It has everything you want to see when you open the web page.',
                confirmButtonText: 'Got it!'
            })
            
            .then(() => {
                $('main').css('border', 'none');
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
                                scrollTop: $("#quizPage").offset().top
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
        // smooth scroll to all links
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
        }, 0); 
        // return 1500
    });

    let success = () => {
        Swal.fire({
            icon: 'success',
            title: 'YES',
            showConfirmButton: false,
            timer: 1500
        })
    }

    let fail = () => {
        Swal.fire({
            icon: 'error',
            title: 'STUPID',
            showConfirmButton: false
        })
    }

    let qOne = () => {
        Swal.fire({
            title: 'Where is < header >?'
        })
    }

    let qTwo = () => {
        Swal.fire({
            title: 'Where is < main >?'
        })
    }

    let qThree = () => {
        Swal.fire({
            title: 'Where is < footer >?'
        })
    }

    let quizOne = () => {
        qOne();
        $('.quizOne header, .quizOne main, .quizOne footer').css('border', '2px solid red');

        $('.quizOne footer, .quizOne main').click(function () {
            fail();
        });

        $('.quizOne header').click(function (){
            $('.quizOne header').css('border', '3px solid green');
            $('.quizOne main, .quizOne footer').css('border', 'none');
            success();   
            setTimeout(() => {
                quizTwo()
            }, 2000);
        });
    }

    let quizTwo = () => {
        qTwo();
        $('.quizOne header, .quizOne main, .quizOne footer').css('border', '2px solid red');

        $('.quizOne footer, .quizOne header').click(function () {
            fail();
        });

        $('.quizOne main').click(function () {
            $('.quizOne main').css('border', '3px solid green');
            $('.quizOne header, .quizOne footer').css('border', 'none');
            success();
            setTimeout(() => {
                quizThree()
            }, 2000);
        });
    }

    let quizThree = () => {
        qThree();
        $('.quizOne header, .quizOne main, .quizOne footer').css('border', '2px solid red');

        $('.quizOne main, .quizOne header').click(function () {
            fail();
        });

        $('.quizOne footer').click(function () {
            $('.quizOne footer').css('border', '3px solid green');
            $('.quizOne header, .quizOne main').css('border', 'none');
            success();
        });
    }

});
