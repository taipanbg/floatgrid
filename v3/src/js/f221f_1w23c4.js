var close = document.getElementsByClassName("clouse");
var ii;
for (ii = 0; ii < close.length; ii++) {
    close[ii].onclick = function(){
        this.parentElement.style.display = "none";
        this.parentElement.style.visibility = "hidden";
    };
};
if(document.getElementById("uploadBtn")){
    document.getElementById("uploadBtn").onchange = function () {
        var i;
        var test=document.getElementById('uploadBtn').files;
        if(test.length!=false){
            var text="<br/><small><strong>Chosen files: </strong>";
            for(i=0;i<test.length;++i){
                var name = test.item(i).name;
                text = text+'<br/>'+name;
            }
        }else{
            var text="<br/><strong>Chosen files: </strong><br/>No file chosen";
        }
        document.getElementById('noChosen').innerHTML = text+'</small><br/>';
    };
};

