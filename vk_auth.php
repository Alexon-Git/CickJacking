
<?php
    $code = $_GET['code'];
 
    $params = array(
        'client_id' => 'd0f4a515d0f4a515d0f4a5153cd3e111b3dd0f4d0f4a515b5f8a0052fa396ebac3c73bf',
        'client_secret' => 'ВАШ_СЕКРЕТНЫЙ_КЛЮЧ',
        'redirect_uri' => 'https://ВАШ_САЙТ/vk_auth.php',
        'code' => $code
    );
 
    $url = 'https://oauth.vk.com/access_token?' . http_build_query($params);
 
    $result = file_get_contents($url);
 
    $data = json_decode($result, true);
 
    if(isset($data['access_token'])){
        $user_id = $data['user_id'];
 
        // Дальнейшая обработка информации о пользователе
    }
?>