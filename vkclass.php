<?php
namespace arku;
class Vk{
    protected $appid = 	51756977;
    protected $protectedkey = "gI91F1je1KViFJIVLbt5";
    protected $token;
    protected $url = "https://cick-jacking.vercel.app/";

    public function authorizeUrl(){
        $auth = "https://oauth.vk.com/authorize?client_id={$this->appid}&client_secret={$this->protectedkey}";
        $auth.= "&v=5.63&response_type=code&redirect_uri={$this->url}"; //возможно uri
        // $auth.= "&scope=email";
        return $auth;
    }

    public function accessToken($code){
        $params = http_build_query([
            'client_id' => $this->appid,
            'client_secret' => $this->protectedkey,
            'redirect_uri' => $this->url,
            'code' => $code 
        ]);
        $url = "https://oauth.vk.com/access_token?".$params;
        $response = file_get_contents($url);
        $data = json_decode($response, true);

        return $data;
    }
}
?>