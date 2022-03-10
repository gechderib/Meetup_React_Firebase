import "./Formwrap.css"

function FormWrap(props){
    return <div className="main">
        {props.children}
    </div>
}

export default FormWrap;