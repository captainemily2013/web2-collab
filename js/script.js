var puzzleSolve = false;
function rotationImg(e) {
    var img = $(e.target);
    var currentRot = img.attr("data-rot");
    console.log("clicked");
    if (currentRot == 0){
        img.css("transform", "rotate(90deg)");
        img.attr("data-rot", 1);
    } else if (currentRot == 1) {
        img.css("transform", "rotate(180deg)");
        img.attr("data-rot", 2);
    } else if (currentRot == 2) {
        img.css("transform", "rotate(270deg)");
        img.attr("data-rot", 3);
    } else if (currentRot == 3) {
        img.attr("data-rot", 0);
        img.css("transform", "rotate(0deg)");
    } else {
        img.attr("data-rot", 0);
        img.css("transform", "rotate(0deg)");
    }
}
function testLight(){
    var one = $('#one').attr("data-rot");
    var two = $('#two').attr("data-rot");
    var three = $('#three').attr("data-rot");
    var four = $('#four').attr("data-rot");
    var five = $('#five').attr("data-rot");
    var six = $('#six').attr("data-rot");
    var seven = $('#seven').attr("data-rot");
    var eight = $('#eight').attr("data-rot");
    var nine = $('#nine').attr("data-rot");
    var ten = $('#ten').attr("data-rot");
    var eleven = $('#eleven').attr("data-rot");
    var twelve = $('#twelve').attr("data-rot");
    var thirteen = $('#thirteen').attr("data-rot");
    var fourteen = $('#fourteen').attr("data-rot");
    var fifteen = $('#fifteen').attr("data-rot");
    var sixteen = $('#sixteen').attr("data-rot");
    var seventeen = $('#seventeen').attr("data-rot");
    var eighteen = $('#eighteen').attr("data-rot");
    var nineteen = $('#nineteen').attr("data-rot");
    var twenty = $('#twenty').attr("data-rot");
    var twentyOne = $('#twenty-one').attr("data-rot");
    var twentyTwo = $('#twenty-two').attr("data-rot");
    var twentyThree = $('#twenty-three').attr("data-rot");
    var twentyFour = $('#twenty-four').attr("data-rot");
    var twentyFive = $('#twenty-five').attr("data-rot");
    var lightOne = $('#light-two-one')
    var lightTwo = $('#light-two-two').attr("data-rot");
    var lightThree = $('#light-two-three').attr("data-rot");
    var lightFour = $('#light-two-four').attr("data-rot");
    var lightFive = $('#light-two-five').attr("data-rot");

        if (one == 1 || one == 3){
            $("#light-one").css("display","inline");
            fuseOne = true;
        } else {
            $("#light-one").css("display","none");
            fuseOne = false;
        }
        if (two == 2){
            $("#light-two").css("display","inline");
            fuseTwo = true;
        } else {
            $("#light-two").css("display","none");
            fuseTwo = false;
        }
        if (three == 1){
            $("#light-three").css("display","inline");
            fuseThree = true;
        } else {
            $("#light-three").css("display","none");
            fuseThree = false;
        }
        if (four == 3){
            $("#light-four").css("display","inline");
            fuseFour = true;
        } else {
            $("#light-four").css("display","none");
            fuseFour = false;
        }
        if (five == 0){
            $("#light-five").css("display","inline");
            fuseFive = true;
        } else {
            $("#light-five").css("display","none");
            fuseFive = false;
        }
        if (six == 1 || six == 3){
            $("#light-six").css("display","inline");
            fuseSix = true;
        } else {
            $("#light-six").css("display","none");
            fuseSix = false;
        }
        if (seven == 2){
            $("#light-seven").css("display","inline");
            fuseSeven = true;
        } else {
            $("#light-seven").css("display","none");
            fuseSeven = false;
        }
        if (eight == 3){
            $("#light-eight").css("display","inline");
            fuseEight = true;
        } else {
            $("#light-eight").css("display","none");
            fuseEight = false;
        }
        if (nine == 2){
            $("#light-nine").css("display","inline");
            fuseNine = true;
        } else {
            $("#light-nine").css("display","none");
            fuseNine = false;
        }
        if (ten == 1 || ten == 3){
            $("#light-ten").css("display","inline");
            fuseTen = true;
        } else {
            $("#light-ten").css("display","none");
            fuseTen = false;
        }
        if (eleven == 2){
            $("#light-eleven").css("display","inline");
            fuseEleven = true;
        } else {
            $("#light-eleven").css("display","none");
            fuseEleven = false;
        }
        if (twelve == 2){
            $("#light-twelve").css("display","inline");
            fuseTwelve = true;
        } else {
            $("#light-twelve").css("display","none");
            fuseTwelve = false;
        }
        if (thirteen == 1 || thirteen == 3){
            $("#light-thirteen").css("display","inline");
            fuseThirteen = true;
        } else {
            $("#light-thirteen").css("display","none");
            fuseThirteen = false;
        }
        if (fourteen == 2){
            $("#light-fourteen").css("display","inline");
            fuseFourteen = true;
        } else {
            $("#light-fourteen").css("display","none");
            fuseFourteen = false;
        }
        if (fifteen == 0|| fifteen == 2){
            $("#light-fifteen").css("display","inline");
            fuseFifteen = true;
        } else {
            $("#light-fifteen").css("display","none");
            fuseFifteen = false;
        }
        if (sixteen == 1){
            $("#light-sixteen").css("display","inline");
            fuseSixteen = true;
        } else {
            $("#light-sixteen").css("display","none");
            fuseSixteen = false;
        }
        if (seventeen == 1 || seventeen == 3){
            $("#light-seventeen").css("display","inline");
            fuseSeventeen = true;
        } else {
            $("#light-seventeen").css("display","none");
            fuseSeventeen = false;
        }
        if (eighteen == 2){
            $("#light-eighteen").css("display","inline");
            fuseEighteen = true;
        } else {
            $("#light-eighteen").css("display","none");
            fuseEighteen = false;
        }
        if (nineteen == 2){
            $("#light-nineteen").css("display","inline");
            fuseNineteen = true;
        } else {
            $("#light-nineteen").css("display","none");
            fuseNineteen = false;
        }
        if (twenty == 1){
            $("#light-twenty").css("display","inline");
            fuseTwenty = true;
        } else {
            $("#light-twenty").css("display","none");
            fuseTwenty = false;
        }
        if (twentyOne == 1){
            $("#light-twenty-one").css("display","inline");
            fuseTwentyOne = true;
        } else {
            $("#light-twenty-one").css("display","none");
            fuseTwentyOne = false;
        }
        if (twentyTwo == 1 || twentyTwo == 3){
            $("#light-twenty-two").css("display","inline");
            fuseTwentyTwo = true;
        } else {
            $("#light-twenty-two").css("display","none");
            fuseTwentyTwo = false;
        }
        if (twentyThree == 1){
            $("#light-twenty-three").css("display","inline");
            fuseTwentyThree = true;
        } else {
            $("#light-twenty-three").css("display","none");
            fuseTwentyThree = false;
        }
        if (twentyFour == 3){
            $("#light-twenty-four").css("display","inline");
            fuseTwentyFour = true;
        } else {
            $("#light-twenty-four").css("display","none");
            fuseTwentyFour = false;
        }
        if (twentyFive == 0){
            $("#light-twenty-five").css("display","inline");
            fuseTwentyFive = true;
        } else {
            $("#light-twenty-five").css("display","none");
            fuseTwentyFive = false;
        }

}
function testLightTwo() {
    var x = document.getElementById("buzz");
    if (fuseOne && fuseTwo && fuseThree && fuseFour && fuseFive && fuseEight && fuseNine && fuseTen && fuseFifteen == true){
        $("#light-two-one").css("display","inline");
        lightTwoOne = true;
    } else {
        $("#light-two-one").css("display","none");
        lightTwoOne = false;
    }

    if (fuseSix && fuseSeven && fuseTwelve && fuseThirteen && fuseFourteen && fuseFifteen && fuseNineteen && fuseTwenty == true){
        $("#light-two-two").css("display","inline");
        lightTwoTwo = true;
    } else {
        $("#light-two-two").css("display","none");
        lightTwoTwo = false;
    }

    if (fuseEleven && fuseTwelve && fuseThirteen && fuseFourteen && fuseFifteen && fuseNineteen && fuseTwenty == true){
        $("#light-two-three").css("display","inline");
        lightTwoThree = true;
    } else {
        $("#light-two-three").css("display","none");
        lightTwoThree = false;
    }

    if (fuseSixteen && fuseSeventeen && fuseEighteen && fuseTwentyThree && fuseTwentyFour && fuseTwentyFive && fuseTwenty && fuseFifteen == true){
        $("#light-two-four").css("display","inline");
        lightTwoFour = true;
    } else {
        $("#light-two-four").css("display","none");
        lightTwoFour = false;
    }

    if (fuseTwentyOne && fuseTwentyTwo && fuseTwentyThree && fuseTwentyFour && fuseTwentyFive && fuseTwenty && fuseFifteen == true){
        $("#light-two-five").css("display","inline");
        lightTwoFive = true;
    } else {
        $("#light-two-five").css("display","none");
        lightTwoFive = false;
    }

    if (lightTwoOne && lightTwoTwo && lightTwoThree && lightTwoFour && lightTwoFive == true){
        $("#correct").css("display","inline");
        puzzleSolve = true;
        x.play();

    } else {
        $("#correct").css("display","none");
        puzzleSolve = false;
    }
    return puzzleSolve;
    console.log(puzzleSolve);
}
function puzzleTest(puzzleSolve){
    var finalTest = puzzleSolve;
    if(finalTest == true){
        $("#nextPage").css("display","flex");
    } else {
        alert('A fuse is out of place.');
    }
    console.log(puzzleSolve);
}

var test = document.getElementById("submit");
test.addEventListener('click', function(){
    puzzleTest(puzzleSolve);
},false);

var img = document.getElementById("container");
img.addEventListener('click', function(e){
    rotationImg(e);
    testLight();
    testLightTwo();
},false);
