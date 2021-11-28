function SpeciesNameInput({speciesName, onChange}) {

    return (
        <div class="form__input-container">
            <label for="species_name" class="form__label">Species Name:</label>
            <div class="validated-input-container">
                <input id="species_name" type="text" class="form__input form__input--text" value={speciesName} onChange={onChange}/>
                <p class="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default SpeciesNameInput