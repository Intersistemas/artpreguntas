import React, { Component } from 'react'
//import YouTube from 'react-youtube';
import './estilos.css';
import Typography from '@mui/material/Typography';
import Accordion from './Accordion';
import { Data } from './Data';    


export class Mapa extends Component {
   
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    componentDidUpdate(){
        window.scrollTo(0, 0)
    }
    
    constructor(props) {
        super(props)
        
        // Create the ref
        this.title = React.createRef();
        this.state = {

            prov: {},
            actividades:[]
            }
      }

      funcion2(d){
       

        let provincia = Data.find(({provincia}) => provincia === d)

        console.log('prov selec: ',provincia);

        this.setState({ prov: provincia.provincia, actividades: provincia.actividades})

      }

    render() {

        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1,
            },
          };

        return (
            <div>
                <div id="Mapa" className="seccion">
                    <Typography variant="h4" fontWeight={"bold"} color={'gray'}>Actividades por Provincia</Typography>
                    <div id="Provincias" style={{position: 'absolute',margin: '0% -14%'}}>  
                        <div id="Descripcion" style={{margin: '-15%'}}>Haga click en cualquier provincia</div>                                  
                        <div id="Jujuy" className="ar-pcia ar-jujuy" title="Jujuy" onClick={() => this.funcion2("JUJUY")}><span></span></div>
                        <div id="Salta" className="ar-pcia ar-salta" title="Salta" onClick={() => this.funcion2("SALTA")}><span></span></div>
                        <div id="Formosa" className="ar-pcia ar-formosa" title="Formosa" onClick={() => this.funcion2("FORMOSA")}><span></span></div>
                        <div id="Catamarca" className="ar-pcia ar-catamarca" title="Catamarca" onClick={() => this.funcion2("CATAMARCA")}><span></span></div>
                        <div id="Tucuman" className="ar-pcia ar-tucuman" title="Tucumán" onClick={() => this.funcion2("TUCUMAN")}><span></span></div>
                        <div id="Stgo" className="ar-pcia ar-santiago-del-estero" title="Stgo. Estero" onClick={() => this.funcion2("SANTIAGO DEL ESTERO")}><span></span></div>
                        <div id="Chaco" className="ar-pcia ar-chaco" title="Chaco" onClick={() => this.funcion2("CHACO")}><span></span></div>
                        <div id="Corrientes" className="ar-pcia ar-corrientes" title="Corrientes" onClick={() => this.funcion2("CORRIENTES")}><span></span></div>
                        <div id="Misiones" className="ar-pcia ar-misiones" title="Misiones" onClick={() => this.funcion2("POSADAS")}><span></span></div>
                        <div id="LaRioja" className="ar-pcia ar-la-rioja" title="La Rioja" onClick={() => this.funcion2("LA RIOJA")}><span></span></div>
                        <div id="Cordoba" className="ar-pcia ar-cordoba" title="Córdoba" onClick={() => this.funcion2("CORDOBA")}><span></span></div>
                        <div id="StaFe" className="ar-pcia ar-santa-fe" title="Sta. Fe" onClick={() => this.funcion2("SANTA FE")}><span></span></div>
                        <div id="EntreRios" className="ar-pcia ar-entre-rios" title="Entre Ríos" onClick={() => this.funcion2("ENTRE RIOS")}><span></span></div>
                        <div id="SanJuan" className="ar-pcia ar-san-juan" title="San Juan" onClick={() => this.funcion2("SAN JUAN")}><span></span></div>
                        <div id="SanLuis" className="ar-pcia ar-san-luis" title="San Luis" onClick={() => this.funcion2("SAN LUIS")}><span></span></div>
                        <div id="LaPampa" className="ar-pcia ar-la-pampa" title="La Pampa" onClick={() => this.funcion2("LA PAMPA")}><span></span></div>
                        <div id="BsAs" className="ar-pcia ar-buenos-aires" title="Bs. As." onClick={() => this.funcion2("BUENOS AIRES")}><span></span></div>
                        <div id="CABA" className="ar-pcia ar-caba" title="C.A.B.A." onClick={() => this.funcion2("CABA")}><span></span></div>
                        <div id="Mendoza" className="ar-pcia ar-mendoza" title="Mendoza" onClick={() => this.funcion2("MENDOZA")}><span></span></div>
                        <div id="Neuquen" className="ar-pcia ar-neuquen" title="Neuquén" onClick={() => this.funcion2("NEUQUEN")}><span></span></div>
                        <div id="RioNegro" className="ar-pcia ar-rio-negro" title="Río Negro" onClick={() => this.funcion2("RIO NEGRO")}><span></span></div>
                        <div id="Chubut" className="ar-pcia ar-chubut" title="Chubut" onClick={() => this.funcion2("CHUBUT")}><span></span></div>
                        <div id="StaCruz" className="ar-pcia ar-santa-cruz" title="Sta. Cruz" onClick={() => this.funcion2("SANTA CRUZ")}><span></span></div>
                        <div id="Tierra" className="ar-pcia ar-tierra-del-fuego" title="Tierra Del Fuego" onClick={() => this.funcion2("TIERRA DEL FUEGO")}><span></span></div>
                        <div id="Malvinas" className="ar-pcia ar-malvinas" title="Malvinas" onClick={() =>  this.funcion2("TIERRA DEL FUEGO")}><span></span></div>
                    </div>
                  
                    {/*<Typography variant="h5" fontWeight={"bold"}> {this.state.loc}</Typography>
                    <Typography  variant="h6"> {this.state.dir}</Typography>
                     */}
                    <h1 style={{ color: 'orange'}}> {JSON.stringify(this.state.prov)}</h1>
                {console.log('state prov mapa: ',this.state.prov)}
                     {console.log('state activ mapa: ',this.state.actividades)}
                    <Accordion Prov={this.state.prov} Actividades={this.state.actividades}/> 


                </div>                
            </div>            
        )
    }
}

export default Mapa