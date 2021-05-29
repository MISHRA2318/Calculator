function getHistory(){
   return document.getElementById('history-value').innerText;
}

function printHistory(num){
    document.getElementById('history-value').innerText=num;
}
 


function getOutput(){
    return document.getElementById('output-value').innerText;
}

function PrintOutput(num){
 
    if(num==""){
        document.getElementById('output-value').innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=geFormattedNumber(num);
    }
    }
      
    

function geFormattedNumber(num){
    if(num=='-'){
          return '';
    }
    var n=Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseformtedNumber(num){
    return Number(num.replace(/,/g,''));

}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
      if(this.id=='clear'){
          PrintOutput('')
          printHistory('')
      }

      else if(this.id=='backspace'){
          var output= reverseformtedNumber(getOutput()).toString();
          if(output) {  //if output has a value
            output=output.substr(0,output.length-1);
            PrintOutput(output);

          }         
      }
      else{
          var output= getOutput();
          var history=getHistory();
          if(output!=""){
              output=reverseformtedNumber(output)
              history=history+output;
              if(this.id=='='){
                  var result=eval(history);
                  PrintOutput(result);
                  printHistory('');
              }
              else{
                  history=history+this.id;
                  printHistory(history);
                  PrintOutput('');
              }
          }
      }
    })
}

var number = document.getElementsByClassName(" number");
for(var i=0;i< number.length;i++){
    number[i].addEventListener("click",function(){
        var output=reverseformtedNumber(getOutput());

        if(output!=NaN){  //if output is a number
            output=output+this.id;
            PrintOutput(output);
        }
    })
}
