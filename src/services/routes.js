import axiosLogged from '../axiosConfig/axiosLogged'
const url = '/routes'

/**
 * save function
 */
const saveRoute = async route => {
  const response = await axiosLogged.post(`${url}/save`, route)
  return response.data
}

const getUserRoutes = async () => {
  const response = await axiosLogged.get(url)
  return response.data
}

const updateRoute = async route => {
  const response = await axiosLogged.put(`${url}/${route.id}`, route)
  return response.data
}

const deleteRoute = async id => {
  const response = await axiosLogged.delete(`${url}/${id}`)
  return response
}

export default { saveRoute, getUserRoutes, updateRoute, deleteRoute }
