// Add your javascript here
$(function(){
  $("h1").animate({
    "margin-left": "100px"
  }, "slow");
  

$('#taskBtn2').click(function() {
  
    var newTask = $('#taskInputText2').val();

    if(newTask !== '') {
      
        var count = $("#taskListSection2").children().length;
        
        $('#taskListSection2').append('<li class="list-group-item deletetask bg-success">'+ newTask + '</li>');
       
        $('#taskInputText2').val('');
        
        deleteTasks();
        
        setTimeout(function(){
          $('#taskListSection2 li.bg-success').removeClass('bg-success');
        },1000); 
      
    } else {
        alert('can not add space');   
    }
});  
});

function deleteTasks(){
 $('.deletetask').dblclick(function(){
    $(this).remove();
}); 

}



