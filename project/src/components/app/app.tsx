import Header from '../header/header';
import Filter from '../filter/filter';
import Messages from '../messages/messages';
import Pagination from '../bottom-pagination/bottom-pagination';


function App(): JSX.Element {
  return (
    <div className="app container">
      <Header />
      <Filter />
      <Messages />
      <Pagination />
    </div>
  );
}

export default App;
