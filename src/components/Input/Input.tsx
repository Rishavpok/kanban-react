export default function Input({type , placeholder, formName , control, required}) {
    return (
        <>
        <input {...formName(control , { required : required ? "This field is required" : false } )  } type={type} placeholder={placeholder}  />
        </>
    )
}