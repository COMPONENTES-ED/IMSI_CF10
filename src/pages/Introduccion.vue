<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/4.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La implementación de comunicaciones unificadas y sistemas de
            seguridad representa un pilar fundamental en la gestión de
            infraestructura empresarial moderna, donde la conectividad y la
            protección de la información son esenciales para garantizar
            operaciones fluidas y seguras. Este componente formativo profundiza
            en las tecnologías y estrategias necesarias para integrar redes de
            comunicación confiables y sistemas de seguridad efectivos en
            distintos entornos.
          </p>
          <div class="row justify-content-center bg1 p-4 brad mb-4">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/5.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                El contenido inicia con un análisis de la telefonía IP,
                abordando los conceptos de <i>Voice Over</i> IP (VoIP), los
                protocolos de señalización y los criterios de calidad de
                servicio que permiten comunicaciones de voz de alta fidelidad a
                través de redes IP. A continuación, se estudian las
                comunicaciones unificadas, que integran diversos sistemas de
                mensajería y colaboración para mejorar la eficiencia operativa
                en las organizaciones, promoviendo un ambiente de trabajo más
                conectado y productivo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-end mb-4">
        <div class="col pt-lg-0 pt-md-4">
          <p>
            El módulo también examina aspectos de seguridad electrónica, tales
            como los sistemas de CCTV, control de acceso y alarmas, que
            proporcionan medidas de protección robustas y eficaces en tiempo
            real. Estos sistemas contribuyen a prevenir incidentes y a responder
            de manera oportuna a amenazas de seguridad.
          </p>
          <div class="bg2 p-4 j1">
            <p class="mb-0">
              Para finalizar, se exploran los centros de control y la gestión de
              incidentes, apoyados por herramientas de analítica de video. Estos
              elementos permiten una supervisión continua de la infraestructura
              y una capacidad de respuesta ante emergencias, asegurando así la
              continuidad operativa y la seguridad de los activos empresariales.
            </p>
          </div>
        </div>
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/6.png" alt="" />
        </div>
      </div>
      <h5 class="mb-4 text-center bg1 p-3">
        ¡Bienvenido al mundo de la implementación de comunicaciones unificadas y
        sistemas de seguridad!
      </h5>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GDCz6IX7ktc?si=zQ1jNI4gbds6MHP3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </div>
            <figcaption>
              Video. Implementación de comunicaciones unificadas y sistemas de
              seguridad
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
