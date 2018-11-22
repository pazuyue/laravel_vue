<?php

namespace App;

use Mongo;
use Illuminate\Support\Facades\DB;

class Mongodb extends Mongo
{
    protected $collection = 'users';
    protected $connection = 'test';

    public static function test() {
        $users = DB::collection('users')->get();
        dd($users);
    }
}
