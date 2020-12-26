import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

import './Intervalo.css';
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";

const Intervalo = props => {
    const { min, max } = props.numeros
    return (
        <Card title='Intervalo de Números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}
                     onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                      onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

const mapDispatchToProps = dispatch => {
    return {
        alterarMinimo(novoNumero){
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero){
            // action creator -> action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)