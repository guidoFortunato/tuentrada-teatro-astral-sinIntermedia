import React, { useState } from 'react'
import { VariablesContext } from '../../context/VariablesProvider'
import MessageError from '../error/MessageError';
import ListaEventos from './ListaEventos/ListaEventos';
import Loader from './Loader/Loader';




const Eventos = (props) => {

    const [eventos, setEventos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const {variables} = React.useContext(VariablesContext)



    React.useEffect(()=>{
        setLoading(true)

        const getData = async ()=>{
            const url = 'https://api.tuentrada.com/api/venue?venue=astral'
            const token = '3|ruU31fAttxU0FKWmvV8pdB1GCyhQa7lNAQwBfEVb'

            try {
                const res = await fetch(url, {

                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
        
                })
                
                
                // eslint-disable-next-line no-throw-literal
                if (!res.ok) throw {
                    err: true,
                    status: res.status || "00", 
                    statusText: res.statusText || "Error al intentar acceder al servidor"
                }

               
                const data = await res.json()

                 /*
                no funciona el manejo de error
               
                if (!res.ok) throw {
                    err: true,
                    status: res.status || "00", 
                    statusText: res.statusText || "Ocurrió un error"
                }
                */

                
                console.log(data)
                setEventos(data)
                
            } catch (err) {
                console.log('error',err)
                if (err) {
                    setError(err)
                }    
            }
            

           
            setLoading(false)
        }
        
        getData()
    }, [])


    return  loading ? <Loader /> : (
        
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

                            

                         
                            
                            { eventos.length > 0 ? eventos.map( item => (
                                    <ListaEventos 
                                        id={item.id} 
                                        title={item.title} 
                                        image={item.image} 
                                        date={item.date} 
                                        time={item.time} 
                                        buy={item.link_to_buy}
                                    />
                                )) : <MessageError error={error}/>
                           
                            }
                              
                            
                            
                            
                            
                        </div>
                    </div>
                </section>

            </main>
        
    ) 
    
}

export default Eventos
