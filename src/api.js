export const getList = async (path) => {
  if (path === '/') return;
  let pages = [];
  const response = await fetch(`https://swapi.dev/api/${path}/`);
  let data = await response.json();
    for (let i = 1; data.next; i++) {
      const response = await fetch(`https://swapi.dev/api/${path}/?page=${i}`);
      data = await response.json();
      pages.push(...data.results);
    }
  return pages;
}


export const getItem = () => {
  
}