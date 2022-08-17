import styles from './Text.module.css';
//import axios from "axios";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const URI = 'http://localhost:8000/asistentesConcierto/'

const Text2 = () => {
  useState();
  const [textActive, setTextActive] = useState("true");
  const [formActive, setFormActive] = useState("true");
  const [answerActive, setAnswerActive] = useState("true");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [entradasAdultos, setEntradasAdultos] = useState("");
  const [entradasPubertos, setEntradasPubertos] = useState("");
  const [entradasPeques, setEntradasPeques] = useState("");
  const [comentario, setComentario] = useState("");

  const clickHandler = () => {

    window.scrollTo(0, 300);

    setTextActive(!textActive);
    setFormActive(!formActive);
  };
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    //await axios.post(URI, { nombre: nombre, email: email, entradasAdultos: entradasAdultos, entradasPubertos: entradasPubertos, entradasPeques: entradasPeques, comentario: comentario })
    // .then((res) => {
    emailjs.sendForm('service_63il4lq', 'template_v7ba0vj', form.current, '-GPCqw9GpXKhx3P_v')
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
        <p>Si eres de esas personas que ama el cine y que siente cosquilleos de felicidad al pensar en un cine de verano, rodeado de gente y dispuesto a disfrutar de la magia de suspirar, aplaudir y moquear al unísono, es muy posible que estés en el lugar indicado. </p>
        <p>Esta iniciativa es una actividad privada que abrimos a un pequeño grupo de personas que se quieran unir a disfrutar con nosotrxs del encanto de ver una película (o serie) en un espacio rodeado de higueras, tomateras, limoneros y el anochecer sobre el campo. </p>
        <p>El espacio es un lugar 'Clandestino' y hasta 12 horas antes no te desvelaremos dónde es, pero estamos segurxs que si has llegado hasta aquí lo disfrutarás. Solo te diremos que está a 10km de Orihuela 'Alicante'. El resto, al igual que el visionado, es sorpresa y las sorpresas son lo mejor de la vida.</p>
        <p>Para venir se necesita reserva, porque se trata de una actividad privada, clandestina y pequeña. Cuidamos mucho el aforo, es por ello que sin reserva no se podrá acceder y una vez se agote el número reducido de invitaciones que tenemos disponibles no aceptaremos ningún tipo de soborno, por mucho que nos duela en el alma deciros eso de "Agotadas". </p>
        <p>La reserva conlleva un donativo de 5 euros y la película (o serie) no es muy recomendable para peques menores de 10 años. Este donativo se efectuará en persona el día del cine y con él se persigue hacer frente entre todxs a los gastos del evento. Por nuestra parte prometemos preparar palomitas con el mayor cariño del mundo e intentar sorprenderos para que sea una noche increible.</p>
        <p>Atentamente,</p>
        <p><em>El equipo clandestino de AguasapoFest</em></p>
        <div className={`${styles.sectionText_button}`}>
          <button type="button" className={styles.sectionText_button_contact} onClick={clickHandler}>{"Reservar Invitación - CINE"}</button>
        </div >
      </div>
      <div className={`${styles.sectionForm} ${formActive ? '' : styles.Active}`} id={styles.sectionForm}>
        <form ref={form} className={styles.sectionForm_form} onSubmit={sendEmail}>
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
          <div className={styles.sectionForm_form_entradasAdultos}>
            <label>Número adultos *</label>
            <input type="number" id="entradas"
              name="entradasAdultos"
              required
              onChange={(e) => {
                setEntradasAdultos(e.target.value)
              }}>
            </input>
          </div>
          <div className={styles.sectionForm_form_entradasPubertos}>
            <label>Pubert@s<br /><span>(12-16 años)</span></label>
            <input
              type="number"
              id="entradasPubertos"
              name="entradasPubertos"
              onChange={(e) => {
                setEntradasPubertos(e.target.value)
              }}>
            </input>
          </div>
          <div className={styles.sectionForm_form_entradasPeques}>
            <label>Peques<br /><span>(- 12 años)</span></label>
            <input
              type="number"
              id="entradasPeques"
              name="entradasPeques"
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
              required
              onChange={(e) => {
                setComentario(e.target.value)
              }} />
          </div>

          <div className={styles.sectionForm_form_texto}>
            <p>* El nombre es obligatorio para estar en lista</p>
            <p>* El email es obligatorio para recibir toda la información (incluida la ubicación)</p>
            <p>* Es importante que detalléis cómo os habeis enterado de la actividad. Al más puro detalle como en una novela de Agatha Christie... para que controlemos el aforo y la clandestinidad</p>
          </div>
          <div className={styles.sectionForm_form_submit}>
            {/* <input
              type="submit"
              className="submit"
            value={"Reservar"} />*/}
            <input
              type="submit"
              className="submit"
              value={"Reservar invitación - CINE"} />
          </div>
        </form>
      </div >
      <div className={`${styles.answer} ${answerActive ? '' : styles.Active}`}>
        <p className={styles.answerText}>Felicidades. Ya tienes tus invitaciones reservadas. <br /><br /><span>En breve recibirás un correo de confimación.</span></p>
      </div>
    </section >
  );
}
export default Text2;