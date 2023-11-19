import "./Footer.css";
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start listing the things you are planning to do on your todo list 🚀
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Congrats you managed to  accomplish all you planned to do "
          : `  You have ${numItems}  things  to do on your list, and so far you managed to do ${numPacked}, (${percentage}%) of it`}
      </em>
    </footer>
  );
}
