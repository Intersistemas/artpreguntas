const Imagen = (props) => {
    //console.log('props', props)
    let imagen = props.imagen === 'Resultado' ? require(`../media/Thank.gif`) : require(`../media/${props.imagen}.png`)
    return <img
        src={(imagen)} 
        alt="Logo" 
        heigth={500}
        width={500}
    />;
}

export default Imagen;