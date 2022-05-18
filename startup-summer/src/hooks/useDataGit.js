import axios from 'axios';
import { useState } from 'react';

const baseUrl = 'https://api.github.com/users/';
//  let error = false;
//  let dataUser = {};
//  const urlRepos = 'https://api.github.com/users/USERNAME/repos'
//  const username = 'VZaleski';

const UseDataGit = () => {
  const [data, setData] = useState(null);
  const [errorUser, setErrorUser] = useState(false);

  const getInfoUser = (name) => {
    axios
      .get(`${baseUrl}${name}`)
      .then((response) => {
        const allData = response.data;
        setData(allData);
        setErrorUser(false);
      })
      .catch(() => {
        setErrorUser(true);
      });
  };

  return {
    data,
    errorUser,
    getInfoUser,
  };
};

export default UseDataGit;
