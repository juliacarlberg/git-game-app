export const GitCard = (props: IGitCardProps) => {
  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <img src={props.imageUrl}></img>
        <p>{props.desc}</p>
      </div>
    </>
  );
};
