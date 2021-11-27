function PlanetNameInput() {
    return (
        <div class="form__input-container">
            <label for="planet_name" class="form__label">Planet Name:</label>
            <div class="validated_input-container">
                <input id="planet_name" type="text" class="form__input form__input--text"/>
                <p class="form__text form__text--invalid">Invalid input</p>
            </div>
        </div>
    )
}

export default PlanetNameInput