<?php

namespace App\Http\Server;

use App\Http\Model\User;

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/12/11
 * Time: 11:19
 */
class UserServer
{
    private static $instance = null;

    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public function userList(){
        $users=User::all();
        return $users;
    }

}