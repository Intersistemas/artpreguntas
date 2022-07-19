const Imagen = (props) => {
    //console.log('props', props)
    let imagen = props.imagen === 'Resultado' ? require(`../media/Thank.gif`) : require(`../media/${props.imagen}.png`)
    return <img
        src={(imagen)} 
        alt="Logo" 
        heigth={400}
        width={400}
    />;
}

export default Imagen;