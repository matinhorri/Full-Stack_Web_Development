// TODO: Based on the rules here, return an object with a properties `className` and `message`
//
// - A password with length less than 6 has `message` 'Short' and `className` 'short'
//
// Otherwise, we assign the password a score representing its strength. The
// score starts at 0 and will be incremented by one for each of the following
// conditions the password satisfies:
//
// - The password has length longer than 7
// - The password has at least one capital and lowercase letter
// - The password has at least one letter and at least one number
// - The password contains at two or more symbols
//
// We define symbols to be the following characters:
//    '!', '%', '&', '@', '#', '$', '^', '*', '?', '_', '~'
//
// Based on the value from the rules above, return the object with the correct
// values from the corresponding table:
//
// | Score | Class Name | Message         |
// |-------+------------+-----------------|
// | s < 2 | weak       | Weak Password   |
// | s = 2 | good       | Good Password   |
// | s > 2 | strong     | Strong Password |
function checkStrength(password) {
   if (password.length<6){
      return {
        message: 'too short',
        className: 'short'
      };
    }
    else{
      let score=0;
      let counter=0;
      let character='';
      let number=0;
      let uppercase=0;
      let lowercase=0;
      let letter=0;
      let i = 0;
      var symbol_counter=0;
      while (counter<=password.length){
          character = password.charAt(i);
          if ((character == '1') || (character == '2') || (character == '3') || (character == '4') || (character == '5') || (character == '6')
          || (character == '7') || (character == '8') || (character == '9') || (character == '0')){
              number= number+1;
          }
          else{
              if ((character == 'A') || (character == 'B') || (character == 'C') || (character == 'D') || (character == 'E') || (character == 'F')
              || (character == 'G') || (character == 'H') || (character == 'I') || (character == 'J') || (character =='K') || (character == 'L') || (character == 'M') || (character == 'N') || (character == 'O') || (character == 'P') || (character == 'Q')
              || (character == 'R') || (character == 'S') || (character == 'T') || (character == 'U') || (character =='V') || (character == 'W') || (character == 'X') || (character == 'Y') || (character =='Z')){
                  uppercase = uppercase + 1;
                  letter = letter +1;
              }
              if ((character == 'a') || (character == 'b') || (character == 'c') || (character == 'd') || (character == 'e') || (character == 'f')
              || (character == 'g') || (character == 'h') || (character == 'i') || (character == 'j') || (character =='k') || (character == 'l') || (character == 'm') || (character == 'n') || (character == 'o') || (character == 'p') || (character == 'q')
              || (character == 'r') || (character == 's') || (character == 't') || (character == 'u') || (character =='v') || (character == 'w') || (character == 'x') || (character == 'y') || (character =='z')){
                  lowercase = lowercase + 1;
                  letter = letter +1;
              }
              if ((character == '!') || (character == '%') || (character == '&') || (character == '@') || (character == '#') || (character == '$')
                  || (character == '^') || (character == '*') || (character == '?') || (character == '_') || (character =='~')){
                    symbol_counter = symbol_counter + 1; 
                  }
          }
          counter = counter +1;
          i = i+1;
      }
      
      if (password.length>7){
        score= score+1;
      }
      if (lowercase>0 && uppercase>0){
        score= score+1;
      }
      if (letter>0 && number>0){
        score= score+1;
      }
      if (symbol_counter >1){
        score = score+1;
      }
      if (score <2){
        return{
          message: 'Weak Password',
          className: 'weak'
        };
      }
      if(score === 2){
        return{
          message: 'Good Password',
          className: 'good'
        };
      }
      if(score > 2){
        return{
          message: 'Strong Password', 
          className: 'strong'
        };
      }
    }
    
    return {
      message: 'Not done',
      className: 'none'
    };
   }
  
  // You do not need to change this function. You may want to read it -- as you will find parts of it helpful with
  // the countdown widget.
  function showResult(password) {
  
    const { message, className } = checkStrength(password);
  
    if(!message || !className) {
      console.error("Found undefined message or className");
      console.log("message is", message);
      console.log("className is", className);
    }
  
    // This gets a javascript object that represents the <span id="pwdresult"></span> element
    // Using this javascript object we can manipulate the HTML span by
    // changing it's class and text content
    const resultElement = document.getElementById("pwdresult");
  
    // This sets the class to one specific element (since you can have multiple classes it's a list)
    resultElement.classList = [className];
    // This sets the text inside the span
    resultElement.innerText = message;
  }
  
  // Add a listener for the strength checking widget
  function addPasswordListener() {
    let passwordEntry = document.getElementById('password');
    passwordEntry.addEventListener("keyup", () => {
      const password = passwordEntry.value;
      showResult(password);
    });
  }
  
  addPasswordListener();

