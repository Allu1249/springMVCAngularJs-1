jQuery(document).ready(function(){

    $.data(document.body,"personDetails",$('#PersonDetails').html());
    $("#addMore").click(function(){
            var nextPerson=$.data(document.body,"personDetails");
            console.log("this is click of add more"+nextPerson);
//            nextPerson
            $('#PersonWrapper').append(nextPerson)


    });

});