import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape'

import './style.css'

export default function Sabores () {
    return (
        <div>

            <Topo />

            <main>
                <section>
                    <div className='nossos-sabores'>
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className='secao-sorvetes limitar-secao'>
                    <h2>SABORES DE SORVETE</h2>

                    <div className='secao-sabores'>
                        <div className='card-sabor'>
                            <img src='../assets/sabor-oreo.png' alt='oreo' title='oreo'></img>
                            <h4>Sorvete de Oreo</h4>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className='card-sabor'>
                            <img src='../assets/sabor-pistache.png' alt='pistache' title='pistache'></img>
                            <h4>Sorvete Pistache</h4>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>

                        <div className='card-sabor'>
                            <img src='../assets/sabor-cookies-avela.png' alt='cookies' title='cookies'></img>
                            <h4>Sorvete Cookies & Avelã</h4>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>

                        <div className='card-sabor'>
                            <img src='../assets/sorbet-kiwi.png' alt='kiwi' title='kiwi'></img>
                            <h4>Sorvete de Kiwi</h4>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>

                        <div className='card-sabor'>
                            <img src='../assets/sorbet-morango.png' alt='morango' title='morango'></img>
                            <h4>Sorvete de Morango</h4>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>

                        <div className='card-sabor'>
                            <img src='../assets/sorbet-limao.png' alt='limão' title='limão'></img>
                            <h4>Sorvete de Limão Siciliano</h4>
                            <p>O incrível sorvete gourmet de limã siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Rodape />

        </div>
    )
}