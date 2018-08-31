![](./synthos_logo.svg)
# synthos 

simple js sound synthesizer

## Installation

```sh
npm install synthos --save
```

## Usage

```js
// On HTML you just have to insert Synthos js
<script src="synthos.js"></script>

// Synthos is an API to work with WebAudio API to generate sounds. Make a new synth like so:
var synthesizer = new Synthos()

// You can make sounds as a simple array. For example, let's make 3 simple beeps tuned to A, D, & F#:

synthesizer.addFrequency(440)
synthesizer.addFrequency(587.33)
synthesizer.addFrequency(739.99)

// You may also like to use Note class to make it easy

var note = new Note()

synthesizer.addFrequency(note.E)
synthesizer.addFrequency(note.C)
synthesizer.addFrequency(note.F)

// You can even set a frequencies array as tracker

var music = [note.E, note.E, note.E, note.F, note.C, note.E, note.F, note.C, note.E]
synthesizer.setFrequencies(music)

// Optionaly change tracker propertyes with

synthesizer.setType('square')
synthesizer.setDuration(0.3)
synthesizer.setBpm(150)

// Play the sound using

synthesizer.play()

```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies


None

## License

MIT
