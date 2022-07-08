const Imagen = (props) => {
    console.log('props', props)
    return <img 
        src={require(`../media/${props.imagen}.png`)} 
        alt="Logo" 
        heigth={500}
        width={500}
    />;
}

export default Imagen;