import { api } from "./src/lib/axiosInstance";
export default async function Ping() {
 try {
    const response = await api.get("/ping");
    console.log(response.data.success);
 } catch (error) {
    console.log("this error is from ping.ts",error);
 }
}