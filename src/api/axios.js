import axios from "axios";

// Crea una instancia de Axios
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Usar la variable de entorno para la URL base
  withCredentials: true // Permitir que Axios envíe cookies con las solicitudes
});

// Interceptor para añadir el token en cada solicitud
instance.interceptors.request.use((config) => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('rw.authenticated='))
    ?.split('=')[1]; // Extrae el token de la cookie

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Añade el token a los headers
  }

  return config; // Devuelve la configuración modificada
}, (error) => {
  return Promise.reject(error); // Rechaza el error
});

export default instance;
