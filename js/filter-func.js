function filter_list() {
    var input, input_val, filter_list, list, element, i;

    input = document.getElementsByClassName("filter");
    input_val = input[0].value.toUpperCase(); //value of input in uppercase.
    filter_list = document.getElementsByClassName("filter-list");
    list = filter_list[0].getElementsByTagName("li");//get every items in list

    for (i = 0; i < list.length; i++) {
        element = list[i].getElementsByTagName("a")[0];
        if(match_filter(element,input_val)){
          list[i].style.display = "";
        } else {
          list[i].style.display = "none";
        }
    }
}

function match_filter(test_element, test_input_var){
  //this filter algorithm is customizable
  return (test_element.innerHTML.toUpperCase().indexOf(test_input_var) > -1);
}
