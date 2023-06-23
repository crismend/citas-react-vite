
import { useEffect, useState } from "react"
import FormPaciente from "./components/FormPaciente"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

  

  // useEffect(() => {
  //   const obteenerLs = () => {
  //     const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLs)
  //     console.log(pacientesLs)
  //   }
  //   obteenerLs();
  // }, [])
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !==id)
    setPacientes(pacientesActualizados)
  }
   
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <FormPaciente
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App


