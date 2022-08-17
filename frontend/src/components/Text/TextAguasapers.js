import styles from './Text.module.css';
//import axios from "axios";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const URI = 'http://localhost:8000/asistentesConcierto/'

const Text3 = () => {
  useState();
  const [textActive, setTextActive] = useState("true");
  const [formActive, setFormActive] = useState("true");
  const [answerActive, setAnswerActive] = useState("true");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [diaLlegada, setDiaLlegada] = useState("");
  const [horaLlegada, setHoraLlegada] = useState("");
  const [diaSalida, setDiaSalida] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  const [transporte, setTransporte] = useState("");
  const [dormir, setDormir] = useState("");
  const [comentario, setComentario] = useState("");
  const clickHandler = () => {
    window.scrollTo(0, 0);
    setTextActive(!textActive);
    setFormActive(!formActive);
  };
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    //await axios.post(URI, { nombre: nombre, email: email, direccion: direccion, transporte: transporte, dormir: dormir, comentario: comentario })
    // .then((res) => {
    emailjs.sendForm('service_63il4lq', 'template_4y39ngd', form.current, '-GPCqw9GpXKhx3P_v')
      .then((result) => {
        console.log(result.text);
        setFormActive(!formActive);
        setAnswerActive(!answerActive);
      }, (error) => {
        console.log(error.text);
      });
    // }).catch((error) => {
    //   console.log(error)
    // });
  };
  return (
    <section className={styles.sectionText}>
      <div className={`${styles.sectionText_text} ${textActive ? '' : styles.noActive}`}>
        <p>Querido Aguasaper, </p>
        <p>Si has llegado hasta aquí es porque un día Inés propuso una locura, la menda le siguió el juego y tú seguramente estabas como una cabra y ofrecistes tu mejor versión. Y así, tres años más tarde, volvemos a querer liarla como si la vida no fuera ya bastante complicada como para ponernos a organizar el mejor festival del mundo en los ratos libres. </p>
        <p>Pero si el primer año lo conseguimos con una pandemia, con luz en un 50% de la casa, sin agua caliente y con un hornillo y tres sartenes. Qué no seremos capaces de hacer ahora que tenemos ventanas, un paellero para 30 y cortinas como puertas. :)  </p>
        <p>La vida a veces es una puta mierda, por lo propio o lo ajeno. Y cuando no queda más que sobrevirir sin saber si vamos a ir a una guerra, si caerá un meteorito o si antes moriremos asados como pollos a 50º y sin lluvias, es bonito ver las fotos de los AguasapoFest y pensar que al menos esas carillas intentaron con mucho empeño crear un futuro mejor.</p>
        <p>Con el mayor de los cariños, tengo el honor de invitarte a hacer click y reservar una de la pocas plazas disponibles en NUESTRO maravilloso festival.</p>
        <p>Nos vemos muy pronto las caras con un vermut bien frio.</p>
        <div className={`${styles.sectionText_button}`}>
          <button type="button" className={styles.sectionText_button_contact} onClick={clickHandler}>{"Reservar plaza Aguasapo"}</button>
        </div >
      </div>
      <div className={`${styles.sectionForm} ${formActive ? '' : styles.Active}`} id={styles.sectionForm}>
        <div className={styles.sectionForm_form_texto}>
          <h1 className={styles.formAguasaperTitle}>ANTES DE NADA</h1>
          <p>* El nombre es obligatorio para saber quien eres y no llamar a Paco Lobatón.</p>
          <p>* El email es obligatorio para información confidencial.</p>
          <p>* La dirección es obligatoria porque es más que probable que recibas una CARTA MUY IMPORTANTE A TU NOMBRE (y sabemos que te gusta)</p>
          <p>* Los horarios de llegada y salida son la clave para poder organizar los talleres, los grupos de cocina... y de esa manera saber si podemos contar contigo en ese momento y que todo salga perfecto.</p>
          <p>* Es importante que detalléis cómo vais a llegar a este rincón del mundo. Si venís en avión, tren, coche, volando en un dragón... para así ir a por vosotros con un cartelito con vuestro nombre (por eso es importante el nombre en el punto anterior). Todo está unido :P</p>
          <p>* El tema cama nos está quitando el sueño :P Necesitamos saber: <br></br>PRIMERO - si vas a dormir en la casa (para hacerte hueco). <br></br>SEGUNDO - si traes colchón o tenemos que buscarte uno. <br></br>TERCERO - saber si tienes algún colchón de sobra que puedas traer (esto último es para la gente de por aquí)</p>
          <p>* Por último saber si tienes algo que confesar, compartir con el mundo, algún detalle relevante que debamos saber, si algún día vas a desaparecer... este es tu espacio. ¡Coge el micro y habla!</p>
        </div>
        <form ref={form} className={`${styles.sectionForm_form} ${styles.formAguasaper}`} onSubmit={sendEmail}>
          <div className={styles.sectionForm_form_name} >
            <label htmlFor='name'>Nombre *</label>
            <input
              type="text"
              id='name'
              name="name"
              placeholder='Nombre y apellidos'
              required
              onChange={(e) => {
                setNombre(e.target.value)
              }} />
          </div>
          <div className={styles.sectionForm_form_email}>
            <label htmlFor='email'>Email *</label>
            <input
              type='email'
              id='email'
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className={styles.sectionForm_form_direccion}>
            <label htmlFor='email'>Dirección *</label>
            <input
              type='text'
              id='direccion'
              name="direccion"
              required
              onChange={(e) => {
                setDireccion(e.target.value)
              }}
            />
          </div>
          <div className={styles.sectionForm_form_diaLlegada}>
            <label>Día *<br /><span>Llegada</span></label>
            <input
              type="date"
              id="diaLlegada"
              name="diaLlegada"
              required
              onChange={(e) => {
                setDiaLlegada(e.target.value)
              }}>
            </input>
          </div>
          <div className={styles.sectionForm_form_horaLlegada}>
            <label>Hora<br /><span>Llegada</span></label>
            <input
              type="time"
              id="horaLlegada"
              name="horaLlegada"
              required
              onChange={(e) => {
                setHoraLlegada(e.target.value)
              }}>
            </input>
          </div>
          <div className={styles.sectionForm_form_diaSalida}>
            <label>Día<br /><span>Salida</span></label>
            <input
              type="date"
              id="diaSalida"
              name="diaSalida"
              required
              onChange={(e) => {
                setDiaSalida(e.target.value)
              }}>
            </input>
          </div>
          <div className={styles.sectionForm_form_horaSalida}>
            <label>Hora<br /><span>Salida</span></label>
            <input
              type="time"
              id="horaSalida"
              name="horaSalida"
              required
              onChange={(e) => {
                setHoraSalida(e.target.value)
              }}>
            </input>
          </div>
          <div className={styles.sectionForm_form_transporte}>
            <label>¿Cómo llegas? *</label>
            <textarea
              id="transporte"
              cols="30"
              rows="6"
              name="transporte"
              onChange={(e) => {
                setTransporte(e.target.value)
              }} />
          </div>
          <div className={styles.sectionForm_form_dormir}>
            <label>¿Vas a dormir en el Aguasapo? ¿Traes colchón para contar ovejitas? *</label>
            <textarea
              id="dormir"
              cols="30"
              rows="6"
              name="dormir"
              required
              onChange={(e) => {
                setDormir(e.target.value)
              }} />
          </div>
          <div className={styles.sectionForm_form_comment}>
            <label>Información importante que debamos saber</label>
            <textarea
              id="comment"
              cols="30"
              rows="6"
              name="message"
              required
              onChange={(e) => {
                setComentario(e.target.value)
              }} />
          </div>


          <div className={styles.sectionForm_form_submit}>
            {/* <input
              type="submit"
              className="submit"
            value={"Reservar"} />*/}
            <input
              type="submit"
              className="submit"
              value={"Reservar plaza AGUASAPER"} />
          </div>
        </form>
      </div >
      <div className={`${styles.answer} ${answerActive ? '' : styles.Active}`}>
        <p className={styles.answerText}>Felicidades. Ya tienes tu plaza reservada en el Aguasapo. <br /><br /><span>En breve recibirás un correo de confimación.</span></p>
      </div>
    </section >
  );
}
export default Text3;