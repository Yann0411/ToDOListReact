import './counter.scss';

function Counter({ number, suffix }) {
  let text = 'tache';
  if (number > 1) {
    text = 'taches';
  }
  return (
    <div>
      <p className="counter"> {number} {text}  {suffix}</p>
    </div>

  );
}
export default Counter;
