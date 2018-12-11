<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user', 'UserController@index');

Route::group(['prefix' => 'auth','namespace' => 'Auth'],function ($router)
{
    $router->get('/userList', 'UserController@userList');
    $router->post('/userAdd', 'UserController@userAdd');
    $router->post('/userFile', 'UserController@userFile');
    $router->get('/userDel', 'UserController@userDel');
    $router->get('/userEdit', 'UserController@userEditShow');
    $router->post('/userEdit', 'UserController@userEdit');
    $router->post('/login', 'LoginController@login');
});
