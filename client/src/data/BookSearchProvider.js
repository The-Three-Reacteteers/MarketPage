import React, { useEffect, useState } from "react";
import { useAuthContext } from "./AuthProvider";
export const BookSearchContext = React.createContext(null);
export const BookSearchProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const search = function ({ author, title, isbn }) {
    if (!(author || title || isbn))
      return Promise.reject("Author, Title or ISBN must be provided");
    const query = [
      title && `title=${title}`,
      author && `author=${author}`,
      isbn && `isbn=${isbn}`,
      `type=book`,
    ]
      .filter((q) => q)
      .join("&");
    setLoading(true);
    return fetch(`https://openlibrary.org/search.json?${query}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
        return data;
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    setBooks(null);
  }, [user]);
  return (
    <BookSearchContext.Provider
      value={{
        books,
        loading,
        search,
      }}
    >
      {children}
    </BookSearchContext.Provider>
  );
};