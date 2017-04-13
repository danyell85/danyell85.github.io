$(document).ready(function() {
  about()
  contact()
  console.log("I got here")
});

function about(){
  $(".interestloc").click(function(e){
    $("html,body").animate({ scrollTop: $('.jumbotron').height() }, "slow");
})
};

function contact(){
  $(".contactloc").click(function(e){
    $("html,body").animate({ scrollTop: $('.footer').height()}, "slow");
})
};