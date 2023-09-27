
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
