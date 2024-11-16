# Prueba Técnica / Technical Test

[English](#english) | [Español](#español)

## English
This project is an API that allows you to obtain weather information using the OpenWeather API. The API provides two main routes: one to get the weather by city and another to get the weather by coordinates.

### Requirements

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rinzldev/Prueba-Tecnica.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Prueba-Tecnica
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Create a `.env` file in the root of the project and add your OpenWeather API key:
    ```env
    OPENWEATHER_API_KEY=your_api_key
    ```

### Execution

To start the server, run the following command:
```sh
npm start
```
**Method:** `POST`  
**Routes:** 
`/weather`
`/coordinates`
## Español

Este proyecto es una API que permite obtener información meteorológica utilizando la API de OpenWeather. La API proporciona dos rutas principales: una para obtener el clima por ciudad y otra para obtener el clima por coordenadas.

### Requisitos

- Node.js
- npm

### Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/rinzldev/Prueba-Tecnica.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd Prueba-Tecnica
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

### Configuración

1. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de OpenWeather:
    ```env
    OPENWEATHER_API_KEY=tu_api_key
    ```

### Ejecución

Para iniciar el servidor, ejecuta el siguiente comando:
```sh
npm start
```
**Método:** `POST`  
**Rutas:** 
`/weather`
`/coordinates`

