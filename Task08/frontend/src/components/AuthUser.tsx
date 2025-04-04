import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { APIDATA, repoResponse } from "../interfaces/api";


export const AuthUser = () => {
  const CLIENT_ID = import.meta.env.VITE_REACT_APP_GH_CLIENT_ID;
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const generateAccessToken = async (code: string | null) => {
    if (code && localStorage.getItem("accessToken") === null) {
      const { data }: { data: string } = await axios.get(
        `http://localhost:3010/getAccessToken?code=${code}`
      );
      const access_token = data.split("=")[1].split("&")[0];
      console.log(access_token);
      localStorage.setItem("access_token", access_token);
      setAuth(true);
    }
  };

  const getRepoData = async () => {
    const { access_token } = localStorage;
    const { data }: { data: APIDATA[] } = await axios.get(
      `http://localhost:3010/getRepoDetails`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
      }
    );
    
    if (data){
    setAuth(true);
    const processed_data = data.map((e) => {
      return {
        id: e.id,
        node_id: e.node_id,
        name: e.name,
        full_name: e.full_name,
        private: e.private,
        fork: e.fork,
        created_at: e.created_at,
        url: e.url,
        html_url: e.html_url,
        downloads_url: e.downloads_url,
        deployments_url: e.deployments_url,
      };
    });
    await axios
      .post(`http://localhost:3010/repo/addRepoDetails`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
        processed_data,
      })
      .then((response) => {
        const data: repoResponse = response.data as repoResponse;
        console.log(data.success);
        data.success?navigate("/RepoDatas"):<><h1>Something Wrong</h1></>;
        setLoading(!data.success);
      });

    }
  };
  useEffect(() => {
    const query = window.location.search;
    const UrlParams = new URLSearchParams(query);
    const code = UrlParams.get("code");
    generateAccessToken(code);
  }, []);
  const getCode = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    );
  };

  return (
    <>
      {isAuth ? (
        <div>
          <h1>Hi User , You're Authenticated</h1>
          <button onClick={getRepoData}>GetData</button>
          <button onClick={()=>{navigate("/RepoDatas")}}>ViewData</button>
          <button
            onClick={() => {
              localStorage.clear();
              setAuth(false);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <h1>Authenticating</h1>
          ) : (
            <button
              onClick={() => {
                setLoading(true);
                getCode();
              }}
            >
              Authenticate with GitHUB
            </button>
          )}
        </div>
      )}
    </>
  );
};
