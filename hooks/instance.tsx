import axios from "axios";
import { api } from "./getEnv";


export const instance = () => axios.create({baseURL:api})