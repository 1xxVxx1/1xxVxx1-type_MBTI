import axios from "./axios";

export async function getSurveys () {
  const res = await axios.get("/");
  const { results } = res.data;
  return results;
}