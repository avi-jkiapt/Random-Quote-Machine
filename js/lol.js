//alert("hello");
$(document).ready(function(){
   getQuote();
     //var randomQuote;
 // var author;
  function getQuote(){
    //var url="https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
     var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url,function(data){
      $(".quote").html(data.quoteText);
      $(".author").html(' -'+data.quoteAuthor);


$("#tweet").on("click",function(){
   window.open('https://twitter.com/intent/tweet?text=' + data.quoteText+'-'+data.quoteAuthor);
  } );
  $("#newQuote").on("click",function(){
       getQuote();

  });
    });
  };
});
