import React, { useState, useEffect } from "react";

const PokemonCard = ({data}) =>{

    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImg = async () => {
            try{
                const res = await fetch(data.url)
                const imgData = await res.json();
                setImage(imgData.sprites.front_default);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchImg();
    }, [data.url])

    return(
        <>
        <div>
            <h3>{data.name}</h3>
            {image && <img src={image} alt={data.name} />}
        </div>
        </>
    )
}

export default PokemonCard;