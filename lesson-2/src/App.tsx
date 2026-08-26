function App() {
  const tasks = [
    { id: 1, title: "Купить продукты на неделю...", isDone: false },
    { id: 2, title: "Полить цветы", isDone: true },
    { id: 3, title: "Сходить на тренировку", isDone: false },
    { id: 4, title: "Снизу вверх", isDone: false },
    { id: 5, title: "Еще одна задача", isDone: true },
    { id: 6, title: "Обучить", isDone: false },
    { id: 7, title: "Повторить", isDone: true },
  ];

  // const liItems = [
  //   <li>
  //     <div>{tasks[0].title}</div>
  //     <input type="checkbox" name="first" id="1" checked={tasks[0].isDone} />
  //   </li>,
  //   <li>
  //     <div>{tasks[1].title}</div>
  //     <input type="checkbox" name="second" id="2" checked={tasks[1].isDone} />
  //   </li>,
  //   <li>
  //     <div>{tasks[2].title}</div>
  //     <input type="checkbox" name="third" id="3" checked={tasks[2].isDone} />
  //   </li>,
  // ];

  // const liCorrectItems = tasks.map((task) => (
  //   <li>
  //     <div>{task.title}</div>
  //     <input type="checkbox" checked={task.isDone} />
  //   </li>
  // ));

  return (
    <div>
      <h1>Trelly Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.title}</div>
            <input type="checkbox" defaultChecked={task.isDone} />
            {/*тут может быть checked но тогда в консоли вылезит замечание о том что ставить checked нежелательно и лучше другой проп*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
