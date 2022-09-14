import {useQuery} from '@tanstack/react-query';

const getDatawithFetch = () =>
  fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);

export const useGetData = () => {
  const {isLoading, isError, data, error} = useQuery(
    ['todos'],
    getDatawithFetch,
  );

  return {isLoading, data};
};
