import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const TerminosCondiciones = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/inicio")
    }
    return (
        <div>
            <Typography variant='h3'>TÉRMINOS Y CONDICIONES </Typography>
            <Box mt={3}>
                <Typography variant='h5'>I. DERECHO A LA PROTECCIÓN DE DATOS PERSONALES</Typography>
                <Typography textAlign={"left"}>
                    Al participar de las actividades brindadas por ART MUTUAL RURAL ASEGURADORA DE RIESGOS DEL TRABAJO, en adelante ART MUTUAL RURAL, CUIT: 30-71621143-2 en el stand ubicado en Pabellón verde, nro MP8 de LA RURAL SA, el participante deberá completar sus datos personales, prestando el titular su consentimiento conforme a lo establecido en la Ley Nº 25.326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar que sus datos personales integren la base de datos de ART MUTUAL RURAL, otorgando por la presente, autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle. El titular conoce y consiente que al tildar el casillero titulado “Acepto los términos y condiciones”, sus datos personales podrá/n ser utilizados para fines publicitarios. El participante podrá revocar el consentimiento otorgado en cualquier momento comunicándose con ART MUTUAL RURAL a través del siguiente email: atencion.clientes@artmutualrural.org.ar  El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita y en  intervalos no inferiores a seis meses, salvo que se acredite tener un interés legítimo al efecto, conforme lo establecido en el artículo 14, inciso 3° de la Ley Nº 25.326. El titular de los datos, tiene además la posibilidad de ejercer los derechos de rectificación y supresión de los datos conforme artículo 6, inciso “e” de la Ley mencionada. El titular podrá en cualquier momento solicitar el retiro o bloqueo de su nombre de los bancos de datos a los que se refiere el presente artículo conforme Decreto 1558/01. La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, Órgano de Control de la Ley en cuestión, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales. 
                </Typography>
            </Box>
            
            <Box mt={3}>
                <Typography variant='h5'>II. DERECHO A LA PROTECCIÓN DE LA IMAGEN</Typography>        
                <Typography textAlign={"left"}>
                    El titular del derecho a su imagen conoce y consiente que al tildar el casillero titulado “Acepto los términos y condiciones”, presta consentimiento expreso a la ART MUTUAL RURAL para que utilice total o parcialmente su imagen, su voz y/o reacciones, que la misma sea divulgada y/o incorporada con fines publicitarios e incluso con ánimo de lucro y/o con fines comerciales, sin que ello otorgue derecho a reclamo económico alguno por parte del titular, en medios de comunicación audiovisuales, radiales, gráficos, internet, vía pública y/o cualquier otro soporte conforme el plan de medios; siendo posible dicha utilización en el marco de otras campañas publicitarias y/o de conocimiento que se generen en lo sucesivo. Dicho consentimiento se extiende a  que, durante la emisión de la publicidad institucional, se incluya y/o edite la imagen, y ejecute todo otro acto encaminado a la divulgación del contenido, sin restricciones ni límites temporales, para su reproducción y/o difusión. Cede el  titular de manera gratuita, a la ART MUTUAL RURAL, como así también al grupo empresario al que integra, renunciando a regalías y/o retribución económica de cualquier tipo. 
                </Typography> 
            </Box>
            <Box mt={3}>
                <Typography variant='h5'>III. DERECHO A LA PROTECCIÓN DE LOS DATOS PERSONALES Y DE LA IMAGEN DE MENORES DE EDAD</Typography>           
                <Typography textAlign={"left"}>
                    De conformidad con las leyes de la República Argentina, los menores de edad podrán participar de las actividades, juegos y/o sorteos ofrecidos en el stand de la ART MUTUAL RURAL. Para ello, MADRE/PADRE, REPRESENTANTE LEGAL Y/O MAYOR A CARGO DEL MENOR otorga el consentimiento expreso para la captura y/o reproducción de imagen, video, audio, grabación,  de manera individual o colectiva, durante la permanencia en el stand, participación en los juegos y/o actividades, conforme los puntos I y II del presente, aceptando los términos y condiciones aquí establecidos, en representación suya y de su hijo/a o representado/a y manifiesta y certifica que será responsable de todo uso que su hijo/a, o representado haga, independientemente de que haya autorizado, o no, dicho uso.
                    Habiendo leído el presente y en sus plenas facultades, el adulto mayor de edad que acepta los términos y condiciones comprende la información sobre las captaciones, publicaciones, reproducciones y eventuales sucesos que puedan ocurrir producto o no de de la participación en el stand,  en los juegos y/o actividades, y acepta voluntariamente la producción de los mismos  y las consecuencias derivadas de ello. 
                </Typography> 
            </Box>
            <Box mt={3}>
                <Typography variant='h5'>IV. COMPETENCIA</Typography>
                <Typography textAlign={"left"}>
                    Toda controversia será resuelta de acuerdo a la Ley Argentina y será sometida a la jurisdicción de la Justicia Nacional en lo Comercial con asiento en la Ciudad Autónoma de Buenos Aires de la República Argentina, con renuncia a cualquier otro fuero y/o jurisdicción que les pudiera corresponder. 
                </Typography> 
            </Box>
            <Box mt={3}>
                <Typography variant='h5'>V. ASISTENCIA AL PARTICIPANTE</Typography>
                <Typography textAlign={"left"}>
                    Ante cualquier consulta, podrá comunicarse con ART MUTUAL RURAL a través del mail  atencion.clientes@artmutualrural.org.ar
                </Typography>
            </Box>       
                        
            <Box mt={3}>
                <Button variant="contained" onClick={handleClick}>volver al inicio</Button>
            </Box>
            
        </div>
    )
}

export default TerminosCondiciones

