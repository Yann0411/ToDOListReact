import LiList from '../LiList';
import './list.scss';

function List({ tasks }) {
  return (
    <div>
      <ul className="list">
        {tasks.map((task) => <LiList key={task.id} {... task} />)}

      </ul>

    </div>

  );
}
export default List;
