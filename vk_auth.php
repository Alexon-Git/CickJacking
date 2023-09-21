
<?php
    $code = $_GET['code'];
 
    $params = array(
        'client_id' => 'vk1.a.SbEhiDZb0NMtBDz-CnU_WAmmipVhYejbAnJKRjMmoMmepNRW5UQfZwP37MNFpclnhKCm-i5glwJObyATlMwsm6FRrfKmzDRNRaVPp7nOKPhG28h0x0dyvySZduRyxkLAZYZPZP4K0n65M186QYxpJJcp647VHiPeESXsAQupQ26ktHClvzUYaeHH3VaMf3-3CHCe16cU9Foh9ekukrBbMQ',
        'client_secret' => 'zdN4M5YNBcq7UNGth6EK',
        'redirect_uri' => 'https://cick-jacking.vercel.app/vk_auth.php',
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