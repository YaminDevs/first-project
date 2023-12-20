import React from "react";

const Card = ({id, name, email}) => {
    return (
            <div className="card">
                <img src={`https://robohash.org/${id}`} alt='robot' className="img"/>
                <p>{name}</p>
                <p>{email}</p>
            </div>
    )
}
export default Card