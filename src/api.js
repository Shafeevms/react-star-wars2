// export const getList = async (path) => {
//   if (path === '/') return;
//   let pagesData = {
//     pages: [],
//     meta:[]
//   };
//   const response = await fetch(`https://swapi.dev/api/${path}/`);
//   let data = await response.json();
//     for (let i = 1; data.next; i++) {
//       const response = await fetch(`https://swapi.dev/api/${path}/?page=${i}`);
//       data = await response.json();
//       pagesData.pages.push(...data.results);
//       pagesData.meta.push(data.next)
//     }
//     console.log(pagesData);
//   return pagesData;
// }

export const getList = async (path) => {
  if (path === '/') return;
  let pagesData = {
    pages: 1,
    meta:[]
  };
  const response = await fetch(`https://swapi.dev/api/${path}/`);
  let data = await response.json();
    for (let i = 1; data.next && i=== 50; i++) {
      const response = await fetch(`https://swapi.dev/api/${path}/?page=${i}`);
      pagesData.pages = i;
      pagesData.meta.push(data.next)
    }
  return pagesData;
}


export const getItem = async (path, index) => {
  const response = await fetch(`https://swapi.dev/api/${path}/${index}/`);
  return  await response.json();
}