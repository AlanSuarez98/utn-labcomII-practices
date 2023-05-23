/* Almaceno en variables los elementos del DOM a manipular */
let bntLoadNews = document.getElementById('btn-load-news');
let loadingElement = document.getElementById('loading');
let newsContainerElement = document.getElementById('news-container');

/* Función asociada al onclick del botón que carga las noticias de la API */
function loadNews() {
    bntLoadNews.style.display = "none";
    loadingElement.style.display = "block";
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((posts) => {
            // Vaciar contenedor de noticias
            newsContainerElement.innerHTML = "";
            // recorrer el arreglo de post y generar el codigo html
            for(post of posts) {
                newsContainerElement.innerHTML += `
                <article onclick="openNewsDetails(${post.id})">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </article>`;
            }
            // Mostramos el contenedor con noticias cargadas
            newsContainerElement.style.display = "block";
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            loadingElement.style.display = "none";
        });
}
/* Función disparada al hacer click a un artículo/post */
function openNewsDetails(idNews) {
    alert(`Has clickeado la noticia #${idNews}`);
}