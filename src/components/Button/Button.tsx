export default function Button({label}) {
    return (
        <>
            <button
                type="submit"
                className="submit-btn">
               {label}
            </button>
        </>
    )
}