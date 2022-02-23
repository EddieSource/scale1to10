import { Bed } from "@mui/icons-material";

export const imageData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    id: 1,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    id: 2,
    ratings: 2,
    content: "nice kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    id: 3,
    ratings: 4.5,
    content: "nice sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    id: 4,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    id: 5,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    id: 6,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    id: 7,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    id: 8,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    id: 9,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    id: 10,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    id: 11,
    ratings: 4.5,
    content: "nice Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    id: 12,
    ratings: 4.5,
    content: "nice Bed",
  },
];

export const getImageData = () => {
  return imageData;
};

export const getStoryData = ({ storyId }) => {
  return imageData.filter((story) => story.id == storyId);
};
