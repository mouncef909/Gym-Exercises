document.getElementById('contact').style.display="none";
document.getElementById('content').style.display="none";
document.getElementById('back-workout').style.display="none";
document.getElementById('chest-workout').style.display="none";
document.getElementById('tri').style.display="none";
document.getElementById('bi').style.display="none";
document.getElementById('ok').style.display="none";
function show(){
    document.getElementById('content').style.display="inline";
    document.getElementById('srch').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('back-workout').style.display="none";
    document.getElementById('chest-workout').style.display="none";
    document.getElementById('tri').style.display="none";
    document.getElementById('bi').style.display="none";
    document.getElementById('ok').style.display="none";
    document.getElementById('pi').style.display="none";
}
function back(){
    document.getElementById('content').style.display="none";
    document.getElementById('srch').style.display="inline";
    document.getElementById('contact').style.display="none";
    document.getElementById('back-workout').style.display="none";
    document.getElementById('chest-workout').style.display="none";
    document.getElementById('tri').style.display="none";
    document.getElementById('bi').style.display="none";
}
function contact(){
    document.getElementById('content').style.display="none";
    document.getElementById('srch').style.display="inline";
    document.getElementById('contact').style.display="inline";
    document.getElementById('back-workout').style.display="none";
    document.getElementById('chest-workout').style.display="none";
    document.getElementById('tri').style.display="none";
    document.getElementById('bi').style.display="none";
    document.getElementById('ok').style.display="none";
    document.getElementById('pi').style.display="none";
}
function bw(){
    document.getElementById('content').style.display="none";
    document.getElementById('srch').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('back-workout').style.display="inline";
    document.getElementById('chest-workout').style.display="none";
    document.getElementById('tri').style.display="none";
    document.getElementById('bi').style.display="none";
    document.getElementById('ok').style.display="none";
    document.getElementById('pi').style.display="none";
}
function chest(){
    document.getElementById('content').style.display="none";
    document.getElementById('srch').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('back-workout').style.display="none";
    document.getElementById('chest-workout').style.display="inline";
    document.getElementById('tri').style.display="none";
    document.getElementById('bi').style.display="none";
    document.getElementById('ok').style.display="none";
    document.getElementById('pi').style.display="none";
}
function biceps(){
    document.getElementById('content').style.display="none";
    document.getElementById('srch').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('back-workout').style.display="none";
    document.getElementById('chest-workout').style.display="none";
    document.getElementById('tri').style.display="none";
    document.getElementById('bi').style.display="inline";
    document.getElementById('ok').style.display="none";
    document.getElementById('pi').style.display="none";
}
function triceps(){
    document.getElementById('content').style.display="none";
    document.getElementById('srch').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('back-workout').style.display="none";
    document.getElementById('chest-workout').style.display="none";
    document.getElementById('tri').style.display="inline";
    document.getElementById('bi').style.display="none";
    document.getElementById('ok').style.display="none";
    document.getElementById('pi').style.display="none";
}
function test(){
    var x = document.getElementById("srch").value;
    if (x==="back"){
        document.getElementById('content').style.display="none";
        document.getElementById('contact').style.display="none";
        document.getElementById('back-workout').style.display="inline";
        document.getElementById('chest-workout').style.display="none";
        document.getElementById('tri').style.display="none";
        document.getElementById('bi').style.display="none";
        document.getElementById('ok').style.display="none";
        document.getElementById('pi').style.display="none";
    }
    if (x==="chest"){
        document.getElementById('content').style.display="none";
        document.getElementById('contact').style.display="none";
        document.getElementById('back-workout').style.display="none";
        document.getElementById('chest-workout').style.display="inline";
        document.getElementById('tri').style.display="none";
        document.getElementById('bi').style.display="none";
        document.getElementById('ok').style.display="none";
        document.getElementById('pi').style.display="none";
    }
    if (x==="biceps"){
        document.getElementById('content').style.display="none";
        document.getElementById('contact').style.display="none";
        document.getElementById('back-workout').style.display="none";
        document.getElementById('chest-workout').style.display="none";
        document.getElementById('tri').style.display="none";
        document.getElementById('bi').style.display="inline";
        document.getElementById('ok').style.display="none";
        document.getElementById('pi').style.display="none";
    }
    if (x==="triceps"){
        document.getElementById('content').style.display="none";
        document.getElementById('contact').style.display="none";
        document.getElementById('back-workout').style.display="none";
        document.getElementById('chest-workout').style.display="none";
        document.getElementById('tri').style.display="inline";
        document.getElementById('bi').style.display="none";
        document.getElementById('ok').style.display="none";
        document.getElementById('pi').style.display="none";
    }
}
