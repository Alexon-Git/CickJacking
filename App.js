VK.init({
    apiId: 51756977,
    onlyWidgets: true,
    insertBefore: '#someElement'
});

function authVK() {
return new Promise((resolve, reject) => {
    VK.Auth.login(response => {
        if (response.session) {
            resolve(response);
        } else {
            reject(new Error('Не удалось авторизоваться'));
        }
    });
});
}

let a = document.querySelector('.btn');

a.addEventListener('click', () => {

    authVK()
        .then(data => {
            console.log(data);
            let user = data.session.user;
            let info = document.getElementById('user_info');
            info.innerHTML = `
                <p>${user.first_name} ${user.last_name}</p>`;
        })
        .catch(error => {
            console.error(error);
        });
});
