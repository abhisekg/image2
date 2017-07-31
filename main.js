$(document).ready(function(){
  function getQuote(){
    
    var quotes = ["Most good programmers do programming because they expect to get paid, but because it is fun to program.","I choose lazy person to do a hard job because he will find easy way to do it.","You might not think that coders are not artist, but coding is an extremely creative profession.It is logic based creativity.","Make every deal perfect, and limit the number of details to perfect.","A good code is like a good joke,it needs no explaination.","Solving big problems is easier than solving little problems.","First, solve the problem. Then, write the code.","Software sucks because users demand it to.","Linux is only free if your time has no value.","Beware of bugs in the above code; I have only proved it correct, not tried it. ","There is not now, nor has there ever been, nor will there ever be, any programming language in which it is the least bit difficult to write bad code. "," Programs must be written for people to read, and only incidentally for machines to execute.","Without requirements or design, programming is the art of adding bugs to an empty text file.","Computers are good at following instructions, but not at reading your mind.","Any code of your own that you haven't looked at for six or more months might as well have been written by someone else."," If debugging is the process of removing software bugs, then programming must be the process of putting them in.","Java is to JavaScript what Car is to Carpet.","It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.","Walking on water and developing software from a specification are easy if both are frozen."];
    var randomNum= Math.floor((Math.random()*quotes.length));
    var randomQuote= quotes[randomNum];
    $(".quote").text(randomQuote);
  }
  $(".xoxo").on("click",function(){
       getQuote();
  });
  $(".yu").on("click",function(){
    window.open("https://twitter.com/intend/tweet");
  });
});