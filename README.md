# Coexist - Sitio Web de la Banda

Este es un sitio web estático para la banda Coexist, implementado como una Single Page Application (SPA) utilizando únicamente Vanilla JavaScript, HTML5 y CSS3.

## Características

- SPA con navegación sin recarga de página
- Reproductor de Spotify integrado y persistente
- Diseño responsivo
- Interfaz moderna y minimalista
- Integración con redes sociales

## Requisitos

- Servidor web local (por ejemplo, Live Server para VS Code)
- Navegador web moderno con soporte para ES6+
- Conexión a internet (para la API de Spotify y Font Awesome)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/coexist-web.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd coexist-web
   ```

3. Si estás usando Visual Studio Code, instala la extensión "Live Server"

4. Haz clic derecho en el archivo `index.html` y selecciona "Open with Live Server"

## Estructura del Proyecto

```
coexist-web/
├── index.html              # Archivo HTML principal
├── css/
│   └── styles.css         # Estilos principales
├── js/
│   └── app.js            # Lógica principal de la aplicación
├── images/               # Directorio para imágenes
└── README.md            # Este archivo
```

## Desarrollo

Para desarrollar localmente:

1. Asegúrate de tener un servidor web local ejecutándose
2. Los cambios en los archivos se reflejarán automáticamente al recargar el navegador
3. Para modificar el contenido, edita las funciones de vista en `app.js`
4. Para cambiar estilos, modifica `styles.css`

## Personalización

- Modifica las URIs de Spotify en `app.js` para cambiar la música
- Actualiza los enlaces de redes sociales en `index.html`
- Agrega tus propias imágenes en el directorio `images/`

## Licencia

MIT 