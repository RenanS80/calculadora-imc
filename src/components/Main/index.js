import { useState } from 'react';
import ImcResult from '../ImcResult';
import TableResult from '../TableResult';
import './styles.css';

function Main() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');

    function calculaImc() {
        const hei = Number(height / 100);
        const imc = Number(weight / (hei * hei));
        
        console.log(typeof hei)
        console.log(typeof imc)

        if (imc < 18.5) {
            setMessage('Seu peso está abaixo do recomendado. IMC: ' +imc.toFixed(2))
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            setMessage('Seu peso está normal. IMC: ' +imc.toFixed(2))
        }
        else if (imc >= 25.0 && imc <= 29.9) {
            setMessage('Você está com sobrepeso. IMC: ' +imc.toFixed(2))
        }
        else if (imc >= 30.0 && imc <= 39.9) {
            setMessage('Você está com obesidade. IMC: ' +imc.toFixed(2))
        }
        else {
            setMessage('Você está com obesidade grave. IMC: ' +imc.toFixed(2))
        }
    }

    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="main-title">
                        <h1>Calculadora <span>IMC</span></h1>
                        <p>Vamos calcular o seu IMC</p>
                    </div>

                    <div className="input-area">
                        <label htmlFor="weight">Peso</label>
                        <input
                            id="weight"
                            type="number"
                            placeholder="Informe o seu peso (kg)"
                            value={weight}
                            onChange={ e => setWeight(e.target.value)}
                        />

                        <label htmlFor="height">Altura</label>
                        <input
                            id="height"
                            type="number"
                            placeholder="Informe a sua altura (cm)"
                            value={height}
                            onChange={ e => setHeight(e.target.value)}
                        />

                        <button onClick={calculaImc}>Calcular</button>

                        <TableResult />
                        <ImcResult />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;