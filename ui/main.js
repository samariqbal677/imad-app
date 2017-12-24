var button = document.getElementById('counter');

button.onclick = function () {

        
    };
    request.open('GET','http://samariqbal677.imad.hasura-app.io/counter',true);
    request.send(null);
    
};


var submit = document.getElementById('submit_btn');
submit.onclick =function(){
        var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
            var counter =request.responseText;
            var span =document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    var names=request.responseText;
    names=JSON.parse(names);
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var ul = document.getElementById('namelist');
    ul.innerHTML = list ;
    };