$('#image').on("click",function(e){
    $('.span').toggle('slow');
    $('.imagE').toggle("click");
   });


$('#image1').on("click",function(e){
    $('.span1').toggle('slow');
    $('.images1').toggle("click");
});


$('#image2').on("click",function(e){
    $('.span2').toggle('slow');
    $('.images2').toggle("click");
});

   
  $(function () {
    $("form#form").on('submit',function(event){
       event.preventDefault();
       let name = $("input#name").val();
      
       if ($("input#name").val()){
           alert ("Hey " + name + ", Thanks for reaching out to us,Will get back to you");
       }
       else {
           alert("Please provide your correct name and email!");
       }

   });



});