import { FC } from "react";
interface Props {
  description: string;
  address: string;
  state: string;
  city: string;
}
export const PetCard: FC<Props> = ({
  description,
  address,
  state,
  city,
}: Props) => {
  return (
    <div className="pet-card">
      <p>{description}</p>
      <p>{address}</p>
      <p>{state}</p>
      <p>{city}</p>
    </div>
  );
};
