

$(document).ready(function() {

            
    //--1. set initial variables for the game.

    var wins = 0;
    var losses = 0;
    var counter = 0;

    //--2. set initial random numbers for the game.
    
    var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

    //--and display that random number in the html.

    $("#random").text(targetNumber);

    //--and now set the random number for each coin. We will use a shuffle function...

    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

        //--While there remain elements to shuffle...
    while (0 !== currentIndex) {

        //--Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

     //--And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }

    return array;
    }

        //--Used like so...
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    arr = shuffle(arr);
    console.log(arr);
    
        //--3. Add vars, classes, and attributes to each coin and append to html...
    var imageBitcoin = $("<img>");
    var imageEthereum = $("<img>");
    var imageRipple = $("<img>");
    var imageStellar = $("<img>");
    
    imageBitcoin.addClass("btc-image");
    imageEthereum.addClass("eth-image");
    imageRipple.addClass("xrp-image");
    imageStellar.addClass("xlm-image");

    imageBitcoin.attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/200px-Bitcoin.svg.png");
    imageEthereum.attr("src", "https://lh3.googleusercontent.com/RyBsBzz4TQGZfcAsSup8oM0EZ04gugILJsTF37-tHVPr7YELd--IA12pS0w4xx1g1Q");
    imageRipple.attr("src", "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/ripple_xrp_coin-512.png");
    imageStellar.attr("src", "https://image.flaticon.com/icons/svg/825/825462.svg");
    
    imageBitcoin.attr("data-btcvalue", arr | []);
    imageEthereum.attr("data-ethvalue", arr | []);
    imageRipple.attr("data-xrpvalue", arr | []);
    imageStellar.attr("data-xlmvalue", arr | []);

    $("#btc").append(imageBitcoin);
    $("#eth").append(imageEthereum);
    $("#xrp").append(imageRipple);
    $("#xlm").append(imageStellar);
    
        //--4. reset the ranom numbers after a win or loss...
    function resetFunction() {
    
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        arr = shuffle(arr);
        console.log(arr);
    
        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#random").text(targetNumber);
    }
            
        //--5. determine what to do after a win or loss...
    function myFunction() {

    if (counter === targetNumber) {
        $("#message").text("  You Won !").show().delay(2000).fadeOut();
        $("#tally").html(0);
        wins++;
        counter = 0;
        $("#wins").text(wins);
        resetFunction();   
    }

    else if (counter >= targetNumber) {
        $("#message").text("  You Lost !").show().delay(2000).fadeOut();
        $("#tally").html(0);
        losses++;
        counter = 0;
        $("#losses").text(losses);
        resetFunction();   
    }

    }
        //--6. create an on-click event for each coin button.

        //--BITCOIN...
    $(".btc-image").on("click", function() {
     
     counter = counter + arr [0];

     $("#tally").text(counter);

     myFunction();  

    });
       
        //--ETHEREUM...
    $(".eth-image").on("click", function() { 

         counter = counter + arr [1];

        $("#tally").text(counter);

        myFunction();
          
    });

        //--RIPPLE...
    $(".xrp-image").on("click", function() {
        
        counter = counter + arr [2];

        $("#tally").text(counter);

        myFunction();
        
    });

        //--STELLAR...
    $(".xlm-image").on("click", function() {
        
        counter = counter + arr [3];

        $("#tally").text(counter);

        myFunction();
 
    });

    
    });