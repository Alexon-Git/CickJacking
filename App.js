// Инициализация SDK
VK.init({
    apiId: 51756977
  });
  
  function loginWithVK() {
    return new Promise(function(resolve, reject) {
      VK.Auth.login(response => {
        if (response.session) {
          resolve(response);  
        } else {
          reject(new Error('Не удалось авторизоваться'));
        }
      });
    });
  }
  
  // Обработка авторизации
  loginWithVK()
    .then(response => {
  
      // Запрос данных пользователя
      return VK.Api.call('users.get', {fields: 'photo_200'});
  
    })
    .then(user => {
  
      // Вывод данных на страницу
      let info = document.getElementById('user_info');
      info.innerHTML = `
        <img src="${user[0].photo_200}" width="100px"/>
        <p>${user[0].first_name} ${user[0].last_name}</p>
      `;
  
    })
    .catch(error => {
      console.log(error); 
    });