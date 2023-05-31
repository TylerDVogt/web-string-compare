function compare(){
    reset(0);
    var lines1 = document.getElementById("area1").value.split("\n");
    var lines2 = document.getElementById("area2").value.split("\n");
    for(var i=0; i < lines1.length || i < lines2.length; i++){
        if(i >= lines1.length){
            printLine(i,"[undefined]",lines2[i]);
        }else if(i >= lines2.length){
            printLine(i,lines1[i],"[undefined]");
        }else if(lines1[i].length != lines2[i].length){
            printLine(i,lines1[i],lines2[i]);
        }else{
            for(var j=0;j < lines1[i].length; j++){
                if(lines1[i].charAt(j) != lines2[i].charAt(j)){
                    printLine(i,lines1[i],lines2[i]);
                    break;
                }
            }    
        }
        
    }
}

function printLine(number, string1, string2){
    var text = "Line "+number+": "+string1+"\nLine "+number+": "+string2+"\n\n";
    document.getElementById("results").value += text;
}

function reset(flag){
    if(flag == 1){
        document.getElementById("area1").value = "";
        document.getElementById("area2").value = "";
    }
    document.getElementById("results").value= "";
}
