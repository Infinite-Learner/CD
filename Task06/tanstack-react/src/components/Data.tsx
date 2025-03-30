import axios from "axios";
import { pokeType, TableType } from "../Interfaces/poke.api-ditto";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const DataComponent = () => {
  const [ComponentData, setComponentData] = useState({});
  const [Api_Data, setApi_Data] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      const initialData: TableType[] = Object.keys(data as pokeType).map(
        (key, i, val) => {
          const currdata = (data as pokeType)[key as keyof pokeType];
          return {
            id: ++i as number,
            Field_Name: key as string,
            Field_Type: Array.isArray(currdata) ? "Array" : typeof currdata,
            length: Array.isArray(currdata)
              ? currdata.length
              : typeof currdata === "object"
              ? Object.keys(currdata).length
              : 1,
          };
        }
      );
      setComponentData(data as pokeType);
      setApi_Data(initialData);
      console.log(initialData);
    })();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          navigate("/Table", {
            state: {
              initialData: Api_Data,
              TableData: ComponentData,
            },
          });
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default DataComponent;
