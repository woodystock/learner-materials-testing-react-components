import './App.css';
import W12MForm from './components/W12MForm';

function App() {

	const onFormSubmit = (formData) => {
		console.log(formData);
	}

	return (
		<>
			<h1 className="form__heading uppercase">W-12-M :- Application to spare planet from destruction</h1>
			<W12MForm onFormSubmit={onFormSubmit}/>
		</>
	);
}

export default App;
