import styles from './Text.module.css';
//import axios from "axios";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const URI = 'http://localhost:8000/asistentesConcierto/'

const Text = () => {
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
    emailjs.sendForm('service_63il4lq', 'template_ggbzb3p', form.current, '-GPCqw9GpXKhx3P_v')
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
        <h5 className={styles.agotadasTitulo}>INVITACIONES AGOTADAS</h5>
        <p className={styles.agotadasText}>Con muchísima alegría por lo rápido que ha pasado pero con tristeza de tener que decírtelo a ti, que seguro venías buscando una, te informamos que las invitaciones están agotadas. Si estás muy interesad@ te proponemos que te apuntes en la lista de espera por medio del botón 'RESERVAR INVITACIÓN - LISTA DE ESPERA' (situado más abajo). Si se obra un milagro navideño con alguna cancelación haremos de elf@s mágicos y nos pondremos rápidamente en contacto contigo. <br></br><br></br>Atentamente<br></br><br></br> El equipo clandestino de AgusapoFest </p>
        <p className={styles.agotadasLine}>--------------------------------------------------------------------------------------</p>
        <p>Si has llegado hasta aquí es porque seguramente te encante Pedro Pastor, o si aún no tienes el gusto es más que seguro que te encantará. Lo que sí es muy probable es que seas de esas personas que le gustan los saraos y que adores la cultura y todo lo que su mundo conlleva. Es por eso que estás leyendo estas líneas, porque alguien por arte de magia te hizo llegar esta página porque te conoce. </p>
        <p>Este concierto es un concierto privado que abrimos a un pequeño grupo de personas que se quieran unir a disfrutar con nosotrxs del encanto de escuchar musica en directo en un espacio rodeado de higueras, tomateras, limoneros y el anochecer sobre el campo. </p>
        <p>El espacio es un lugar 'Clandestino' y hasta 12 horas antes no te desvelaremos dónde es, pero estamos segurxs que si has llegado hasta aquí lo disfrutarás. Solo te diremos que está a 10km de Orihuela 'Alicante'. El resto es sorpresa y las sorpresas son lo mejor de la vida.</p>
        <p>Para venir al concierto se necesita reserva, porque se trata de un concierto privado, clandestino y pequeño. Cuidamos mucho el aforo, es por ello que sin reserva no se podrá acceder y una vez se agote el número reducido de invitaciones que tenemos disponibles no aceptaremos ningún tipo de soborno, por mucho que nos duela en el alma deciros eso de "Agotadas". </p>
        <p>La reserva conlleva un donativo de 20 euros adultos / 12 euros menores de 16 años / Gratis menores de 12 años. Este donativo se efectuará en persona el día del concierto y con él se persigue hacer frente entre todxs a los gastos del evento. Por nuestra parte prometemos preparar este concierto con el mayor cariño del mundo e intentar sorprenderos para que sea una noche increible.</p>
        <p>Atentamente,</p>
        <p><em>El equipo clandestino de AguasapoFest</em></p>
        <div className={`${styles.sectionText_button}`}>
          <button type="button" className={styles.sectionText_button_contact} onClick={clickHandler}>{"Reservar Invitación - LISTA DE ESPERA"}</button>
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
            <p>* Es importante que detalléis cómo os habeis enterado del concierto. Al más puro detalle como en una novela de Agatha Christie... para que controlemos el aforo y la clandestinidad</p>
          </div>
          <div className={styles.sectionForm_form_submit}>
            {/* <input
              type="submit"
              className="submit"
            value={"Reservar"} />*/}
            <input
              type="submit"
              className="submit"
              value={"Reservar invitación - LISTA DE ESPERA"} />
          </div>
        </form>
      </div >
      <div className={`${styles.answer} ${answerActive ? '' : styles.Active}`}>
        <p className={styles.answerText}>Felicidades. Ya tienes tus invitaciones reservadas. <br /><br /><span>En breve recibirás un correo de confimación.</span></p>
      </div>
    </section >
  );
}
export default Text;