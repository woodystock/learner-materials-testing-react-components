function ReasonInput({value, onChange}) {
    return (
        <div className="form__input-container">
            <label htmlFor="reason" className="form__label">Reason for Sparing:</label>
            <div className="validated-input-container">
                <textarea 
                    id="reason" 
                    className="form__input form__input--text input__textarea" 
                    rows="4" 
                    value={value} 
                    onChange={onChange}
                />
                <p className="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default ReasonInput