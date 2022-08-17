import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './form.module.css';
const URI = 'https://aguasapo.es/asistentesConcierto/'
//const URI = 'http://localhost:8000/concierto/'

const AddAsistente = () => {
  const [grupo, setGrupo] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [entradasAdultos, setEntradasAdultos] = useState("");
  const [entradasPubertos, setEntradasPubertos] = useState("");
  const [entradasPeques, setEntradasPeques] = useState("");
  const [comentario, setComentario] = useState("");
  const navigate = useNavigate()

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, { grupo: grupo, nombre: nombre, email: email, entradasAdultos: entradasAdultos, entradasPubertos: entradasPubertos, entradasPeques: entradasPeques, comentario: comentario })
    navigate('/lista')
  }

  return (
    <div>
      <h3>Añadir Asistente</h3>
      <form onSubmit={store} className={styles.formLista}>
        <div className={styles.personaBox}>
          <div>
            <label className='form-label'>Grupo</label>
            <select value={grupo} onChange={(e) => setGrupo(e.target.value)} >
              <option value=""></option>
              <option value="Aguasaper">Aguasaper</option>
              <option value="Amaia">Amaia</option>
              <option value="Ana López">Ana López</option>
              <option value="Años anteriores">Años anteriores</option>
              <option value="Croquetas">Croquetas</option>
              <option value="Espe">Espe</option>
              <option value="Gratis">Gratis</option>
              <option value="Hermanito" selected>Hermanito</option>
              <option value="Espias">Espias</option>
              <option value="Laura">Laura</option>
              <option value="Mamá">Mamá</option>
              <option value="Naiara">Naiara</option>
              <option value="Natalia">Natalia</option>
              <option value="Pedro Pastor">Pedro Pastor</option>
              <option value="Sarai">Sarai</option>
              <option value="Teralco">Teralco</option>
              <option value="Txabi">Txabi</option>
              <option value="Vero">Vero</option>
            </select>
          </div>
          <div>
            <label className='form-label'>Nombre</label>
            <input
              value={nombre}
              type="text"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label'>Email</label>
            <input
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Adultos *</label>
            <input
              type="number"
              name="entradasAdultos"
              value={entradasAdultos}
              onChange={(e) => {
                setEntradasAdultos(e.target.value)
              }}>
            </input>
          </div>
          <div>
            <label>Pubert@s<br /><span>(12-16 años)</span></label>

            <input
              type="number"
              id="entradasPubertos"
              name="entradasPubertos"
              value={entradasPubertos}
              onChange={(e) => {
                setEntradasPubertos(e.target.value)
              }}>
            </input>
          </div>
          <div>
            <label>Peques<br /><span>(- 12 años)</span></label>

            <input
              type="number"
              id="entradasPeques"
              name="entradasPeques"
              value={entradasPeques}
              onChange={(e) => {
                setEntradasPeques(e.target.value)
              }}>
            </input>
          </div>
          <div className={styles.sectionForm_form_comment}>
            <label>¿Cómo te has enterado del concierto? *</label>

            <textarea
              id="comment"
              cols="30"
              rows="6"
              name="comment"
              value={comentario}
              placeholder=''
              onChange={(e) => {
                setComentario(e.target.value)
              }} />

          </div>
        </div>
        <button type='submit' className={styles.buttonAceptar}>Añadir</button>
      </form >
    </div >
  )
}

export default AddAsistente