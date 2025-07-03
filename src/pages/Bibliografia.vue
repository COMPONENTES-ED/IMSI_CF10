<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Bosch <em>Security and Safety Systems.</em> (s.f.).<i> Documentación técnica de Video Analytics</i>.  ',
        link:
          'https://www.boschsecurity.com/xl/es/soluciones/sistemas-de-video/video-analytics/documentacion-tecnica-de-video-analytics/',
      },
      {
        referencia:
          'Chao, H. C., & Lin, J. (2019). <i>Quality of Service in VoIP and Unified Communications. Journal of Communications, 43</i>(4), 257-266.  ',
        link:
          'https://www.fortinet.com/resources/cyberglossary/qos-quality-of-service',
      },
      {
        referencia:
          '<em>Eagle Eye Networks.</em> (2021). <i>GUÍA DE BUENAS PRÁCTICAS Manual de Videoseguridad</i>.  ',
        link:
          'https://www.een.com/wp-content/uploads/2021/05/Video-Security-Primer-20210519_ES_compressed.pdf',
      },
      {
        referencia:
          'García, M., & Fernández, L. (2018). <i>Tecnologías de comunicaciones unificadas en entornos empresariales</i>. Editorial Reverte.  ',
        link:
          'https://alphaenginyeria.com/la-importancia-de-las-comunicaciones-unificadas-en-el-entorno-empresarial',
      },
      {
        referencia:
          'Kumar, R., & Rodrigues, J. J. P. C. (2010).<i> Voice over IP Security: Vulnerabilities, Threats, and Countermeasures. In Security for Telecommunications Networks</i>. Springer, 125-151.',
      },
      {
        referencia:
          'Martínez, C., & Pérez, L. (2020). <i>Centros de control y operaciones en sistemas de seguridad avanzada</i>. Universidad de Alcalá.  Repositorio Institucional de la Universidad de Alcalá',
      },
      {
        referencia:
          'Microsoft. (2023). <i>Messaging Services in Unified Communication Systems</i>.  ',
        link:
          'https://learn.microsoft.com/en-us/microsoftteams/teams-security-guide',
      },
      {
        referencia:
          'Nolasco-Mamani, M. A., Espinoza, S. A., & Choque-Salcedo, R. (2023). <i>Innovación y Transformación Digital en el Empresa. Revista de Innovación Empresarial</i>, 10(2), 123-145.  ',
        link:
          'https://www.researchgate.net/publication/376210760_Innovacion_y_Transformacion_Digital_en_el_Empresa',
      },
      {
        referencia:
          'Organización Internacional de Normalización (ISO). (2013). <i>ISO/IEC 27001:2013: Tecnología de la información - Técnicas de seguridad - Sistemas de gestión de seguridad de la información - Requisitos</i>.',
      },
      {
        referencia:
          'Reinhold, S., & Peterson, L. (2020). <i>Signaling Protocols in VoIP Communication Systems. Journal of Digital Communication Systems, 47(3), 134-150</i>.  ',
        link:
          'https://www.researchgate.net/publication/221034718_Patterns_for_VoIP_Signaling_Protocol_Architectures',
      },
      {
        referencia:
          'Sánchez, D. (2021). <i>Analítica de video en la seguridad urbana: Implementación y resultados. Revista Científica de Tecnología y Seguridad Urbana</i>.  ',
        link:
          'https://innovacionindustrial.net/ciudades-inteligentes/como-analitica-video-transformando-seguridad-ciudades-inteligentes/',
      },
      {
        referencia:
          'Securitas España. (s.f.). <i>Analítica de vídeo: lo que el ojo no ve.</i> ',
        link: 'https://www.securitas.es/blog/analitica-de-video/',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
