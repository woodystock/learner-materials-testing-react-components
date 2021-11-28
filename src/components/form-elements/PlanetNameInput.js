function PlanetNameInput({value, onChange}) {
    return (
        <div className="form__input-container">
            <label htmlFor="planet_name" className="form__label">Planet Name:</label>
            <div className="validated-input-container">
                <input id="planet_name" type="text" className="form__input form__input--text" value={value} onChange={onChange}/>
                <p className="form__text form__text--invalid" hidden>Invalid input</p>
            </div>
        </div>
    )
}

export default PlanetNameInput