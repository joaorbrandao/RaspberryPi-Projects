function postTest(option){
    var http = new XMLHttpRequest();
    var url = "127.0.0.1:2222";
    var params = {
        op:option
    };
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}
