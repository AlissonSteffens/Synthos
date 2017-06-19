document.writeln("<script type='text/javascript' src='synth.js'></script>")

class Synthos {
  constructor () {
    this.mySynth = new Synth()
    this.frequencies = []
    this.bpm = 200
    this.loops = 1
    this.track = []
    this.type = 'triangle'
    this.duration = 0.2
  }
  setBpm (bpm) {
    this.bpm = bpm
  }

  setDuration (duration) {
    this.duration = duration
  }

  setType (type) {
    this.type = type
  }
  addFrequency (frequency) {
    this.frequencies[this.frequencies.length] = frequency
  }

  play () {
    for (var index = 0; index < this.frequencies.length; index++) {
      this.track[index] = {
        type: this.type,
        frequency: this.frequencies[index],
        duration: this.duration,
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
