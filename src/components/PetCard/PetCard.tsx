import { FC } from "react";

interface Props {
  name: string;
  color: string;
  address: string;
}
export const PetCard: FC<Props> = ({ name, color, address }: Props) => {
  return (
    <div>
      <p>{name}</p>
      <p>{color}</p>
      <p>{address}</p>
    </div>
  );
};
