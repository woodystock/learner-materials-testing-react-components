import { useState } from 'react';
import NumberOfBeingsInput from './NumberOfBeingsInput';
import PlanetNameInput from './PlanetNameInput';
import ReasonInput from './ReasonInput';
import SimpleCalcInput from './SimpleCalcInput';
import SpeciesNameInput from './SpeciesNameInput';
import W12MHeader from './W12MHeader';

const W12MForm = () => {

	const [formData, setFormData] = useState({
		speciesName: "",
		planetName: "",
		numberOfBeings: "",
		SimpleCalc: false,
		reason: ""
	});

	return (
		<section className='w12MForm form__container'>
			<W12MHeader />
			
			<SpeciesNameInput />

			<PlanetNameInput />

			<NumberOfBeingsInput />

			<SimpleCalcInput />

			<ReasonInput />

			<button>Submit</button>

		</section>
	);
};

export default W12MForm;
