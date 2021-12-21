import React from 'react'
// import { Link } from "react-router-dom";
import { VariablesContext } from '../../context/VariablesProvider'
import { Get } from '../services/privateApiService';
import lauraDaniel from '../../img/lauraDaniel.webp'
import romano from '../../img/romano.webp'
import roblox from '../../img/roblox.webp'
import hilda from '../../img/hilda.webp'
import policeMen from '../../img/policeMen.webp'
import wali from '../../img/wali.webp'
import birmajer from '../../img/birmajer.webp'
import momi from '../../img/momi.webp'



const Eventos = (props) => {

    const [eventos, setEventos] = React.useState([])
    const {variables} = React.useContext(VariablesContext)



    React.useEffect(()=>{

        const getData = async ()=>{
            
            const url = 'https://api.tuentrada.com/api/venue?venue=astral'    

            try {

                const response = await Get(url)               
                setEventos(response)       

            } catch (error) {
                console.log(error)
            }

        }
        
        getData()
    }, [])


    return eventos.length ? (
        
            <main id="main">
                <section id="team">
                    <div className="container wow fadeInUp">
                        <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">{variables.tituloEventos}</h3>
                            <div className="section-title-divider"></div>
                        </div>
                        </div>

                        <div className="row">


                            {
                                eventos.map( (item, index)=>(
                                    
                                        
                                    
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" key={item.id}>
                                        <div className="card">                                            
                                            <img src={`https://tuentrada.com/${item.image}`} className="card-img-top" alt={item.title} />
                                            <div className="card-body">                                                
                                                <h6 className={'card-title'}>{item.title}</h6>

                                                <div className="fecha-hora">
                                                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                                    <span className='fecha-hora__color-texto'>Fecha:</span>
                                                    <span className='ms-1'>{item.date}</span>
                                                </div>

                                                <div className="fecha-hora mt-1">
                                                    <i className="bi bi-clock-fill color-icono me-2"></i>
                                                    <span className='fecha-hora__color-texto'>Hora:</span>
                                                    <span className='ms-1'>{item.time} hs</span>
                                                </div>
                                                
                                                 <a
                                                    className="btn btn-primary btn-color mt-4"
                                                    rel="noreferrer"
                                                    target='_blank'
                                                    href={item.link_to_buy}
                                                    
                                                >
                                                    Comprar
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                              
                            
                            
                            
                            
                        </div>
                    </div>
                </section>

            </main>
        
    ) :  null
    // (
    //     <main id="main">
    //             <section id="team">
    //                 <div className="container wow fadeInUp">
    //                     <div className="row">
    //                     <div className="col-md-12">
    //                         <h3 className="section-title">{variables.tituloEventos}</h3>
    //                         <div className="section-title-divider"></div>
    //                     </div>
    //                     </div>

    //                     <div className="row">                             
                                        
                                    
    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={lauraDaniel} className="card-img-top" alt='img laura y daniel' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>LAURA Y DANIEL</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>09-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>23:00 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/LauraYDaniel/807898327785'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={romano} className="card-img-top" alt='img gerardo romano' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>GERARDO ROMANO</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>10-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>21:30 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/UnJudioComunYCorriente/524426317642'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={roblox} className="card-img-top" alt='img roblox' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>ROBLOX</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>11-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>21:00 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/Roblox/380507854474'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={hilda} className="card-img-top" alt='img hilda' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>HILDA</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>11-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>23:00 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/Hilda/941032222956'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={policeMen} className="card-img-top" alt='img the police men' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>THE POLICE MEN</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>12-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>22:00 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/ThePoliceMen/268851647340'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={wali} className="card-img-top" alt='img wali iturriaga' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>WALI ITURRIAGA</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>13-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>21:30 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/WallyIturriaga/489247086624'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={birmajer} className="card-img-top" alt='img birmajer' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>MARCELO BIRMAJER</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>19-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>21:30 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/Birmajer/2683167316'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
    //                                     <div className="card">                                            
    //                                         <img src={momi} className="card-img-top" alt='img momi giardina' />
    //                                         <div className="card-body">                                                
    //                                             <h6 className='card-title'>MOMI GIARDINA</h6>

    //                                             <div className="fecha-hora">
    //                                                 <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Fecha:</span>
    //                                                 <span className='ms-1'>24-01-2022</span>
    //                                             </div>

    //                                             <div className="fecha-hora mt-1">
    //                                                 <i className="bi bi-clock-fill color-icono me-2"></i>
    //                                                 <span className='fecha-hora__color-texto'>Hora:</span>
    //                                                 <span className='ms-1'>23:00 hs</span>
    //                                             </div>
                                                
    //                                              <a
    //                                                 className="btn btn-primary btn-color mt-4"
    //                                                 rel="noreferrer"
    //                                                 target='_blank'
    //                                                 href='https://tuentrada.com/eventos/detalle/Momi/407390404363'
                                                    
    //                                             >
    //                                                 Comprar
    //                                             </a>
                                                
    //                                         </div>
    //                                     </div>
    //                                 </div>
                                
                            
                              
                            
                            
                            
                            
    //                     </div>
    //                 </div>
    //             </section>

    //         </main>
    // )
}

export default Eventos
