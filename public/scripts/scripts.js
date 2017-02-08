//Listen for character selections
$(document).on('click', '.char1', function() {
    $(".bioDisplay").html("Character 1");
    $(".characterSelection").css({ "display": "inline-block" });
});

$(document).on('click', '.char2', function() {
    $(".bioDisplay").html("Character 2");
    $(".characterSelection").css({ "display": "inline-block" });
});

$(document).on('click', '.char3', function() {
    $(".bioDisplay").html("Character 3");
    $(".characterSelection").css({ "display": "inline-block" });
});

$(document).on('click', '.char4', function() {
    $(".bioDisplay").html("Character 4");
    $(".characterSelection").css({ "display": "inline-block" });
});

$(document).on('click', '.char5', function() {
    $(".bioDisplay").html("Character 5");
    $(".characterSelection").css({ "display": "inline-block" });
});

$(document).on('click', '.char6', function() {
    $(".bioDisplay").html("Character 6");
    $(".characterSelection").css({ "display": "inline-block" });
});

$(document).on('click', '.selectedCharacter', function() {
    redirect('/index');
});

//Fighter Ready to take action animation
function fighterReady() {
   //Do Something to indicate it is the player's turn
}

function showFighterMenu() {
   //Show the attack menu for the relevant fighter
}

function trackFigherMenu() {
    //Enable icon for top choice
    $("#attackSelector").html("<i class='fa fa-chevron-right selector' aria-hidden='true'></i>");

    

}

$( document ).ready(function() {
    fighterReady();
    showFighterMenu()

    // $("#attackSelector").html("<i class='fa fa-chevron-right selector' aria-hidden='true'></i>");
    $("#defendSelector").html("<i class='fa fa-chevron-right selector' aria-hidden='true'></i>");
    $("#magicSelector").html("<i class='fa fa-chevron-right selector' aria-hidden='true'></i>");
    $("#itemSelector").html("<i class='fa fa-chevron-right selector' aria-hidden='true'></i>");
})



// <i class="fa fa-chevron-right white" aria-hidden="true"></i>