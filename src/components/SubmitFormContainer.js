function SubmitFormContainer ({onSubmitClick}) {

    return (
        <section>
            <button id="submit" type="submit" className="form__button" onClick={onSubmitClick}>Submit</button>
        </section>
    )
}

export default SubmitFormContainer