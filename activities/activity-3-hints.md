# Activity 3 - Hints

Let's work through creating one of the fields directly.

Perhaps our Species Name field could look like this?

`const SpeciesName = () => ( <div> <label for='speciesName'>Species Name</label> <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} /> </div> );`

Where do our `speciesName` and `onChangeSpeciesName` come from?

Well, we'd like our form to manage all of our state for us, so the form knows about everything we've entered.

So, in W12MForm.js we can add some code to hold the state for this component:

`const [speciesName, setSpeciesName] = useState('humans');`

Then, also in W12MForm.js, we can pass the state value and a function to handle changing it into our `<SpeciesName/>` component:

`<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />`

💡 The `onChange` event for an input gives us an event parameter, often called `e`, which contains the new value held by the input, which is stored in `e.target`. We can pass this to our setter function from `useState` and our input will now be controlled from state held by the form - hooray! 🥳

Go back to [Activity 3](./activity-3.md) and get all the fields on the page and controlled by state.
