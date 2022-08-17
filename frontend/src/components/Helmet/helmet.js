import Helmet from "react-helmet";

function Seo() {
  const title = "AguasapoFest - Concierto Pedro Pastor y Los Locos Descalzos"
  const description = "Concierto clandestino el próximo jueves 25 de agosto. Reserva tu entrada."

  return (
    <Helmet htmlAttributes>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content="AgusapoFest" />
      <meta name="copyright" content="AgusapoFest" />
      <meta name="robots" content="index" />
      <meta http-equiv="cache-control" content="no-cache" />
      <title>{title}</title>
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="{title}" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://aguasapo.es" />
      <meta property="og:site_name" content="AguasapoFest" />
      <meta property="og:image" content="https://aguasapo.es/img/pedroLogo.jpg" />
      <meta property="og:image:secure_url" content="https://aguasapo.es/img/pedroLogo.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="https://aguasapo.es/img/pedroLogo.jpg" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content="{title}" />
      <meta name="twitter:image" content="https://aguasapo.es/img/pedroLogo.jpg" />
      <meta property="og:image" content="https://aguasapo.es/img/pedroLogo.jpg" />
      <meta property="og:image:secure_url" content="https://aguasapo.es/img/pedroLogo.jpg" />
      <meta property="og:image:type" content="image/jpg" /><meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  );
}
export default Seo;