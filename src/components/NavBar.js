import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

export default function NavBar({ unCompletedTodos, selectedOption, onChange }) {
  if (!unCompletedTodos)
    return (
      <header>
        <h3>please set your todos</h3>
      </header>
    );
  return (
    <div>
      <header>
        <span>{unCompletedTodos}</span>
        <h3>todos are not completed</h3>
        <Select onChange={onChange} value={selectedOption}
         options={options} className='select' />
      </header>
    </div>
  );
}
