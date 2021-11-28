import { useState } from 'react';
import NumberOfBeingsInput from './NumberOfBeingsInput';
import PlanetNameInput from './PlanetNameInput';
import ReasonInput from './ReasonInput';
import SimpleCalcInput from './SimpleCalcInput';
import SpeciesNameInput from './SpeciesNameInput';
import W12MHeader from './W12MHeader';

const formIdKeyValueLookup = {
	species_name: "speciesName",
	planet_name: "planetName",
	beings_num: "numberOfBeings",
	simple_calc_select: "simpleCalc",
	reason: "reason"
}

const W12MForm = () => {

	const [formData, setFormData] = useState({
		speciesName: "",
		planetName: "",
		numberOfBeings: "",
		simpleCalc: "",
		reason: ""
	});

	const onInputTextChange = (event) => {
		console.log(event.target.value)
		const key = formIdKeyValueLookup[event.target.id];

		if (Object.keys(formData).includes(key)) {
			setFormData(prevFormData => {
				const updatedFormData = { ...prevFormData };

				updatedFormData[key] = event.target.value;

				return updatedFormData
			});
		}
	}

	const onSelectChange = (event) => {
		const key = formIdKeyValueLookup[event.target.id];

		if (Object.keys(formData).includes(key)) {
			setFormData(prevFormData => {
				const updatedFormData = { ...prevFormData };

				updatedFormData[key] = event.target.text;

				return updatedFormData
			});
		}
	}

	const onSubmitForm = (event) => {
		event.preventDefault();

		console.log();
	} 

	return (
		<section className='w12MForm form__container'>
			<W12MHeader />

			<SpeciesNameInput speciesName={formData.speciesName} onChange={onInputTextChange} />

			<PlanetNameInput planetName={formData.planetName} onChange={onInputTextChange} />

			<NumberOfBeingsInput numberOfBeings={formData.numberOfBeings} onChange={onInputTextChange} />

			<SimpleCalcInput simpleCalc={formData.simpleCalc} onChange={onInputTextChange} />

			<ReasonInput reason={formData.reason} onChange={onInputTextChange} />

			<button type="submit" class="form__button" onSubmit={onSubmitForm}>Submit</button>

		</section>
	);
};

export default W12MForm;
