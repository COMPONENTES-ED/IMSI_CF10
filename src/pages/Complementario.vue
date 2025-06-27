<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1.  Integración de sistemas ',
          referencia:
            'Cisco. (2011). <i>Cisco simplifica y reduce los costos de su solución de comunicaciones unificadas para las empresas medianas</i>. Blog Cisco Latinoamérica. Comunicaciones Unificadas',
          tipo: 'Blog Digital Web',
          link:
            'https://gblogs.cisco.com/la/cisco-simplifica-reduce-los-costos-de-su-solucion-de-comunicaciones-unificadas-para-las-empresas-medianas/?form=MG0AV3',
        },
        {
          tema: '2. Monitoreo y gestión',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 04). <i>Monitoreo de seguridad web.</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=VusaSKjpYLg',
        },
        {
          tema: '3. Seguridad electrónica',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022, marzo 11). <i>Introducción a la Ciberseguridad, sus fundamentos y normativa.</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=3rqfPRqnKIM',
        },
        {
          tema: '4. Seguridad electrónica',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, febrero 01). <i>Metodología y estrategias de la ciberseguridad</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Dc7PGh5Aiss',
        },
        {
          tema: '5. Gestión de incidentes',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, diciembre 01). <i>Monitoreo y respuesta de incidentes de seguridad digital</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Gwu7EATxkZ0',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
