import './containerData.css'

function ContainerData({temp, weather, humidity}){


    return(

        <div className='containerData'>

            <div className='date'>

                <span>Tempo</span>
                <span>{weather}</span>

            </div>

            <div className='date'>

                <span>Temperatura</span>
                <span>{temp}</span>
                
              

            </div>

            <div className='date'>

                <span>Umidade</span>
                <span>{humidity}</span>

            </div>
          

        </div>

    );

}

export default ContainerData;