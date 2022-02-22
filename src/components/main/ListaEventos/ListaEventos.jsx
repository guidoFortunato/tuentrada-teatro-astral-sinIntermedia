import React from 'react'
// import { Link } from 'react-router-dom'
import './listaEventos.css'

const ListaEventos = ({id, title, image, date, time, buy}) => {

    console.log(id)

    
    return (
        <>                                       
                    {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" key={id}>
                        <div className="card">                                            
                            <img src={`https://tuentrada.com/${image}`} className="card-img-top" alt={title} />
                            <div className="card-body">                                                
                                <h6 className={'card-title'}>{title}</h6>
                                <hr />


                                <div className="container-tuentrada">

                                    <div className="container-tuentrada__col1 me-5">

                                   

                                
                                       
                                            
                                        
                                            <span className='fw-bold'>SAB</span>
                                       
                                      
                                        
                                            {console.log(date.split('-')[0]) }
                                            <span className='fecha-tuen'>{date.split('-')[0]}</span>
                                     
                                        
                                        
                                            
                                            <span className='fw-bold'>FEB 2022</span>
                                        

                                    </div>
                                
        
                                
                                    <div className="container-tuentrada__col2">

                                        
                                        <a
                                            className="btn btn-primary btn-color mt-4"
                                            rel="noreferrer"
                                            target='_blank'
                                            href={buy}
                                            
                                            >
                                            Comprar
                                        </a>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div> */}

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" key={id}>
                                        <div className="card">                                            
                                            <img src={`https://tuentrada.com/${image}`} className="card-img-top" alt={title} />
                                            <div className="card-body">                                                
                                                <h6 className={'card-title'}>{title}</h6>

                                                <div className="fecha-hora">
                                                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                                    <span className='fecha-hora__color-texto'>Fecha:</span>
                                                    <span className='ms-1'>{date}</span>
                                                </div>

                                                <div className="fecha-hora mt-1">
                                                    <i className="bi bi-clock-fill color-icono me-2"></i>
                                                    <span className='fecha-hora__color-texto'>Hora:</span>
                                                    <span className='ms-1'>{time} hs</span>
                                                </div>
                                                {/* <Link
                                                    to={`/${id}`}
                                                    className="btn btn-color text-white btn-md mt-3"
                                                    
                                                >
                                                    Comprar
                                                </Link> */}
                                                <a
                                                    className="btn btn-primary btn-color mt-4"
                                                    rel="noreferrer"
                                                    target='_blank'
                                                    href={buy}
                                            
                                                >
                                                    Comprar
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                
                    
        </>
    )
}

export default ListaEventos
