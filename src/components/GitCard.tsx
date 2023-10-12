// @ts-ignore
import FeatherIcon from "feather-icons-react";

export const GitCard = (props: IGitCardProps) => {
  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <FeatherIcon icon={props.icon} size="75" color="black" />
        <p>{props.desc}</p>
      </div>
    </>
  );
};
