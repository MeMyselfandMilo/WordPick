function generator() {
  var Word = Picks[Math.floor(Math.random()*(Picks.length - 1))]
  Word = Word.replace(" ", "")
  document.getElementById("WordInput").innerHTML = Word
}
