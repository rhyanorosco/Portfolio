import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ProjectMarysAngel from './pages/ProjectMarysAngel.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/marys-angel" element={<ProjectMarysAngel />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
