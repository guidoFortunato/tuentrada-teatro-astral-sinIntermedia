import React from 'react'
import { VariablesContext } from '../../context/VariablesProvider'
import { Get } from '../services/privateApiService';




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


    return (
        
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
        
    ) 
    
}

export default Eventos
