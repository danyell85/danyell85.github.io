$(document).ready(function() {
  about()
});

function about(){
  $(".interest").click(function(e){
    $("html,body").animate({ scrollTop: $('.jumbotron').height() }, "slow");
})
};