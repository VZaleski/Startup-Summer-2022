import axios from 'axios';
import { useState } from 'react';

const baseUrl = 'https://api.github.com/users/';
const repos = '/repos';

const UseDataGit = () => {
  const [data, setData] = useState(null);
  const [dataRepos, setDataRepos] = useState([]);
  const [errorUser, setErrorUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);
        setData(allData);
        setErrorUser(false);
        getInfoRepos(name);
      })
      .catch(() => {
        setIsLoading(true);
        setErrorUser(true);
      });
  };

  return {
    isLoading,
    setIsLoading,
    data,
    dataRepos,
    errorUser,
    getInfoUser,
  };
};

export default UseDataGit;
