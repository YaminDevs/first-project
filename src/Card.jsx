import React from "react";

const Card = ({id, name, email}) => {
    return (
        <>
            <img src={`https://robohash.org/${id}`} alt='robot'/>
            <p>{name}</p>
            <p>{email}</p>
        </>
    )
}
export default Card