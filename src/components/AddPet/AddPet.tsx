import { useState } from "react";
import { statesData } from "../../data/state-city";
import "./AddPet.css";

export const AddPet = () => {
  const [selectStateValue, setSelectStateValue] = useState(
    statesData[0].stateName
  );
  const [selectCityValue, setSelectCityValue] = useState(
    statesData[0].cities[0].cityName
  );
  const addPetToStorage = () => {};

  const stateOptions = statesData.map((state) => (
    <option key={state.id} value={state.stateName}>
      {state.stateName}
    </option>
  ));

  const cityOptions = statesData
    .find((state) => state.stateName == selectStateValue)
    ?.cities.map((city) => (
      <option value={city.cityName} key={city.city_ID}>
        {city.cityName}
      </option>
    ));

  const handleOnChangeStateSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setSelectStateValue(value);
  };

  return (
    <>
      <div id="root-add-pet">
        <div className="container">
          <h1>Adicionar animal perdido</h1>
          <div className="form-control">
            <p>Descrição do animal</p>
            <textarea name="" id="id-description"></textarea>
          </div>
          <div className="form-control">
            <p>Endereço onde foi visto pela última vez</p>
            <input type="text" />
          </div>
          <div className="form-control">
            <p>Estado</p>
            <select
              name="state-select"
              id="id-state-select"
              onChange={handleOnChangeStateSelect}
              value={selectStateValue}
            >
              {stateOptions}
            </select>
          </div>
          <div className="form-control">
            <p>Cidade</p>
            <select
              name="city-select"
              id="id-city-select"
              onChange={(e) => setSelectCityValue(e.target.value)}
              value={selectCityValue}
            >
              {cityOptions}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
