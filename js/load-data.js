$(document).ready(function(){
    $("#sort-list-app #public-api-list .get_list_btn").click(function(){
      clean_current_list();
      $.get("https://dog.ceo/api/breeds/list")
       .done(
            function(response) {
              handle_response_public_api(response);
            }
       );
    });

    $("#sort-list-app #private-api-list .get_list_btn").click(function(){
      clean_current_list();
      $.get("/api/get_list.php")
       .done(
            function(response) {
              handle_response_private_api(response);
            }
       );
    });
});

function handle_response_public_api(response){
  var public_api_list = [];
  for (var i=0;i < response.message.length; i++){
    public_api_list.push(response.message[i]);
  }
  public_api_list= reorganize_array(public_api_list); // reorganize array as required. This case is alphabetically
  for (var i=0;i < public_api_list.length; i++){
    $( "#sort-list-app .filter-list" ).append( "<li><a>"+public_api_list[i]+"</a></li>" );
  }
}

function handle_response_private_api(response){
  var requestData = jQuery.parseJSON(response);
  var private_api_list= [];
  for(var i=0; i <requestData.length; i++){
    private_api_list.push(requestData[i].name);
  }
  private_api_list= reorganize_array(private_api_list);
  for (var i=0;i < private_api_list.length; i++){
    $( "#sort-list-app .filter-list" ).append( "<li><a>"+private_api_list[i]+"</a></li>" );
  }
}

function reorganize_array(test_list){
  //this filter algorithm is customizable
  return test_list.sort();
}

function clean_current_list(){
  $("#sort-list-app .filter-list").empty();
}
