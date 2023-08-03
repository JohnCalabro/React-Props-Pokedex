import './Card.css'

const Pokecard = ({id, name, type, base_experience, img}) => {
    return <>

    <div className="card-border">
    <p>{name}</p>
    <img src={img} />
    <p>Type: {type}</p>
    <p>EXP: {base_experience}</p>
    </div>
    

    </>
}



export default Pokecard;