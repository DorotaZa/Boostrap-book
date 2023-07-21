// DELETE

function usunCard(idCard, idOpt) {
  alert('Are you sure you want to remove the book?')
  document.getElementById(idCard).style.display = "none"; document.getElementById(idOpt).style.display = "none" ;
 }



// SELECTOR

function choose1 () {
  document.getElementById('card1').style.color = 'rgb(221, 125, 0)'
}

function choose2 () {
  document.getElementById('card2').style.color = 'rgb(221, 125, 0)'
}

function choose3 () {
  document.getElementById('card3').style.color = 'rgb(221, 125, 0)'
  
}
function choose4 () {
  document.getElementById('card4').style.color = 'rgb(221, 125, 0)'
}

function choose5 () {
  document.getElementById('card5').style.color = 'rgb(221, 125, 0)'
}

function choose6 () {
  document.getElementById('card6').style.color = 'rgb(221, 125, 0)'
}


// function choose(idCard) {
//   document.getElementById(idCard).style.color = 'red'
// }


// COUNT


 function characterCount(textarea) {

  const max = 500
  const length = textarea.value.length
  if(length > max)
  {
    textarea.value = textarea.value.substring(0,500);
  }
  $('#charCountInput3').text(length)

 }

 function characterCount2(textarea) {

  const max = 50
  const length = textarea.value.length
  if(length > max)
  {
    textarea.value = textarea.value.substring(0,50);
  }

  $('#charCountInput2').text(max - length)
 }