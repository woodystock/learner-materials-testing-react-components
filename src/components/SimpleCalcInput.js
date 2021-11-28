function SimpleCalcInput({simpleCalc, onChange}) {
    return (
        <div class="form__input-container">
            <label for="simple_calc_select" class="form__label">What is 2 + 2?</label>
            <div class="validated-input-container">
                <select id="simple_calc_select" class="form__input form__input--text input__dropdown" value={simpleCalc} onChange={onChange}>
                    <option value="" hidden disabled></option>
                    <option value="4">4</option>
                    <option value="Not 4">Not 4</option>
                </select>
                <p class="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default SimpleCalcInput