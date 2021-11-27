function ReasonInput() {
    return (
        <div class="form__input-container">
            <label for="species_name" class="form__label">Reason for Sparing:</label>
            <div class="validated_input-container">
                <textarea id="species_name" type="" class="form__input form__input--text input__textarea" rows="4"/>
                <p class="form__text form__text--invalid">Invalid input</p>
            </div>
        </div>
    )
}

export default ReasonInput