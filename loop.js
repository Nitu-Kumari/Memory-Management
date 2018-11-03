function f(){
    console.log('nit');
    setTimeout(g,0);//callback g and timeout 0 milisecond
    console.log('nis');
    h();
}
function g(){//loop
    console.log('nis');
}
function h(){
    console.log('tick');

}
f();



