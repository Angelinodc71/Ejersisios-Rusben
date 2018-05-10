function getWinner() {
  var box1 = document.getElementById('box1'),
      box2 = document.getElementById('box2'),
      box3 = document.getElementById('box3'),
      box4 = document.getElementById('box4'),
      box5 = document.getElementById('box5'),
      box6 = document.getElementById('box6'),
      box7 = document.getElementById('box7'),
      box8 = document.getElementById('box8'),
      box9 = document.getElementById('box9');
// De lado a lado
  if(box1.innerHTML !== "" && box1.innetHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
      console.log("win");

      else if (box4.innerHTML !== "" && box4.innetHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
      console.log("win");

      else if (box7.innerHTML !== "" && box7.innetHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
      console.log("win");
// De arriba a bajo
      else if (box7.innerHTML !== "" && box7.innetHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
      console.log("win");

      else if (box7.innerHTML !== "" && box7.innetHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
      console.log("win");

      else if (box7.innerHTML !== "" && box7.innetHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
      console.log("win");
// En Diagonal
      else if (box7.innerHTML !== "" && box7.innetHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
      console.log("win");

      else if (box7.innerHTML !== "" && box7.innetHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
      console.log("win");

      }
