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
