import React, { useEffect, useState } from "react";
export const BookSearchContext = React.createContext(null);
export const BookSearchProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);
  const [collectionBooks, setCollectionBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const load = function () {
    return fetch(`/load-collection`)
     .then((response) => response.json())
     .then((data) => {
       setCollection(data);
       setLoadingBooks(true)
       setLoading(false);
     })
     .catch((err) => {
       console.error(err);
       setLoading(false);
     });
 };
 const add = function (data) {
  return fetch(`/add-collection`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {"format": 'application/josn'}
  })
   .then((response) => response.json())
   .then((data) => {
     setCollection(data);
     setLoadingBooks(true)
     setLoading(false);
   })
   .catch((err) => {
     console.error(err);
     setLoading(false);
   });
};
  useEffect(() => {
    load()
  }, [])
  return (
    <BookSearchContext.Provider
      value={{
        collection,
        loading
      }}
    >
      {children}
    </BookSearchContext.Provider>
  );
};
