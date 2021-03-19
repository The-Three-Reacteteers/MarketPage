import React, { useEffect, useState } from "react";
import { responseParser, useAuthContext } from "./AuthProvider";
export const BookWishlistContext = React.createContext(null);

export const BookWishlistProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [wishlist, setWishlist] = useState([]);
  const [wishlistDir, setWishlistDir] = useState(null);
  const [loading, setLoading] = useState(false);
  const load = function () {
    setLoading(true);
    return fetch(`/api/wishlist`)
      .then((response) => response.json())
      .then((data) => {
        setWishlist(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  const addToWishlist = function ({
    key,
    title,
    edition_key: [edition],
    publisher: [publisher],
    cover_i,
    author_name: [author],
    isbn: [isbn],
  }) {
    setLoading(true);
    return fetch(`/api/wishlist`, {
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
  const removeWishlist = function (id) {
    setLoading(true);
    return fetch(`/api/wishlist/${id}`, {
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
    load();
  }, [user]);
  useEffect(() => {
    if (Array.isArray(wishlist) && wishlist.length) {
      const isbn = {};
      const cover = {};
      const wishlistDIR = {};
      wishlist.map((col) => {
        wishlistDIR[col.key] = col;
        if (col.isbn) isbn[col.isbn] = col;
        if (col.cover_i) cover[col.cover_i] = col;
      });
      setWishlistDir({ ...wishlistDIR, isbn, cover });
    } else {
      setWishlistDir(null);
    }
  }, [wishlist]);
  return (
    <BookWishlistContext.Provider
      value={{
        wishlist,
        wishlistDir,
        loading,
        addToWishlist,
        removeWishlist,
      }}
    >
      {children}
    </BookWishlistContext.Provider>
  );
};
