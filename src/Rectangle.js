function Rectangle(props) {

    return (
       
        <div style = {
            {
                backgroundColor: props.color,
                opacity: props.opacity,
                width: "100px",
                height:"100px"
            }
        } >
         
        </div>
    )
}
export default Rectangle