function SpeciesNameInput({value, onChange}) {

    return (
        <div className="form__input-container">
            <label htmlFor="species_name" className="form__label">Species Name:</label>
            <div className="validated-input-container">
                <input id="species_name" type="text" className="form__input form__input--text" value={value} onChange={onChange}/>
                <p className="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default SpeciesNameInput