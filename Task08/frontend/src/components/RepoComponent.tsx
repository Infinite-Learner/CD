
import { BaseSyntheticEvent, useEffect, useState } from "react";
import axios from "axios"
import { APIDATA } from "../interfaces/api";


interface ServerResp{
  sucess:boolean;
  repo:APIDATA[];
}

export const RepoComponent = () => {

  
  const [TData,setData]=useState<APIDATA[]>([])
  const [isEditId, setEditId] = useState(0);
  const [isDeleteId, setDeleteId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [repoEdit, setrepoEdit] = useState({
    full_name: "",
    name: "",
    private: false,
    fork: false,
    url: "",
    downloads_url: "",
    deployments_url: "",
    created_at: "",
    html_url: "",
  });

  const dataFetcher = async () => {
    try {
       await axios
        .get(`http://localhost:3010/repo/allRepo`).then(response=>{
          console.log(response);
          
          const data:ServerResp = response.data as ServerResp; 
          setData(data?.repo);
          setLoading(false);
        })
        .catch((err) => {
          throw err;
        });
    
    } catch (error) {
      console.log(error);
  };
}
  useEffect(() => {
    {
      <h1>Loading</h1>;
      dataFetcher();
    }
  }, [loading]);
  const ChangeUser = (e: BaseSyntheticEvent, key: string) => {
    console.log(e.target.value);

    setrepoEdit({
      full_name: key === "Fname" ? e.target.value : repoEdit.full_name,
      name: key === "Name" ? e.target.value : repoEdit.name,
      private: key === "pr" ? Boolean(e.target.value) : repoEdit.private,
      fork: key === "fk" ? Boolean(e.target.value) : repoEdit.fork,
      url: key === "ur" ? e.target.value : repoEdit.url,
      downloads_url: key === "ddu" ? e.target.value : repoEdit.downloads_url,
      deployments_url:
        key === "dpu" ? e.target.value : repoEdit.deployments_url,
      created_at: key === "ct" ? e.target.value : repoEdit.created_at,
      html_url: key === "hu" ? e.target.value : repoEdit.html_url,
    });
  };
  const DeleteHandler = async (e: number) => {
    try {
        console.log("delete");      
      const deleted = await axios
        .delete(`http://localhost:3010/repo/deleteRepo/${e}`)
        .catch((err) => {
          throw err;
        });
        console.log(deleted);
        
      setLoading(true);

    } catch {}
  };
  const handleUpdate = async (userId: number) => {
    console.log(repoEdit);
    try {
      const updated = await axios
        .put(`http://localhost:3010/repo/updateRepo/${userId}`, repoEdit, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .catch((err) => {
          throw err;
        });
      console.log(updated);

      setLoading(true);
    } catch {}
  };

  const RenderData = () => {
    return (
      <>
        {TData.map((repo: APIDATA, i) =>
          isEditId === repo.id ? (
            <tr key={i}>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={repo.full_name}
                  onChange={(e) => {
                    setrepoEdit({
                      full_name: repo.full_name,
                      name: repo.name,
                      private: repo.private,
                      fork: repo.fork,
                      url: repo.url,
                      downloads_url: repo.downloads_url,
                      deployments_url: repo.deployments_url,
                      created_at: repo.created_at,
                      html_url: repo.html_url,
                    });
                    ChangeUser(e, "Fname");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  defaultValue={repo.name}
                  onChange={(e) => {
                    ChangeUser(e, "Name");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={String(repo.private)}
                  onChange={(e) => {
                    ChangeUser(e, "pr");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={String(repo.fork)}
                  onChange={(e) => {
                    ChangeUser(e, "fk");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={repo.url}
                  onChange={(e) => {
                    ChangeUser(e, "ur");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={repo.downloads_url}
                  onChange={(e) => {
                    ChangeUser(e, "ddu");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={repo.deployments_url}
                  onChange={(e) => {
                    ChangeUser(e, "dtu");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={repo.created_at}
                  onChange={(e) => {
                    ChangeUser(e, "ct");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={repo.html_url}
                  onChange={(e) => {
                    ChangeUser(e, "hu");
                  }}
                />
              </td>
              <td>
                <button onClick={() => {setEditId(0);handleUpdate(repo.id)}}>Update</button>
                <button
                  onClick={() => {
                    setrepoEdit({
                      full_name: "",
                      name: "",
                      private: false,
                      fork: false,
                      url: "",
                      downloads_url: "",
                      deployments_url: "",
                      created_at: "",
                      html_url: "",
                    });
                    setEditId(0);
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={i}>
              <td>{repo.full_name}</td>
              <td>{repo.name}</td>
              <td>{repo.private}</td>
              <td>{repo.fork}</td>
              <td>{repo.url}</td>
              <td>{repo.downloads_url}</td>
              <td>{repo.deployments_url}</td>
              <td>{repo.created_at}</td>
              <td>{repo.html_url}</td>
              
              
              {isDeleteId === repo.id ? (
                <td>
                  <button
                    onClick={() => {
                      setDeleteId(0);
                      DeleteHandler(repo.id);
                    }}
                  >
                    confirm
                  </button>
                  <button onClick={() => setDeleteId(0)}>cancel</button>
                </td>
              ) : (
                <td>
                  <button
                    onClick={() => {
                      setrepoEdit({
                        full_name: repo.full_name,
                      name: repo.name,
                      private: repo.private,
                      fork: repo.fork,
                      url: repo.url,
                      downloads_url: repo.downloads_url,
                      deployments_url: repo.deployments_url,
                      created_at: repo.created_at,
                      html_url: repo.html_url
                      });
                      setEditId(repo.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setDeleteId(repo.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          )
        )}
      </>
    );
  };

  return (
    <>
      <>
        <table>
          <thead>
            <tr>
              <th>FullName</th>
              <th>Name</th>
              <th>IsPrivate</th>
              <th>IsFork</th>
              <th>URL</th>
              <th>Download_URL</th>
              <th>Deployment_URL</th>
              <th>Created_at</th>
              <th>HTTP</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{RenderData()}</tbody>
        </table>
      </>
    </>
  );
};