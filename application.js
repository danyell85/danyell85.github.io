$(document).ready(function() {
  about()
  contact()
  console.log("I got here")
});

function about(){
  $(".interest").click(function(e){
    $("html,body").animate({ scrollTop: $('.jumbotron').height() }, "slow");
})
};

function contact(){
  $(".contact").click(function(e){
    $("html,body").animate({ scrollTop: $('.interest').height() }, "slow");
})
};