class Note {
  constructor () {
    this.C = 1054.94
    this.Cs = 995.73
    this.D = 939.85
    this.Ds = 887.10
    this.E = 837.31
    this.F = 790.31
    this.Fs = 745.96
    this.G = 704.09
    this.Gs = 664.57
    this.A = 627.27
    this.As = 592.07
    this.B = 558.84
    this.E5 = 659.255
    this.Ds5 = 622.254
    this.C5 = 523.251
    this.B4 = 493.883
  }
}

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

  setFrequencies (frequencies) {
    this.frequencies = frequencies
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
