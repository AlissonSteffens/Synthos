$(document).ready(function () {
  var mySynth = new Synthos()
  var note = new Note()

  var music = [note.E5, note.Ds5, note.E5, note.C5, note.E5, note.Ds5, note.E5, note.C5, note.B4]

  mySynth.setType('triangle')
  mySynth.setDuration(0.2)
  mySynth.setBpm(200)
  mySynth.setFrequencies(music)
  mySynth.play()
})
