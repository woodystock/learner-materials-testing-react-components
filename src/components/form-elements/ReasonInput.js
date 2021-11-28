function ReasonInput({reason, onChange}) {
    return (
        <div class="form__input-container">
            <label for="reason" class="form__label">Reason for Sparing:</label>
            <div class="validated-input-container">
                <textarea 
                    id="reason" 
                    class="form__input form__input--text input__textarea" 
                    rows="4" 
                    value={reason} 
                    onChange={onChange}
                />
                <p class="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default ReasonInput