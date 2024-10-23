import axios from "./axios";

export const getCasinosRequest = () => axios.get("/api/casinos", { withCredentials: true });

export const getCasinoRequest = (id) => axios.get(`/api/casinos/${id}`, { withCredentials: true });

export const createCasinoRequest = (FormData) => {
  return axios.post("/api/casinos", FormData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true, // Incluido aquí
  });
};

// Este método ahora recibe casinoId como primer parámetro y formData como segundo.
export const updateCasinoRequest = (casinoId, formData) => {
  return axios.put(`/api/casinos/${casinoId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true, // Incluido aquí
  });
};

export const deleteCasinoRequest = (id) => axios.delete(`/api/casinos/${id}`, { withCredentials: true });

export const deleteCasinoDocumentRequest = (casinoId, publicId, category) => {
  return axios.delete(`/api/casinos/${casinoId}/document`, {
    data: { publicId, category }, // Los datos que enviamos en la solicitud DELETE
    withCredentials: true, // Incluido aquí
  });
};
