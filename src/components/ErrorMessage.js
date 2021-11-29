const ErrorMessage = ({errorMessage}) => {

    return (
        <div>
            <p id="error-message"className="form__text form__text--invalid" hidden={!errorMessage}>{errorMessage}</p>
        </div>
    )
}

export default ErrorMessage