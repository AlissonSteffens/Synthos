# synthos 

simple js sound synthesizer

## Installation

```sh
npm install synthos --save
```


## How to

Synthos is an API to work with WebAudio API to generate sounds. Make a new synth like so:

```js
var mySynth = new Synthos();
```

You can make sounds as a simple array. For example, let's make 3 simple beeps tuned to A, D, & F#:

```js
mySynth.addFrequency(440)
mySynth.addFrequency(587.33)
mySynth.addFrequency(739.99)
```
Play the sound using

```js
mySynth.play()
```

## References

This is made with [Synth.js](https://github.com/garvank/synth-js)

## License

MIT
