import {useSelector} from 'react-redux';
import {getMessages} from '../../store/selectors';
import {MESSAGES_PER_PAGE} from '../../consts';
import {State} from '../../types';


function Messages(): JSX.Element {
  const messages = useSelector(getMessages);
  const {pagination} = useSelector((state: State) => state);
  const paginatedMessages = [...messages].filter((_item, i) => i >= pagination * MESSAGES_PER_PAGE && i < pagination * MESSAGES_PER_PAGE + MESSAGES_PER_PAGE);

  return (
    <div className="messages">
      <table className="messages__table">
        <thead>
          <tr className="messages__tr">
            <th className="messages__th">Дата</th>
            <th className="messages__th">Номер</th>
            <th className="messages__th">Длительность</th>
            <th className="messages__th messages__th--last">Запись сообщения</th>
          </tr>
        </thead>
        <tbody>
          {paginatedMessages.map((item) => {
            const date = item.received.toLocaleString();
            const durationMin = Math.floor(item.duration / 60) ? `${Math.floor(item.duration / 60)} мин` : '';
            const durationSec = item.duration % 60 ? `${item.duration % 60} сек` : '';
            return (
              <tr className="messages__tr" key={item.id}>
                <td className="messages__td">{date}</td>
                <td className="messages__td">{item.from}</td>
                <td className="messages__td">{`${durationMin} ${durationSec}`}</td>
                <td className="messages__td messages__td--last"><audio controls src={item.mime.mime.dispositionFilename}></audio></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Messages;
