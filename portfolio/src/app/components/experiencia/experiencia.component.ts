import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Experiencia {
  puesto: string;
  fechaInicio: string;
  fechaFin: string;
  responsabilidades: string[];
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      puesto: 'Desarrollador Frontend',
      fechaInicio: 'Noviembre 2024',
      fechaFin: 'Diciembre 2024',
      responsabilidades: [
        'Realización de pruebas generales en Nubbix ERP.',
        'Creación de diálogos de lista y detalles con Angular.',
        'Uso de API Rest para tratamiento de datos.',
        'Uso de Postman.',
        'Uso de Cypress para tests.',
        'Uso de Azure DevOps para organización de sprint, tablero de tareas y uso de repositorios.'
      ]
    },
    {
      puesto: 'Técnico Informático CAU',
      fechaInicio: 'Octubre 2023',
      fechaFin: 'Abril 2024',
      responsabilidades: [
        'Trabajo realizado para Ibermática.',
        'Instalación y configuración de nuevos equipos informáticos, de impresión y videoconferencia para los juzgados de paz en ayuntamientos de la provincia.',
        'Configuración de Azure con cuenta profesional del Ministerio de Justicia.',
        'Configuración de red SARA para uso de INFOREG / DICIREG.',
        'Puesta a punto de los equipos.',
        'Resolución de incidencias in situ para el CAU del Ministerio de Justicia.'
      ]
    },
    {
      puesto: 'Técnico Informático',
      fechaInicio: 'Agosto 2022',
      fechaFin: 'Agosto 2023',
      responsabilidades: [
        'Digitalización del archivo',
        'Resolución de incidentes en equipos informáticos y equipos de impresión'
      ]
    },
    {
      puesto: 'Desarrollador Wordpress',
      fechaInicio: 'Octubre 2022',
      fechaFin: 'Noviembre 2022',
      responsabilidades: [
        'Creación de página web',
        'Desarrollo de la web y puesta en marcha en servidor IONOS',
        'Uso de plugins y herramientas para SEO',
        'Edición de la web con PHP, JS, CSS y HTML'
      ]
    },
    {
      puesto: 'Técnico Ciberseguridad',
      fechaInicio: 'Enero 2022',
      fechaFin: 'Febrero 2022',
      responsabilidades: [
        'Creación y puesta en marcha del proyecto de ciberseguridad',
        'Escáner de vulnerabilidades con Nessus',
        'Redacción de políticas de Seguridad',
        'Solución de vulnerabilidades en servidores y equipos',
        'Configuración del Firewall',
        'Auditoría interna y de la red',
        'Formación de los trabajadores en Seguridad'
      ]
    },
  ];
}
