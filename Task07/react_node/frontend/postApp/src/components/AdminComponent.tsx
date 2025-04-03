import axios, { AxiosError } from "axios";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface users {
  id: string;
  username: string;
  email: string;
  role: string;
}
export const AdminPanel = () => {
  const [UserCardData, setUserCardData] = useState<[]>([]);
  const [PostCardData, setPostcardData] = useState<[]>([]);
  const [userEdit, setUserEdit] = useState({
    username: "",
    role: "",
    email: "",
  });
  const [postEdit, setPostEdit] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const [isEditId, setEditId] = useState("");
  const [isDeleteId, setDeleteId] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dataFetcher = async () => {
    try {
      const { auth_token } = window.sessionStorage;

      const user_data_response = await axios
        .get(`http://localhost:3001/user/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth_token,
          },
        })
        .catch((err) => {
          throw err;
        });

      const post_data_response = await axios
        .get(`http://localhost:3001/posts/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth_token,
          },
        })
        .catch((err) => {
          throw err;
        });
      const userData = user_data_response.data;
      const postData = post_data_response.data;
      setUserCardData(userData);
      setPostcardData(postData);
      setLoading(false);
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        const msg: string = error?.response?.data?.message;
        if (
          msg.includes("jwt expired") ||
          msg.includes("UnAuthorized access") /*  */ ||
          msg.includes("Token not found") ||
          msg.includes("Invalid token ")
        ){
          window.sessionStorage.setItem("isLogged","false");
          return;
        }
        window.sessionStorage.setItem("ErrMsg",msg);
        navigate("/Error");
    }
  };
}
  useEffect(() => {
    {
      <h1>Loading</h1>;
    }
    dataFetcher();
  }, [loading]);
  const ChangeUser = (e: BaseSyntheticEvent, key: string) => {
    console.log(e.target.value);

    setUserEdit({
      username: key === "Name" ? e.target.value : userEdit.username,
      email: key === "Email" ? e.target.value : userEdit.email,
      role: key === "Role" ? e.target.value : userEdit.role,
    });
  };
  const DeleteHandler = async (e: string) => {
    try {
      const { auth_token } = window.sessionStorage;
      const deleted = await axios
        .delete(`http://localhost:3001/user/deleteUser/${e}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth_token,
          },
        })
        .catch((err) => {
          throw err;
        });
      setLoading(true);
    } catch {}
  };
  const handleUpdate = async (userId: string) => {
    console.log(userEdit);
    try {
      const { auth_token } = window.sessionStorage;
      console.log(auth_token);
      const updated = await axios
        .put(`http://localhost:3001/user/updateUser/${userId}`, userEdit, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth_token,
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
        {UserCardData.map((user: users, i) =>
          isEditId === user.id ? (
            <tr key={i}>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={user.username}
                  onChange={(e) => {
                    setUserEdit({
                      username: user.username,
                      role: user.role,
                      email: user.email,
                    });
                    ChangeUser(e, "Name");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  defaultValue={user.email}
                  onChange={(e) => {
                    ChangeUser(e, "Email");
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={user.role}
                  onChange={(e) => {
                    ChangeUser(e, "Role");
                  }}
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(user.id)}>Update</button>
                <button
                  onClick={() => {
                    setUserEdit({
                      username: "",
                      email: "",
                      role: "",
                    });
                    setEditId("");
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={i}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              {isDeleteId === user.id ? (
                <td>
                  <button
                    onClick={() => {
                      DeleteHandler(user.id);
                    }}
                  >
                    confirm
                  </button>
                  <button onClick={() => setDeleteId("")}>cancel</button>
                </td>
              ) : (
                <td>
                  <button
                    onClick={() => {
                      setUserEdit({
                        username: user.username,
                        role: user.role,
                        email: user.email,
                      });
                      setEditId(user.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setDeleteId(user.id);
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
              <th>UserName</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{RenderData()}</tbody>
        </table>
      </>
    </>
  )
}
