// document.querySelector('.btn').addEventListener('click', () => {authVK().then(data => {console.log(data);let user = data.session.user;let info = document.getElementById('user_info');info.innerHTML = `<p>${user.first_name} ${user.last_name}</p>`;}).catch(error => {console.error(error);});});


const authUrl = generateVkAuthUrl(); 

const link = document.getElementById('authLink');
link.href = authUrl;

// Обработка успешной авторизации 
function handleAuth(data) {

  // Получаем данные пользователя
  const user = getVkUserData(data.access_token);
  
  // Выводим на страницу
  const info = document.getElementById('userInfo');
  info.innerText = `${user.first_name} ${user.last_name}`;

}

// Вызываем при редиректе с кодом авторизации
if(window.location.search) {
  const code = getCodeFromUrl();
  getVkToken(code)
    .then(handleAuth)
    .catch(handleError)
}