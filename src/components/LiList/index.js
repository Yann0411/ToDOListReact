function LiList({ done, label }) {

    const handleChanged = ()=>{
        console.log('toto')
    }

  return (
    <li>
      <label className={`list-item ${done ? 'list-item--done' : ''}`}>
        <input type="checkbox" checked={done} onChange={handleChanged} />
        {label}
      </label>

    </li>
  );
}
export default LiList;
