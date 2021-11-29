import { useState } from 'react';
import { validateNumberOfBeings, validatePlanetName, validateReason, validateSimpleCalc, validateSpeciesName } from './W12MFormValidation'
import SubmitFormContainer from './SubmitFormContainer';
import W12MFormInput from './W12MFormInput';
import W12FormInputType from './W12MFormInputType';
import W12MHeader from './W12MHeader';


const formIdKeyValueLookup = {
	species_name: "speciesName",
	planet_name: "planetName",
	beings_num: "numberOfBeings",
	simple_calc: "simpleCalc",
	reason: "reason"
}

const W12MForm = ({onFormSubmit}) => {

	const [formData, setFormData] = useState({
		speciesName: "",
		planetName: "",
		numberOfBeings: "",
		simpleCalc: "",
		reason: ""
	});

	const onValueChange = (event) => {
		const key = formIdKeyValueLookup[event.target.id];

		if (Object.keys(formData).includes(key)) {
			setFormData(prevFormData => {
				const updatedFormData = { ...prevFormData };

				updatedFormData[key] = event.target.value;

				return updatedFormData
			});
		}
	}

	const onSubmitClick = (event) => {
		console.log(formData);
	}

	const onFormSubmitHandler = (event) => {
		event.preventDefault();

		//check if everything is valid?

		onFormSubmit(formData);
	}

	return (
		<section className='w12MForm form__container'>
			<W12MHeader />

			<form onSubmit={onFormSubmitHandler}>

				<W12MFormInput 
					id="species_name"
					label="Species Name:"
					type={W12FormInputType.TEXT}
					value={formData.speciesName}
					onChange={onValueChange}
					validate={validateSpeciesName}
				/>

				<W12MFormInput
					id="planet_name"
					label="Planet Name:"
					type={W12FormInputType.TEXT}
					value={formData.planetName}
					onChange={onValueChange}
					validate={validatePlanetName}
				/>

				<W12MFormInput
					id="beings_num"
					label="Number of Beings:"
					type={W12FormInputType.TEXT}
					value={formData.numberOfBeings}
					onChange={onValueChange}
					validate={validateNumberOfBeings}
				/>

				<W12MFormInput
					id="simple_calc"
					label="What is 2 + 2?"
					type={W12FormInputType.SELECT}
					typeOptions="4,Not 4"
					value={formData.simpleCalc}
					onChange={onValueChange}
					validate={validateSimpleCalc}
				/>

				<W12MFormInput
					id="reason"
					label="Reason for sparing:"
					type={W12FormInputType.TEXTAREA}
					typeOptions="5"
					value={formData.reason}
					onChange={onValueChange}
					validate={validateReason}
				/>

				<SubmitFormContainer onSubmitClick={onSubmitClick} />

			</form>

		</section>
	);
};

export default W12MForm;
