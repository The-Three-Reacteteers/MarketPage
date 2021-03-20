import React, { useEffect, useState } from "react";
import { responseParser, useAuthContext } from "./AuthProvider";
export const BookCollectionContext = React.createContext(null);

export const BookCollectionProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [collection, setCollection] = useState([]);
  const [collectionDir, setCollectionDir] = useState(null);
  const [loading, setLoading] = useState(false);
  const load = function () {
    setLoading(true);
    return fetch(`/api/collection`)
      .then((response) => response.json())
      .then((data) => {
        setCollection(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  const addToCollection = function ({
    key,
    title,
    edition_key: [edition],
    publisher: [publisher],
    cover_i,
    author_name: [author],
    isbn: [isbn],
  }) {
    setLoading(true);
    return fetch(`/api/collection`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key,
        title,
        edition,
        publisher,
        cover_i,
        author,
        isbn,
      }),
    })
      .then(responseParser)
      .then(() => load())
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  const removeCollection = function (id) {
    setLoading(true);
    return fetch(`/api/collection/${id}`, {
      method: "DELETE",
    })
      .then(responseParser)
      .then(() => load())
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (user !== undefined)   {
      if (user) load();
      else setCollection([])
    };
  }, [user]);
  useEffect(() => {
    if (Array.isArray(collection) && collection.length) {
      const isbn = {};
      const cover = {};
      const collectionDIR = {};
      collection.map((col) => {
        collectionDIR[col.key] = col;
        if (col.isbn) isbn[col.isbn] = col;
        if (col.cover_i) cover[col.cover_i] = col;
      });
      setCollectionDir({ ...collectionDIR, isbn, cover });
    } else {
      setCollectionDir(null);
    }
  }, [collection]);
  return (
    <BookCollectionContext.Provider
      value={{
        collection,
        collectionDir,
        loading,
        addToCollection,
        removeCollection,
      }}
    >
      {children}
    </BookCollectionContext.Provider>
  );
};
