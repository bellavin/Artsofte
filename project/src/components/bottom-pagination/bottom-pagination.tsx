import {useSelector, useDispatch} from 'react-redux';
import {Pagination} from '@mui/material';
import {getMessages} from '../../store/selectors';
import {setPaginationAction} from '../../store/actions';
import {MESSAGES_PER_PAGE} from '../../consts';
import {State} from '../../types';


function BottomPagination(): JSX.Element {
  const dispatch = useDispatch();
  const messages = useSelector(getMessages);
  const {pagination} = useSelector((state: State) => state);
  const count = Math.ceil(messages.length / MESSAGES_PER_PAGE);

  return (
    <div className="bottom-pagination">
      {count > 1 && (
        <Pagination
          count={count}
          page={pagination + 1}
          color="primary"
          onChange={(_evt, value) => {
            dispatch(setPaginationAction(value - 1));
          }}
        />
      )}
    </div>
  );
}

export default BottomPagination;
