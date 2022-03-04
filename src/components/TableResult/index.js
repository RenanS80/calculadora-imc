import './styles.css';

function TableResult() {
    return (
        <table>
            <thead className="heading">
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Menor que 18.5</td>
                    <td>Magreza</td>
                </tr>
                <tr>
                    <td>Entre 18.5 e 24.9</td>
                    <td>Normal</td>
                </tr>
                <tr>
                    <td>Entre 25.0 e 29,9</td>
                    <td>Sobrepeso</td>
                </tr>
                <tr>
                    <td>Entre 30.0 e 39.9</td>
                    <td>Obesidade</td>
                </tr>
                <tr>
                    <td>Maior que 39.9</td>
                    <td>Obesidade grave</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableResult;