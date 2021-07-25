function compute()
{
    var P = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
	var y = document.getElementById("years").value;
	var SI = P * y * r /100;
	var year = new Date().getFullYear()+parseInt(y);
	document.getElementById("result").innerHTML="If you deposit "+P+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+SI+" as simple interest,\<br\>in the year "+year+"\<br\>"
	
}

function updateRate() 
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval+"%";
}

function val()
{
    var P = document.getElementById("principal").value;
    var isPos = parseInt(P) > 0;
    if (!isPos) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}