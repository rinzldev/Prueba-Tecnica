# Prueba Técnica

Este proyecto es una API que permite obtener información meteorológica utilizando la API de OpenWeather. La API proporciona dos rutas principales: una para obtener el clima por ciudad y otra para obtener el clima por coordenadas.

## Requisitos

- Node.js
- npm

## Instalación

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

## Configuración

1. Crea un archivo `.env` o cambiar el nombre del `.env.example` en la raíz del proyecto y agrega tu clave de API de OpenWeather:
    ```env
    OPENWEATHER_API_KEY=tu_api_key
    ```

## Ejecución

Para iniciar el servidor, ejecuta el siguiente comando:
```sh
npm start
