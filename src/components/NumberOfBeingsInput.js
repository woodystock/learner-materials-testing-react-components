function NumberOfBeingsInput() {
    return (
        <div class="form__input-container">
            <label for="beings_num" class="form__label">Number of Beings:</label>
            <div class="validated_input-container">
                <input id="beings_num" type="text" class="form__input form__input--text"/>
                <p class="form__text form__text--invalid">Invalid input</p>
            </div>
        </div>
    )
}

export default NumberOfBeingsInput;