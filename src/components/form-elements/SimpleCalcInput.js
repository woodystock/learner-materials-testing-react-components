function SimpleCalcInput({value, onChange}) {
    return (
        <div className="form__input-container">
            <label htmlFor="simple_calc_select" className="form__label">What is 2 + 2?</label>
            <div className="validated-input-container">
                <select id="simple_calc_select" className="form__input form__input--text input__dropdown" value={value} onChange={onChange}>
                    <option value="" hidden disabled></option>
                    <option value="4">4</option>
                    <option value="Not 4">Not 4</option>
                </select>
                <p className="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default SimpleCalcInput