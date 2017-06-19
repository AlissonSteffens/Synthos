document.writeln("<script type='text/javascript' src='synth.js'></script>")

class Synthos {
  constructor () {
    this.mySynth = new Synth()
    this.frequencies = []
    this.bpm = 200
    this.loops = 1
    this.track = []
  }

  addFrequency (frequency) {
    this.frequencies[this.frequencies.length] = frequency
  }

  play () {
    for (var index = 0; index < this.frequencies.length; index++) {
      var val = this.frequencies[index]
      this.track[index] = {
        type: 'triangle',
        frequency: val,
        duration: 0.2,
        filter: {
          frequency: 1000,
          type: 'highpass',
          gain: 25
        }
      }
    }
    this.mySynth.sequence(this.track, this.bpm, this.loops)
  }
}
