// Add your javascript here
$(function(){
  $("h1").animate({
    "margin-left": "100px"
  }, "slow");
  

$('#taskBtn').click(function() {
  
    var newTask = $('#taskInputText').val();
    
    

    if(newTask !== '') {
      
        var count = $("#taskListSection").children().length;
        
        $('#taskListSection').append('<li class="list-group-item deletetask bg-success">' + newTask + '</li>');
       
        $('#taskInputText').val('');
        
        deleteTasks();
        
        setTimeout(function(){
          $('#taskListSection li.bg-success').removeClass('bg-success');
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



