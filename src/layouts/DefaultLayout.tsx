import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* Outlet eh um recurso do React DOM, que representa um espaco onde deve ser inserido o conteudo */}
    </div>
  )
}
