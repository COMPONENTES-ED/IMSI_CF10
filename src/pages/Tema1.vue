<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Telefonía IP</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La Telefonía IP utiliza redes de protocolo de Internet para
            gestionar comunicaciones de voz, video y datos, transformando la
            manera en que se llevan a cabo las interacciones telefónicas
            tradicionales. Este tipo de telefonía se basa en la tecnología VoIP
            (<i>Voice Over</i> IP), la cual permite transmitir la voz mediante
            paquetes de datos digitales en vez de señales analógicas, lo que
            optimiza costos y aumenta la flexibilidad de uso en redes ya
            existentes.
          </p>
          <div class="row justify-content-center bg3 p-4 brad mb-4">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/7.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Para operar de manera eficaz, la Telefonía IP depende de
                protocolos de señalización como SIP (<i
                  >Session Initiation Protocol</i
                >) y H.323, los cuales establecen y finalizan las conexiones
                entre dispositivos. Estos protocolos son primordiales para
                coordinar los elementos de la red, garantizando que las llamadas
                y los datos multimedia se envíen y reciban correctamente.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/8.png" alt="" />
        </div>
      </div>
      <p>
        La calidad de servicio (QoS) es una característica crítica en la
        Telefonía IP, ya que asegura la claridad de la comunicación, evitando
        interferencias y pérdida de datos en el proceso. Este control de calidad
        implica técnicas de priorización y gestión del ancho de banda que evitan
        retrasos en las transmisiones, lo cual es determinante para aplicaciones
        empresariales y de atención al cliente donde la fiabilidad es
        fundamental.
      </p>
      <Separador> </Separador>
      <div id="t_1_1" class="titulo-segundo color-acento-contenido">
        <h2>1.1 Arquitectura VoIP.</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/12.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center bg1 p-4 brad mb-4">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/10.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La arquitectura VoIP (<i>Voice Over</i> IP) permite transmitir
                voz y multimedia a través de redes de datos IP en lugar de redes
                de telefonía tradicional. La infraestructura VoIP está compuesta
                por varios elementos clave, como gateways de voz, servidores de
                señalización y redes de transporte IP. Estos componentes
                colaboran para convertir señales de voz en paquetes de datos
                digitales, transmitiéndolos de forma eficiente y económica.
              </p>
            </div>
          </div>
          <p>
            Un elemento indispensable en esta arquitectura es la red IP
            subyacente, que soporta una estructura escalable y adaptable. Esta
            arquitectura también permite la integración con sistemas telefónicos
            convencionales, facilitando el uso de tecnologías IP y tradicionales
            en un mismo entorno. Asimismo, el diseño de la arquitectura VoIP es
            flexible, permitiendo implementaciones en una variedad de entornos,
            desde pequeñas empresas hasta grandes organizaciones
            multinacionales.
          </p>
          <p>
            La VoIP se beneficia de protocolos específicos como SIP (<i
              >Session Initiation Protocol</i
            >) y H.323, que facilitan la conexión, configuración y finalización
            de llamadas. Estos protocolos son imprescindibles para mantener la
            calidad de servicio (QoS) y asegurar una experiencia de comunicación
            de alta calidad.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_2" class="titulo-segundo color-acento-contenido">
        <h2>1.2 Protocolos de señalización</h2>
      </div>
      <p>
        Estos <b>protocolos</b> son fundamentales en la transmisión de voz y
        datos en la Telefonía IP (VoIP), ya que permiten la configuración,
        modificación y finalización de llamadas. Entre los más relevantes
        destacan <i>Session Initiation Protocol</i> (SIP), H.323, y
        <em>Media Gateway Control Protocol </em>(MGCP). Cada uno de estos
        protocolos cumple funciones primordiales en la comunicación de datos en
        redes de telefonía IP, estableciendo la ruta que los datos deben seguir
        y la estructura de cada sesión, asegurando así una conexión fluida entre
        los dispositivos.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/14.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center bg2 p-4 brad mb-4">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/13.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                El <i>Session Initiation Protocol (SIP)</i> es ampliamente
                utilizado debido a su flexibilidad y eficiencia para iniciar y
                finalizar sesiones de comunicación. Este protocolo es preferido
                en aplicaciones de telefonía IP por su estructura y su capacidad
                de integración con otras tecnologías, facilitando la
                interoperabilidad entre diversos sistemas y dispositivos. SIP
                permite la conexión de múltiples dispositivos en una única
                llamada, soportando una variedad de dispositivos de
                comunicación, como teléfonos IP, aplicaciones de software y
                sistemas de mensajería.
              </p>
            </div>
          </div>
          <p>
            Por otro lado, el protocolo H.323 es otro estándar importante,
            especialmente en redes que combinan voz, video y datos en una sola
            transmisión. Aunque requiere mayor capacidad de procesamiento,
            ofrece un alto nivel de calidad de servicio y seguridad,
            especialmente en aplicaciones corporativas. La arquitectura de H.323
            es útil en escenarios de comunicaciones donde la confiabilidad y la
            seguridad son críticas, por lo que sigue siendo una opción relevante
            en ciertos contextos empresariales.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 1.</h5>
            <span>Protocolos de señalización</span>
          </div>
          <div class="tabla-a color-acento-botones text-center mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Protocolo de Señalización</th>
                  <th>Función Principal</th>
                  <th>Características Clave</th>
                  <th>Aplicaciones Comunes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fast-bold bgt1">
                    SIP (<i>Session Initiation Protocol</i>)
                  </td>
                  <td>
                    Establecer, modificar y finalizar sesiones de comunicación
                  </td>
                  <td>Facilita la interoperabilidad, extensibilidad</td>
                  <td>Comunicaciones VoIP, videoconferencias</td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">H.323</td>
                  <td>Estándar para multimedia sobre redes IP</td>
                  <td>Amplio soporte en videoconferencias y VoIP</td>
                  <td>Videoconferencias empresariales</td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">
                    MGCP (<i>Media Gateway Control Protocol</i>)
                  </td>
                  <td>Control de <i>Gateways</i> para llamadas</td>
                  <td>Permite interoperabilidad entre diferentes redes</td>
                  <td>Telefonía IP</td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">
                    SCCP (S<i>kinny Client Control Protocol</i>)
                  </td>
                  <td>Protocolo propietario de Cisco</td>
                  <td>Mayor integración con sistemas de Cisco</td>
                  <td>Redes VoIP de Cisco</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_3" class="titulo-segundo color-acento-contenido">
        <h2>1.3 Calidad de servicio</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            <b>La calidad de servicio (QoS, por sus siglas en inglés)</b> es un
            componente crítico en sistemas de comunicaciones unificadas,
            especialmente en la <b>Telefonía IP (VoIP)</b>, donde es fundamental
            garantizar que la transmisión de voz y datos se mantenga en un nivel
            de calidad óptimo para evitar interrupciones o pérdida de
            información. La QoS se encarga de definir las prioridades en el
            tráfico de red, permitiendo que la transmisión de voz tenga
            preferencia sobre otros tipos de datos en momentos de alta demanda.
            Esto se logra mediante técnicas como la gestión de ancho de banda,
            la priorización de paquetes y el control de congestión en la red.
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/15.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg3 p-4 brad h-100 j1">
            <p class="mb-0">
              Para implementar una calidad de servicio eficiente, las redes
              deben contar con sistemas de monitoreo y control que identifiquen
              y gestionen los tipos de tráfico, priorizando aquellos que
              demanden menor latencia y mayor consistencia, como es el caso de
              las llamadas de voz. De esta manera, los dispositivos y protocolos
              de señalización en la red, como RTP y SIP, colaboran para asignar
              el ancho de banda y los recursos necesarios para mantener la
              calidad de la llamada, incluso en condiciones de congestión.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/16.png" alt="" />
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg4 p-4 brad h-100 j1">
            <p class="mb-0">
              Los desafíos de la QoS se amplían cuando se integran servicios
              adicionales, como videollamadas y mensajería, dentro de una misma
              infraestructura. Para estos casos, las arquitecturas de red deben
              adaptarse para soportar distintos tipos de tráfico
              simultáneamente, asegurando que cada servicio reciba los recursos
              que necesita para operar con eficacia. Esta gestión cuidadosa es
              primordial para garantizar una experiencia de usuario consistente
              y confiable en entornos de colaboración empresarial y
              comunicaciones unificadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
