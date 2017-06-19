# synthos 

simple js sound synthesizer

## Installation

```sh
npm install synthos --save
```


## How to

On HTML you have to insert both Synth and Synthos js

```html
<script src="synth.js"></script>
<script src="synthos.js"></script>
```

Synthos is an API to work with WebAudio API to generate sounds. Make a new synth like so:

```js
var synthesizer = new Synthos();
```

You can make sounds as a simple array. For example, let's make 3 simple beeps tuned to A, D, & F#:

```js
synthesizer.addFrequency(440)
synthesizer.addFrequency(587.33)
synthesizer.addFrequency(739.99)
```

You may also like to use Note class to make it easy

```js
var note = new Note()

synthesizer.addFrequency(note.E)
synthesizer.addFrequency(note.C)
synthesizer.addFrequency(note.F)
```

Play the sound using

```js
synthesizer.play()
```

## Dependencies

None

## Dev Dependencies


None

## License

MIT
