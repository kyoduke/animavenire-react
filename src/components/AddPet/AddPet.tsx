import { useState } from "react";
import { statesData } from "../../data/state-city";
import "./AddPet.css";

interface FormData {
  description: string;
  address: string;
  state: string;
  city: string;
}

export const AddPet = () => {
  const [formData, setFormData] = useState({
    description: "",
    address: "",
    state: statesData[0].stateName,
    city: statesData[0].cities[0].cityName,
  });

  // const addPetToStorage = () => {};

  const stateOptions = statesData.map((state) => (
    <option key={state.id} value={state.stateName}>
      {state.stateName}
    </option>
  ));

  const cityOptions = statesData
    .find((state) => state.stateName == formData.state)
    ?.cities.map((city) => (
      <option value={city.cityName} key={city.city_ID}>
        {city.cityName}
      </option>
    ));

  const handleOnChangeStateSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setFormData({ ...formData, state: value });
  };

  const submitFormData = () => {
    const existingData = localStorage.getItem("petsData");
    const data: [FormData] = existingData ? JSON.parse(existingData) : [];
    data.push(formData);
    localStorage.setItem("petsData", JSON.stringify(data));
    setFormData({ ...formData, description: "", address: "" });
  };

  return (
    <>
      <div id="root-add-pet">
        <div className="container">
          <h1 id="title">Adicionar animal perdido</h1>
          <div className="form-control">
            <p>Descrição do animal</p>
            <textarea
              name=""
              id="id-description"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              value={formData.description}
            ></textarea>
          </div>
          <div className="form-control">
            <p>Endereço onde foi visto pela última vez</p>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              value={formData.address}
            />
          </div>
          <div className="form-control">
            <p>Estado</p>
            <select
              name="state-select"
              id="id-state-select"
              onChange={handleOnChangeStateSelect}
              value={formData.state}
            >
              {stateOptions}
            </select>
          </div>
          <div className="form-control">
            <p>Cidade</p>
            <select
              name="city-select"
              id="id-city-select"
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              value={formData.city}
            >
              {cityOptions}
            </select>
          </div>
          <div className="form-control button">
            <button onClick={submitFormData}>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};
