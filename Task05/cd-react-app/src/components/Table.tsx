import { useLocation } from "react-router-dom";
import { ValueType } from "./DashBoard";
import { Navbar } from "./Navbar";
import "../css/Table.css"
const TableShow = () => {
  const location = useLocation();
  const TableData: ValueType[] = location.state.TableData;
  console.log(TableData);
  return (
    <>
      <Navbar />
      <div className="Table">
        <table>
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Thought</th>
            </tr>
            {TableData.map((rowObj) => (
              <tr key={rowObj.id}>
                <td  className="id">{rowObj.id}</td>
                <td className="Name">{rowObj.Name}</td>
                <td className="Thought">{rowObj.Thought}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { TableShow };
