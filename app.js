function getelement(num){
    var result=document.getElementById("result");
    result.value +=num;
}
function getresult(){
    var result=document.getElementById("result");
    result.value=eval(result.value);

}
function clear(){
    var result=document.getElementById("result");
    result.value="";


}