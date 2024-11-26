import { useEffect, useState } from "react";
import { PetCard } from "./PetCard/PetCard";
import "./PetsFeed.css";

export const PetsFeed = () => {
  const [petsData, setPetsData] = useState<
    { description: string; address: string; state: string; city: string }[]
  >([]);

  useEffect(() => {
    const rawData = localStorage.getItem("petsData");
    const petsData = rawData ? JSON.parse(rawData) : [];
    setPetsData(petsData);
  }, []);

  return (
    <div className="pets-feed">
      {petsData.length > 0
        ? petsData.map((petData) => (
            <PetCard
              key={petData.description}
              description={petData.description}
              address={petData.address}
              state={petData.state}
              city={petData.city}
            />
          ))
        : null}
    </div>
  );
};
