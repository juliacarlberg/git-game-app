// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { useDrag } from "react-dnd";
import { IGitCardProps } from "../models/IGitCardProps";
import { ItemTypes } from "../models/ItemTypes";

export const GitCard = (props: IGitCardProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { title: props.title },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div
        id={props.title}
        className="card"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontWeight: "bold",
          cursor: "move",
        }}
      >
        <h1>{props.title}</h1>
        <FeatherIcon icon={props.icon} size="75" color="black" />
        <p>{props.desc}</p>
      </div>
    </>
  );
};
