import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="error">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="success">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="pending">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="success">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="pending">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
