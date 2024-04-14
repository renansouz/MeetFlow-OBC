export const randomPicture = () => {
  const num = Math.floor(Math.random() * 99);
  return `https://randomuser.me/api/portraits/men/${num}.jpg`;
};
