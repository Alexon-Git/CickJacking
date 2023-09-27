const client_id = 51756977;
const redirect_uri = 'https://cick-jacking.vercel.app/';

// Функция для генерации ссылки
function generateVkAuthUrl() {

  let params = {
    client_id: client_id,
    redirect_uri: redirect_uri,
    display: 'popup',
    scope: 'photos,wall',
    response_type: 'code',
    v: '5.92'
  };

  let queryString = Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&');

  return 'https://oauth.vk.com/authorize?' + queryString;

}

// Использование
let authUrl = generateVkAuthUrl(); 
let info = document.getElementById('user_info');
info.innerHTML = `${authUrl}`;

// Переход по ссылке для начала авторизации
// window.location = authUrl;