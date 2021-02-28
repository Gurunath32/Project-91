function submit() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    question="<h4>"+number1+"X"+number2+"</h4>";
    input="<input style='width:150px;' id='answer' class='form-control' placeholder='Enter The Answer'>";
    button="<button class='btn btn-success' id='check_button' onclick='check()'>Check</buton>";
    row=question + input + button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}