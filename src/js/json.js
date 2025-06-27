export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Telefonía IP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Arquitectura VoIP.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolos de señalización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Calidad de servicio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Integración de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Comunicaciones unificadas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Servicios de mensajería',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Colaboración empresarial',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad electrónica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistemas CCTV',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Control de acceso',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistemas de alarma',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Monitoreo y gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Centros de control',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Analítica de video',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de incidentes',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF010_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Implementación de comunicaciones unificadas y sistemas de seguridad',
    Description:
      'Este componente aborda la implementación de comunicaciones unificadas y sistemas de seguridad y abarca el diseño y ejecución de sistemas VoIP, integración de comunicaciones empresariales, y soluciones de seguridad electrónica como CCTV y alarmas. Por otra parte, también detalla la importancia de centros de control y la gestión de incidentes, orientados a optimizar la seguridad y la colaboración en entornos corporativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
}
