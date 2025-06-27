<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/1.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div
            class="row justify-content-center align-items-center bg1 p-4 brad mb-4"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/2.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                El presente componente que trata sobre la implementación de
                comunicaciones unificadas y sistemas de seguridad abarca los
                fundamentos y aplicaciones de la tecnología de comunicación y
                los sistemas de seguridad en un entorno empresarial. Comienza
                con la telefonía IP, abordando los principios de
                <i>Voice Over</i> IP (VoIP), los protocolos de señalización y la
                calidad de servicio, elementos esenciales para facilitar
                llamadas de voz claras y fiables a través de redes digitales.
                Esta base tecnológica es vital para la comunicación efectiva y
                el soporte de operaciones a distancia.
              </p>
            </div>
          </div>
          <p>
            Asimismo, se exploran las comunicaciones unificadas y los sistemas
            de colaboración, que integran diversos medios de mensajería y
            trabajo colaborativo. Esta integración fomenta la eficiencia y
            conectividad dentro de las organizaciones, permitiendo una
            comunicación ágil y adaptada a las necesidades modernas de trabajo.
          </p>
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Adicionalmente, se examinan los dispositivos que permiten el
                intercambio de datos de manera inteligente y eficiente en la
                red, considerando no solo los componentes básicos, sino también
                aquellos que habilitan funcionalidades avanzadas, como la
                integración de sensores y controladores. Esta interconectividad
                resulta fundamental en el contexto del Internet de las Cosas
                (IoT), donde los dispositivos deben operar en conjunto para
                lograr una red funcional, autónoma y escalable, capaz de
                sostener múltiples usuarios y aplicaciones.
              </p>
            </div>
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5">
        En conjunto, este componente proporciona una visión integral de las
        tecnologías y estrategias necesarias para mantener un ambiente seguro y
        eficiente en cualquier infraestructura de comunicaciones empresariales,
        optimizando tanto la colaboración como la protección organizacional.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5 bgs p-4 brad">
          <figure>
            <img
              src="@/assets/curso/temas/sintesis.svg"
              alt="La imagen muestra la «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre la implementación de comunicaciones unificadas y sistemas de seguridad —como sus fundamentos, importación, técnicas, herramientas y prácticas— y algunos subtemas que los integran."
            />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
