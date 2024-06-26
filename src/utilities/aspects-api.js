import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:3001/api/aspects';

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}