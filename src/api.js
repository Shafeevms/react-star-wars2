export const searchItem = async (path, input) => {
  const response = await fetch(`https://swapi.dev/api/${path}/?search=${input}`);
  return await response.json();
}

export const getList = async (path, page = 1) => {
  if (path === '/') return;
  const response = await fetch(`https://swapi.dev/api/${path}/?page=${page}`);
  const data = await response.json();
  return {
    pages: data.results,
    quantity: data.count
  };
}

export const getItem = async (path, index) => {
  const response = await fetch(`https://swapi.dev/api/${path}/${index}/`);
  return  await response.json();
}