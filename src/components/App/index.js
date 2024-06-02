import React from 'react';
import Form from '../Form';
import Counter from '../Counter';
import List from '../List';
import initialTasks from '../../data/task';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const notdoneTask = initialTasks.filter((task) => !task.done);
    const numberOfTaskNotDone = notdoneTask.length;
    const doneTask = initialTasks.filter((task) => task.done);
    const numberOfTaskDone = doneTask.length;

    return (
      <div className="app">
        <Form />
        <Counter number={numberOfTaskNotDone} suffix="en cours" />
        <List tasks={initialTasks} />
        <Counter number={numberOfTaskDone} suffix={numberOfTaskDone > 1 ? 'terminées' : 'terminée'} />
      </div>

    );
  }
}

export default App;
