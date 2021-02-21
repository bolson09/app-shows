# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Frontend developer challenge

## Objetivo

Desarrollar una aplicación que liste los shows mas populares, los mejor valorados y lo que más se esta viendo ahora.
Para esto se va a consumir el api de [developers.themoviedb.org](https://developers.themoviedb.org/) con las API key proporcionadas. Si requieres mas control sobre la cuenta puedes registrarte en la plataforma.

Los campos a mostrar son:

- Nombre
- Poster
- Puntuación o valoración de los usuarios

Al dar click en un show se despliega el detalle del mismo y este debe incluir:
- Descripción
- Género
- Duración

Las listas de shows deben poder ordenarse alfabéticamente y por puntuación de usuario

Los shows deben poder marcarse como "favoritos" y persistirlo para que al cambiar de vista o al recargar la pestaña no se pierda ese dato.

## Requisitos

- Debe estar hecha con React.
- Manejo de rutas (`/show/<ID>` carga el detalle del show).
- Debe ser _Mobile first_.
- Debe subirse a un repositorio en Github.
- Debes montar tu prueba en un servidor en la nube para ver el funcionamiento (hay muchas opciones gratuitas como Heroku, Firebase, GCP, etc).
- **No** debe usar jQuery.
- **No** debe usar Bootstrap.

## Puntos a evaluar
- Organización, diseño y estructuración del código.
- Uso del API de un tercero.
- Manejo del state.
- Git workflow.
- Estructura del DOM.
- Estética y diseño de UI.
- Performance.

## Opcional/Bonus
- Mientras mas pruebas añadadas, mejor.
- Uso de Redux como manejador de estados.
- Atomic Design.
- Implementación de Server Side Rendering.
- Lazy loading.
- Campos extra que añada valor al detalle del show.
- Comentarios en el código.
- Accesibilidad (WAI-ARIA).
- Efectos o animaciones.
