<?php

namespace App\Http\Controllers;

use App\Mongodb;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(){
        $users = DB::table('users')->get();
        $user =  DB::connection('mongodb')->table('users')->get();
        var_dump($users);
        dd($user);
    }
}
