
import data from './pokeData';
import Pokecard from './Pokecard';
import './Pokemon.css'


const Pokedex = () => {
    console.log(data)
   return <>
        <div className="mon">
        {data.map(p => (
        <Pokecard  key={p.id} name={p.name} type={p.type} base_experience={p.base_experience}
        img={p.img} />
          
        ))}
      </div>
        
       
    </>
}

export default Pokedex;