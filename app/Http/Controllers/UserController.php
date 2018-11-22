<?php

namespace App\Http\Controllers;

use App\Mongodb;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(){
        DB::collection('users')               //选择使用users集合
        ->insert([                          //插入数据
            'name'  =>  'yueguang',
            'age'     =>   18
        ]);
        Mongodb::test();
    }

}
