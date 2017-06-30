$(document).ready(function () {
  var mySynth = new Synthos()
  var note = new Note()

  var music = [note.E, note.E, note.E, note.C, note.E, note.G, note.C, note.G, note.E, note.A, note.B, note.As, note.A, note.G, note.E, note.G, note.A, note.F, note.G, note.E, note.C, note.D, note.D, note.C]
  var dr = [0.1,0.1,0.1,0.3,0.4,0.5,0.6,0.1,0.1,0.1,0.2,0.3,0.2,0.2,0.5,0.1,0.1,0.1,0.1,0.2,0.2,0.1,0.2,0.2]

  mySynth.setType('triangle')
  mySynth.setDurations(dr)
  mySynth.setBpm(200)
  mySynth.setFrequencies(music)
  mySynth.play()
})
