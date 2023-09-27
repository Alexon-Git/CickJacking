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
    console.log(authVK()
    .then(data => {
        console.log(data);}))
});

a.addEventListener('click', () => {

    authVK()
        .then(data => {
            console.log(data);
            let user = data.session.user;
            let info = document.getElementById('user_info');
            info.innerHTML = `
                <img src="${user.photo_200}" width="100px"/>
                <p>${user.first_name} ${user.last_name}</p>`;
        })
        // .then(response => {
        //     return VK.Api.call('users.get', { fields: 'photo_200' });
        // })
        // .then(user => {
        //     let user = data.session.user;
        //     let info = document.getElementById('user_info');
        //     info.innerHTML = `
        //         <img src="${user.photo_200}" width="100px"/>
        //         <p>${user.first_name} ${user.last_name}</p>`;

        // })
        .catch(error => {
            console.error(error);
        });
});
