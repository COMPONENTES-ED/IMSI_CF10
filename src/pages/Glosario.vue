<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Analítica de video',
          significado:
            'Proceso de análisis de imágenes de video para detectar y comprender patrones o eventos específicos en tiempo real o diferido.',
        },
        {
          termino: 'Arquitectura VoIP',
          significado:
            'Estructura tecnológica que permite transmitir comunicaciones de voz a través de internet utilizando el protocolo IP, optimizando costos y recursos.',
        },
        {
          termino: 'Calidad de servicio (QoS)',
          significado:
            'Conjunto de técnicas y parámetros que garantizan el rendimiento adecuado de una red para la transmisión de datos críticos, como voz y video.',
        },
        {
          termino: 'Centros de control',
          significado:
            'Instalaciones especializadas donde se monitorean y gestionan sistemas de seguridad y comunicaciones en tiempo real.',
        },
        {
          termino: 'Colaboración empresarial',
          significado:
            'Estrategias y herramientas que facilitan la comunicación y cooperación entre empleados, equipos y organizaciones para mejorar la productividad.',
        },
        {
          termino: 'Comunicaciones unificadas',
          significado:
            'Integración de múltiples herramientas de comunicación (mensajería, videollamadas, email, etc.) en una plataforma única para mejorar la eficiencia.',
        },
        {
          termino: 'Control de acceso',
          significado:
            'Mecanismos y tecnologías que regulan quién puede entrar o salir de un área física o acceder a información digital, basándose en permisos y autenticaciones.',
        },
        {
          termino: 'CCTV (Circuito Cerrado de Televisión)',
          significado:
            'Sistema de cámaras de video instaladas para la vigilancia y monitoreo de espacios específicos, utilizado en seguridad electrónica.',
        },
        {
          termino: 'Documentación',
          significado:
            'Proceso de registro y organización de información relacionada con sistemas de seguridad y comunicaciones para referencia futura.',
        },
        {
          termino: 'Gestión de incidentes',
          significado:
            'Metodología de identificación, evaluación y resolución de incidentes de seguridad para minimizar riesgos y restablecer el servicio.',
        },
        {
          termino: 'Integración de sistemas',
          significado:
            'Proceso de conectar y unificar diferentes sistemas de comunicación para que funcionen de manera coordinada y eficiente.',
        },
        {
          termino: 'Mensajería',
          significado:
            'Servicio que permite el envío y recepción de mensajes en tiempo real, facilitando la comunicación rápida y efectiva en entornos corporativos.',
        },
        {
          termino: 'Monitoreo',
          significado:
            'Vigilancia constante de sistemas y redes para asegurar su correcto funcionamiento y prevenir o detectar problemas de seguridad.',
        },
        {
          termino: 'Protocolo de señalización',
          significado:
            'Normas que regulan el establecimiento, mantenimiento y finalización de conexiones en sistemas de comunicación, como SIP o H.323 en VoIP.',
        },
        {
          termino: 'Redes IP',
          significado:
            'Redes basadas en el Protocolo de Internet (IP), que permiten la transmisión de datos de manera eficiente y son la base para servicios como VoIP',
        },
        {
          termino: 'Seguridad electrónica',
          significado:
            'Conjunto de tecnologías y métodos utilizados para proteger sistemas e infraestructuras mediante equipos electrónicos como cámaras y sensores.',
        },
        {
          termino: 'Servicios de mensajería',
          significado:
            'Herramientas digitales que permiten el envío de mensajes entre usuarios de manera instantánea, contribuyendo a la comunicación en tiempo real.',
        },
        {
          termino: 'Sistemas de alarma',
          significado:
            'Dispositivos y sensores que detectan eventos no deseados, como intrusiones, y alertan a los responsables de seguridad.',
        },
        {
          termino: 'Telefonía IP',
          significado:
            'Tecnología que permite realizar llamadas de voz a través de redes IP, reduciendo costos y mejorando la flexibilidad en la comunicación.',
        },
        {
          termino: 'VoIP (<i>Voice over</i> IP)',
          significado:
            'Tecnología que permite la transmisión de voz sobre internet en lugar de líneas telefónicas convencionales, facilitando la telefonía IP.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
