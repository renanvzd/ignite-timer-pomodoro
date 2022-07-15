import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/* Outlet eh um recurso do React DOM, que representa um espaco onde deve ser inserido o conteudo */}
    </LayoutContainer>
  )
}
