import React, { Component } from 'react'
import YouTube from 'react-youtube';
import './estilos.css';
import Typography from '@mui/material/Typography'


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
          list: [
            {loc: '',
            dir: '',
            hora: '',}],
        }
      }

      funcion2(l,d,h){
        this.setState({loc: l, dir: d, horario: h})
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
                        <div id="Jujuy" className="ar-pcia ar-jujuy" title="Jujuy" onClick={() => this.funcion2("SAN SALVADOR DE JUJUY, JUJUY.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Salta" className="ar-pcia ar-salta" title="Salta" onClick={() => this.funcion2("SALTA - CAPITAL, SALTA. ","Actividad 1...",<YouTube videoId="ULPpT-tix5M" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Formosa" className="ar-pcia ar-formosa" title="Formosa" onClick={() => this.funcion2("FORMOSA, FORMOSA.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Catamarca" className="ar-pcia ar-catamarca" title="Catamarca" onClick={() => this.funcion2("SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Tucuman" className="ar-pcia ar-tucuman" title="Tucumán" onClick={() => this.funcion2("SAN MIGUEL DE TUCUMÁN, TUCUMAN. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Stgo" className="ar-pcia ar-santiago-del-estero" title="Stgo. Estero" onClick={() => this.funcion2("SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Chaco" className="ar-pcia ar-chaco" title="Chaco" onClick={() => this.funcion2("RESISTENCIA, CHACO.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Corrientes" className="ar-pcia ar-corrientes" title="Corrientes" onClick={() => this.funcion2("CORRIENTES CAPITAL - SECC.1, CORRIENTES.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Misiones" className="ar-pcia ar-misiones" title="Misiones" onClick={() => this.funcion2("POSADAS, MISIONES. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="LaRioja" className="ar-pcia ar-la-rioja" title="La Rioja" onClick={() => this.funcion2("LA RIOJA, LA RIOJA.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Cordoba" className="ar-pcia ar-cordoba" title="Córdoba" onClick={() => this.funcion2("CÓRDOBA, CORDOBA.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="StaFe" className="ar-pcia ar-santa-fe" title="Sta. Fe" onClick={() => this.funcion2("SANTA FÉ, SANTA FE. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="EntreRios" className="ar-pcia ar-entre-rios" title="Entre Ríos" onClick={() => this.funcion2("PARANA, ENTRE RIOS.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="SanJuan" className="ar-pcia ar-san-juan" title="San Juan" onClick={() => this.funcion2("SAN JUAN (CIUDAD CAPITAL), SAN JUAN. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="SanLuis" className="ar-pcia ar-san-luis" title="San Luis" onClick={() => this.funcion2("SAN LUIS, SAN LUIS. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="LaPampa" className="ar-pcia ar-la-pampa" title="La Pampa" onClick={() => this.funcion2("SANTA ROSA, LA PAMPA.","Actividad 1...", "https://youtu.be/OwXlS_OqSBQ")}><span></span></div>
                        <div id="BsAs" className="ar-pcia ar-buenos-aires" title="Bs. As." onClick={() => this.funcion2("LA PLATA, BUENOS AIRES.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="CABA" className="ar-pcia ar-caba" title="C.A.B.A." onClick={() => this.funcion2("CIUDAD AUTÓNOMA DE BUENOS AIRES CAPITAL FEDERAL.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Mendoza" className="ar-pcia ar-mendoza" title="Mendoza" onClick={() => this.funcion2("MAIPÚ, MENDOZA.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Neuquen" className="ar-pcia ar-neuquen" title="Neuquén" onClick={() => this.funcion2("NEUQUÉN, NEUQUEN. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="RioNegro" className="ar-pcia ar-rio-negro" title="Río Negro" onClick={() => this.funcion2("VIEDMA, RIO NEGRO. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Chubut" className="ar-pcia ar-chubut" title="Chubut" onClick={() => this.funcion2("TRELEW, CHUBUT.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="StaCruz" className="ar-pcia ar-santa-cruz" title="Sta. Cruz" onClick={() => this.funcion2("RÍO GALLEGOS, SANTA CRUZ. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Tierra" className="ar-pcia ar-tierra-del-fuego" title="Tierra Del Fuego" onClick={() => this.funcion2("USHUAIA, TIERRA DEL FUEGO. ","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                        <div id="Malvinas" className="ar-pcia ar-malvinas" title="Malvinas" onClick={() => this.funcion2("USHUAIA, TIERRA DEL FUEGO.","Actividad 1...",<YouTube videoId="OwXlS_OqSBQ" opts={opts} onReady={this._onReady} /> )}><span></span></div>
                    </div>
                  
                    <Typography variant="h5" fontWeight={"bold"}> {this.state.loc}</Typography>
                    <Typography  variant="h6"> {this.state.dir}</Typography>
                    <div> {this.state.horario}</div>

                </div>
            </div>
        )
    }
}

export default Mapa