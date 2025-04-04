export interface APIDATA {
    id: number;
    node_id: string;
    full_name: string;
    name: string;
    private: boolean;
    fork: boolean;
    url: string;
    downloads_url: string;
    deployments_url: string;
    created_at: string;
    html_url: string;
  }
  
  export interface repoResponse {
    success: boolean;
    data: APIDATA[];
  }