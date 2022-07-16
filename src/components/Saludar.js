import React from 'react';
export default function SaludarProps(props) {
    // console.log(props.nombre);
    return (
        <div>
            <h2>Hola, {props.nombre}, tienes {props.edad} años</h2>
        </div>
    );
}