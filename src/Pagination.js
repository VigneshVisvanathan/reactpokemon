import React from 'react'

export default function Pagination({handleprev,handlenext}) {
    return (
        <div>
            {handleprev && <button onClick={handleprev}>Previous</button>}
           {handlenext && <button onClick={handlenext}>Next</button>}
        </div>
    )
}
