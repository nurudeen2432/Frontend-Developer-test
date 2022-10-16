import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Arts from "./Arts";
import axios from "axios";

const Search = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?Limits=10`
      );
      const _images = (await res.json()).data;
      setImages(
        _images.map((_image) => ({
          title: _image.title,
          url: `https://www.artic.edu/iiif/2/${_image.image_id}/full/843,/0/default.jpg`,
          author: _image.author,
          id: _image.id,
          publication: _image.artist_display,
        }))
      );
      console.log(_images);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchImages();
  }, []);
  console.log(search);

  return (
    <div className="search">
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={handleSearch}
          placeholder="search ..."
        />
      </form>
      <div className="Arts">
        {images
          .filter((image) => {
            if (search === "") {
              return image;
            } else if (
              image.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return image;
            }
          })
          .map((image, id) => (
            <Arts image={image} key={id} />
          ))}
      </div>
    </div>
  );
};

export default Search;
