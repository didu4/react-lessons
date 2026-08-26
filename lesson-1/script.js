// приложение с логикой т.е. динамическое представление статической html страницы

const tasks = [
  { title: "Купить продукты на неделю...", isDone: false },
  { title: "Полить цветы", isDone: true },
  { title: "Сходить на тренировку", isDone: false },
  { title: "Снизу вверх", isDone: false },
  { title: "Еще одна задача", isDone: true },
  { title: "Обучить", isDone: false },
  { title: "Повторить", isDone: true },
];

const rootEL = document.getElementById("root");

const headerEl = document.createElement("h1");
headerEl.append("Trelly Tasks");
rootEL.append(headerEl);

const tasksEl = document.createElement("ul");

tasks.forEach((task) => {
  const taskEl = document.createElement("li");
  const taskTitleEl = document.createElement("div");
  taskTitleEl.append(task.title);
  taskEl.append(taskTitleEl);

  const taskStatusEl = document.createElement("input");
  taskStatusEl.type = "checkbox";
  taskStatusEl.checked = task.isDone;
  taskEl.append(taskStatusEl);

  tasksEl.append(taskEl);
});

rootEL.append(tasksEl);
