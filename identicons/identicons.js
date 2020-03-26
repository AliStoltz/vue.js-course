// input string and identicon output
  // takes an input string and turns it into an icon
  // if you put in the same input twice youll get the same "identicon"

// this was done in a code pen before i moved it over to vscode and therefor does not work outside of codepen....yet
// need to impirt jdenticon.min.js

// need some starting test and form input when our user comes to the application 
// need something to happen when the uer types in the input

// in the HTML (Vue Template)
  // describes the structure and content of our app
  // to show info to users
  // you could also create the Vue Template in JavaScript rather than in JS

// in JavaScript (Vue Instance)
  // describes what happens when a user interacts with our app
  // where we will handle user input. 


// step one: we need to detect when the user types into the input with every key stroke (not once they've finished the word completely)
  // A) add a 'method' to our Vue Instance 
  // B) the method callback gets called with an 'event' objet that has the text

// step two: use the text to generate a new identicon
// step three: show the identicon next to 'Output'

new Vue({
  // el is short for element - ties one Vue intance to the Vue template
  el: '#app',
  methods: {
    onInput: function(event) {
      // console.log('someone typed something')
      console.log(event.target.value)
    }
  }
});

