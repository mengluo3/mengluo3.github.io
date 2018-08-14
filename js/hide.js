
$("div#extraControls").show();

function myFunction() {
    var x = document.getElementById("childmeng");
    x.style.visibility = "hidden";

    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.visibility = "visible";
    } else {
    	x.style.display = "none";
    	x.style.visibility = "hidden";
    }
}
