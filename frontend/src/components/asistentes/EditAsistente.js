import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './form.module.css';


//const URI = 'https://aguasapo.es/asistentesConcierto/'
const URI = 'http://localhost:8000/concierto/'
const CompEditBlog = () => {
  const [grupo, setGrupo] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [entradasAdultos, setEntradasAdultos] = useState("");
  const [entradasPubertos, setEntradasPubertos] = useState("");
  const [entradasPeques, setEntradasPeques] = useState("");
  const [comentario, setComentario] = useState("");
  const [pago, setPago] = useState("");
  const [pagoMetodo, setPagoMetodo] = useState("");
  const [pagoPersona, setPagoPersona] = useState('');
  const [asistencia, setAsistencia] = useState(false);

  const [desplegarPagoBox, setDesplegarPagoBox] = useState(true);


  const navigate = useNavigate()
  const { id } = useParams()



  //procedimiento para actualizar


  useEffect(() => {
    getAsistenteById()

  }, [])

  const getAsistenteById = async () => {
    const res = await axios.get(URI + id)
    res.data.asistencia === "1" ? setAsistencia(res.data.asistencia) :
      setAsistencia("");
    setGrupo(res.data.grupo)
    setNombre(res.data.nombre)
    setEmail(res.data.email)
    setEntradasAdultos(res.data.entradasAdultos)
    setEntradasPubertos(res.data.entradasPubertos)
    setEntradasPeques(res.data.entradasPeques)
    setComentario(res.data.comentario)
    setPago(res.data.pago)
    setPagoMetodo(res.data.pagoMetodo)
    setPagoPersona(res.data.pagoPersona)


    if ((res.data.grupo === 'Aguasaper') || (res.data.grupo === 'Gratis')) {
      setDesplegarPagoBox(!desplegarPagoBox);
      setPago("")
      setPagoMetodo("")
      setPagoPersona("")
    }
  }
  const desplieguePago = (tipo) => {
    tipo === "Aguasaper" ? setDesplegarPagoBox(false) : tipo === "Gratis" ? setDesplegarPagoBox(false) : setDesplegarPagoBox(true);
  };
  const changeAsistencia = ({ target: { checked } }) => {
    setAsistencia(checked);
  };
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      grupo: grupo, nombre: nombre, email: email, entradasAdultos: entradasAdultos, entradasPubertos: entradasPubertos, entradasPeques: entradasPeques, comentario: comentario, pago: pago, pagoMetodo: pagoMetodo, pagoPersona: pagoPersona, asistencia: asistencia
    })
    navigate('/lista')
  }
  return (
    <div>
      <h3>Editar Asistente</h3>
      <form onSubmit={update} className={styles.formLista}>
        <div className={styles.asistenciaBox}>
          <div>
            <label className='form-label'>¿Ha llegado?</label>
            <input
              type="checkbox"
              checked={asistencia}
              onChange={changeAsistencia} />
          </div>
          <div className={`${styles.pagoBox} ${desplegarPagoBox ? 'Active' : 'noActive'}`}>
            <div>
              <label className='form-label'>Pago</label>
              <select value={pago} onChange={(e) => setPago(e.target.value)}>
                <option value="" selected></option>
                <option value="Pagado">Pagado</option>
                <option value="Aguasaper">Aguasaper</option>
                <option value="Gratis" >Gratis</option>
              </select>
            </div>
            <div>
              <label className='form-label'>Método de pago</label>
              <select value={pagoMetodo} onChange={(e) => setPagoMetodo(e.target.value)} >
                <option value=""></option>
                <option value="Bizum">Bizum</option>
                <option value="Metalico" selected>Metálico</option>
              </select>
            </div>
            <div>
              <label className='form-label'>Persona pago</label>
              <select value={pagoPersona} onChange={(e) => setPagoPersona(e.target.value)} >
                <option value=""></option>
                <option value="Laura">Laura</option>
                <option value="Hermanito" selected>Hermanito</option>
                <option value="Espe">Espe</option>
                <option value="Natalia">Natalia</option>
                <option value="Taquilla">Taquilla</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.personaBox}>
          <div>
            <label className='form-label'>Grupo</label>
            <select value={grupo} onChange={(e) => { setGrupo(e.target.value); desplieguePago(e.target.value) }}  >
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
            <label className="form-label">Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Email</label>
            <textarea
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label>Número adultos *</label>
            <input
              type="number"
              name="entradasAdultos"
              value={entradasAdultos}
              required
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
              name="message"
              value={comentario}
              onChange={(e) => {
                setComentario(e.target.value)
              }} />

          </div>
        </div>
        <button type="submit" className={styles.buttonAceptar}>Actualizar</button>
      </form >
    </div >
  )

}

export default CompEditBlog