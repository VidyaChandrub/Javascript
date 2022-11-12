
    function ac(){
        document.getElementById('answer').value = "";
    }

    function show(input){
        document.getElementById('answer').value += input;
    }

    function cal(){
        let result = eval(document.getElementById('answer').value );
        document.getElementById('answer').value = result;
    }
    