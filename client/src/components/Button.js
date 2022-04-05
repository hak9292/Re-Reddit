function Button (props) {
    let classNames = 'auth-buttons ';
    if (props.outline) {
        classNames += 'text-light bg-transparent';
    } else {
        classNames += ' ';
    }
    return (
        <button {...props} className={classNames}/>
    )
}

export default Button;