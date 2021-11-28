import { useState } from 'react';
import NumberOfBeingsInput from './form-elements/NumberOfBeingsInput';
import PlanetNameInput from './form-elements/PlanetNameInput';
import ReasonInput from './form-elements/ReasonInput';
import SimpleCalcInput from './form-elements/SimpleCalcInput'
import SpeciesNameInput from './form-elements/SpeciesNameInput';
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

	return (
		<section className='w12MForm form__container'>
			<W12MHeader />

			<SpeciesNameInput speciesName={formData.speciesName} onChange={onValueChange} />

			<PlanetNameInput planetName={formData.planetName} onChange={onValueChange} />

			<NumberOfBeingsInput numberOfBeings={formData.numberOfBeings} onChange={onValueChange} />

			<SimpleCalcInput simpleCalc={formData.simpleCalc} onChange={onValueChange} />

			<ReasonInput reason={formData.reason} onChange={onValueChange} />

			<button type="submit" class="form__button" onClick={onSubmitClick}>Submit</button>

		</section>
	);
};

export default W12MForm;
