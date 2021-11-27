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
	simple_calc: "simpleCalc",
	reason: "reason"
}

const W12MForm = () => {

	const [formData, setFormData] = useState({
		speciesName: "",
		planetName: "",
		numberOfBeings: "",
		SimpleCalc: false,
		reason: ""
	});

	const onValueChange = (event) => {
		const key = formIdKeyValueLookup[event.target.id];
		if(Object.keys(formData).includes(key)) {
			setFormData( prevFormData => {
				const updatedFormData = {...prevFormData};
				updatedFormData[key] = event.target.value;
				return updatedFormData
			});
		}
	}

	return (
		<section className='w12MForm form__container'>
			<W12MHeader/>
			
			<SpeciesNameInput speciesName={formData.speciesName} onChange={onValueChange}/>

			<PlanetNameInput />

			<NumberOfBeingsInput />

			<SimpleCalcInput />

			<ReasonInput />

			<button type="submit" class="form__button">Submit</button>

		</section>
	);
};

export default W12MForm;
