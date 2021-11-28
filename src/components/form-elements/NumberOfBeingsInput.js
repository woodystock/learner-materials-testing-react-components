function NumberOfBeingsInput({numberOfBeings, onChange}) {
    return (
        <div class="form__input-container">
            <label for="beings_num" class="form__label">Number of Beings:</label>
            <div class="validated-input-container">
                <input id="beings_num" type="text" class="form__input form__input--text" value={numberOfBeings} onChange={onChange}/>
                <p class="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default NumberOfBeingsInput;