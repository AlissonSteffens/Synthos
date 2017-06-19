$(document).ready(function () {
  var mySynth = new Synthos()
  var note = new Note()

  var music = [note.E, note.E, note.E, note.F, note.C, note.E, note.F, note.C, note.E]

  mySynth.setType('square')
  mySynth.setDuration(0.3)
  mySynth.setBpm(150)
  for (var index = 0; index < music.length; index++) {
    mySynth.addFrequency(music[index])
  }
  mySynth.play()
})
