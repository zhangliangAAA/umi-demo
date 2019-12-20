

export default function $id({match}) {
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
}
