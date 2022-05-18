import axios from 'axios';
import { useState } from 'react';

const baseUrl = 'https://api.github.com/users/';
const repos = '/repos';

const UseDataGit = () => {
  const [data, setData] = useState(null);
  const [dataRepos, setDataRepos] = useState([]);
  const [errorUser, setErrorUser] = useState(false);

  const getInfoRepos = (name) => {
    axios.get(`${baseUrl}${name}${repos}`).then((response) => {
      const allDataRepos = response.data;
      setDataRepos(allDataRepos);
    });
  };

  const getInfoUser = (name) => {
    axios
      .get(`${baseUrl}${name}`)
      .then((response) => {
        const allData = response.data;
        setData(allData);
        setErrorUser(false);
        getInfoRepos(name);
      })
      .catch(() => {
        setErrorUser(true);
      });
  };

  return {
    data,
    dataRepos,
    errorUser,
    getInfoUser,
  };
};

export default UseDataGit;
