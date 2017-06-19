$(document).ready(function () {
  var music = [440, 440, 440, 349, 523, 440, 349, 523, 440]
  var mySynth = new Synthos()
  mySynth.setType('square')
  mySynth.setDuration(0.3)
  mySynth.setBpm(150)
  for (var index = 0; index < music.length; index++) {
    mySynth.addFrequency(music[index])
  }
  mySynth.play()
})
