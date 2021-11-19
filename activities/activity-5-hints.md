# Activity 5 - Hints

Let's imagine our Species Name field works like this:

`const SpeciesName = ({ speciesName, onChangeSpeciesName }) => ( <div> <label for='speciesName'>Species Name</label> <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} /> </div> );`

We need to add validation. So first, let's intercept the onChange event:

`const SpeciesName = ({ speciesName, onChangeSpeciesName }) => ( <div> <label for='speciesName'>Species Name</label> <input id='speciesName' type='text' value={speciesName} onChange={(e) => { onChangeSpeciesName(e); } } /> </div> );`

💡 This code does the **exact same thing** as the first snippet. It just passes the change event back to the handler function in our form. However, we can now add extra logic to our component in that function!

`const SpeciesName = ({ speciesName, onChangeSpeciesName }) => ( <div> <label for='speciesName'>Species Name</label> <input id='speciesName' type='text' value={speciesName} onChange={(e) => { // validation logic goes here onChangeSpeciesName(e); } } /> </div> );`

We need a validation function:

`const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {
const validate = (value) => {
// do stuff
return '';
}

    return(
    <div>
    	<label for='speciesName'>Species Name</label>
    	<input
    		id='speciesName'
    		type='text'
    		value={speciesName}
    		onChange={(e) => {
    			const errorMessage = validate(e.target.value);
    			onChangeSpeciesName(e);
    		}
    		}
    	/>
    </div>

);
}`

And to store the result in state:

`const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {

    const [ errorMessage, setErrorMessage ] = useState('');

    const validate = (value) => {
    	// do stuff
    	return '';
    }

    return(
    <div>
    	<label for='speciesName'>Species Name</label>
    	<input
    		id='speciesName'
    		type='text'
    		value={speciesName}
    		onChange={(e) => {
    			const errorMessage = validate(e.target.value);
    			setErrorMessage(errorMessage);
    			onChangeSpeciesName(e);
    		}
    		}
    	/>
    </div>

);
}`

We need to replace `// do stuff` with the actual validation.

The aliens want the species name to be:

_Must be between 3 and 23 characters. No numbers or special characters allowed!_

So we just have to check the value meets these conditions, and then return a suitable error message if not.

Finally, we need to add an `<ErrorMessage>` component to the project, which takes a prop of `errorMessage`. Then we add this to our field:

`const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {

    const [ errorMessage, setErrorMessage ] = useState('');

    const validate = (value) => {
    	// do stuff
    	return '';
    }

    return(
    <div>
    	<label for='speciesName'>Species Name</label>
    	<input
    		id='speciesName'
    		type='text'
    		value={speciesName}
    		onChange={(e) => {
    			const errorMessage = validate(e.target.value);
    			setErrorMessage(errorMessage);
    			onChangeSpeciesName(e);
    		}
    		}
    	/>
    	<ErrorMessage errorMessage={errorMessage}/>
    </div>

);
}`

Hopefully this should be enough to get you through all the fields - each one can use this pattern to validate according to its own rules.

Go back to [Activity 5](./activity-5.md) and get all the fields to display validation errors when required.
