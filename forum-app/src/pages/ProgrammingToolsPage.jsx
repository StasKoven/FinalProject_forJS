import React from "react";

const ProgrammingToolsPage = () => {
  const tools = [
    {
      id: 1,
      name: "Visual Studio Code",
      description:
        "Популярний текстовий редактор для програмування, з безліччю розширень і підтримкою багатьох мов.",
    },
    {
      id: 2,
      name: "GitHub",
      description:
        "Платформа для хостингу коду та спільної роботи з використанням Git. Ідеальна для командних проектів.",
    },
    {
      id: 3,
      name: "Node.js",
      description:
        "JavaScript-движок для створення серверних додатків. Швидкий і ефективний завдяки V8.",
    },
    {
      id: 4,
      name: "React",
      description:
        "Бібліотека JavaScript для створення користувацьких інтерфейсів. Відома своїм компонентним підходом.",
    },
    {
      id: 5,
      name: "Docker",
      description:
        "Інструмент для контейнеризації, що забезпечує розробку і розгортання програм у середовищах, ізольованих один від одного.",
    },
    {
      id: 6,
      name: "Postman",
      description:
        "Інструмент для тестування API, що допомагає розробникам швидко відлагоджувати серверні запити.",
    },
    {
      id: 7,
      name: "Jira",
      description:
        "Потужний інструмент управління проектами, що використовується для організації робочих процесів у командах.",
    },
    {
      id: 8,
      name: "Python",
      description:
        "Мова програмування загального призначення, яка підходить як для аналізу даних, так і для веб-розробки.",
    },
    {
      id: 9,
      name: "Figma",
      description:
        "Онлайн-інструмент для дизайну інтерфейсів, спільної роботи та створення прототипів.",
    },
    {
      id: 10,
      name: "IntelliJ IDEA",
      description:
        "Потужне середовище розробки для Java і багатьох інших мов, з розумними підказками та автодоповненням.",
    },
  ];

  return (
    <div className="programming-tools">
      <h1 className="text-2xl font-bold text-center mb-6">Programming Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">{tool.name}</h2>
            <p className="text-gray-700">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingToolsPage;
