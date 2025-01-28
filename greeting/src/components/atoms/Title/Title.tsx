import { ITitleProps } from "./Title.props";

export const Title: React.FC<ITitleProps> = ({  value }) => {

  return (
    <h3 className="title">{value}</h3>
  );
};