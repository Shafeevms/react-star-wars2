export const useGetParams = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const result = {};
  searchParams.forEach((value, key) => {result[key] = value});
  return result;
}
