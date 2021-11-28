function NumberOfBeingsInput({value, onChange}) {
    return (
        <div className="form__input-container">
            <label htmlFor="beings_num" className="form__label">Number of Beings:</label>
            <div className="validated-input-container">
                <input id="beings_num" type="text" className="form__input form__input--text" value={value} onChange={onChange}/>
                <p className="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default NumberOfBeingsInput;