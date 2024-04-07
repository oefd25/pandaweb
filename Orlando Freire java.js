var edad = parseInt(prompt("Dime tu edad"));
if (edad > 18) {document.write("Eres mayor de edad")}
else {document.write("Eres menor de edad")};



var número= prompt("Intenta adivinar un número entre el 1 y el 10");
var número1 = (". Tu número era " + número);
document.write(número1);
var aleatorio = Math.round(Math.random()*10);
var resultado = (". El número correcto era " + aleatorio);
document.write(resultado);


function preguntarIrALink() {
   
    var confirmacion = confirm("¿Quieres ir a esta dirección web?");

    
    if (confirmacion) {
        window.location.href = "https://www.google.com/"; 
    } else {
        
        console.log("El usuario canceló la navegación.");
    }
}


preguntarIrALink();

var a = parseInt(prompt("Vamos a hacer una suma, dime un número"));

var b = parseInt(promt("Dime otro número"));

var suma = a + b ;
var resultado = ("La suma de los dos número es " + suma);
document.write(resultado);

  const quizForm = document.getElementById('quizForm');
  const resultsDiv = document.getElementById('results');

  quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
      q1: 'parís',
      q2: 'miguel de cervantes',
      q3: 'azul',
      q4: '7',
      q5: '11'
    };

    let correctCount = 0;

    for (let i = 1; i <= Object.keys(answers).length; i++) {
      const answer = quizForm['q' + i].value.trim().toLowerCase();
      if (answer === answers['q' + i]) {
        correctCount++;
       
        quizForm['q' + i].classList.add('correct');
      } else {
      
        quizForm['q' + i].classList.add('incorrect');
      }
    }

    resultsDiv.innerHTML = `Respuestas correctas: ${correctCount}/5`;

   
    setTimeout(() => {
      for (let i = 1; i <= Object.keys(answers).length; i++) {
        quizForm['q' + i].classList.remove('correct', 'incorrect');
      }
      resultsDiv.innerHTML = ''; 
    }, 2000);
  });

