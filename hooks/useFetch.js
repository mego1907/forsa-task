import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import axios from "axios";


const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {

      const res = await fetch(`https://forsa-staging.bit68.com/api/v1/${endpoint}`);
      const resData = await res.json();
      setData(resData);

    } catch (error) {
      setError(error);
      alert("There is an error")
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, error };
}

export default useFetch