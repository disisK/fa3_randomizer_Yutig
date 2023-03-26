function rollOne(){
    var num1 = parseInt(Math.random()*20)+1;
    document.getElementById("valueOne").innerHTML = num1;

    var num2 = parseInt(Math.random()*20)+1;
    document.getElementById("valueTwo").innerHTML = num2;

    var num3 = parseInt(Math.random()*20)+1;
    document.getElementById("valueThree").innerHTML = num3;


    if (num1 >= num2 && num1>=num3){
        document.getElementById("lel").innerHTML = "<p>The largest number in the ticket number: " + num1;
    } 
    if(num2 >= num1 && num2>=num3){
        document.getElementById("lel").innerHTML = "<p>The largest number in the ticket number: " + num2;
    }
    if(num3 >= num1 && num3>=num2){
        document.getElementById("lel").innerHTML = "<p>The largest number in the ticket number: " + num3; 
    }

    document.getElementById("ticket").innerHTML = "Your ticket number is: " + num1 +"-"+ num2 + "-" + num3;

    var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("lol").innerHTML = "Your lucky letter for today is: " + letter[Math.floor(Math.random() * letter.length)];

    document.getElementById("wew").innerHTML = "Your line queue number: " + num2*num3;
}
const texts = document.querySelectorAll("");

texts.forEach((line, index) =>{
    line.style.animation = 'fade-up 0.5s ease forwards ${index*0.2}s';
});






    