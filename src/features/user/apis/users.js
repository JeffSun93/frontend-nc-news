import axios from "axios";

export const getUsers = async () => {
  const { data } = await axios.get("/api/users");
  return data.users;
};

export const getUserByUsername = async (username) => {
  const { data } = await axios.get(`/api/users/${username}`);
  return data.user;
};
