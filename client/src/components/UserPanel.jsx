// TO DO
import React from 'react'
import styled from 'styled-components'
//import getRoutes from '../hooks/getRoutes'

const Layout = styled.div`
  position: relative;
  top: 9rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserPanel = () => {
  //const [routes, addRoutes] = getRoutes('/api/routes')
  return (
    <Layout>user panel</Layout>
  )
}


export default UserPanel
