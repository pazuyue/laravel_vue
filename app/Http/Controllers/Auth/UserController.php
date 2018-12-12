<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;


use App\Http\Model\User;
use App\Http\Server\UserServer;
use App\Jobs\SendReminderEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Redis;


class UserController extends Controller
{
    public function index(){
        //$user = DB::table('users')->where('id',1)->get();
        //$user =  DB::connection('mongodb')->table('users')->get();
        $user =User::findOrFail(1);
        //Redis::set('user', json_encode($user));

        //var_dump($user);
        //dd($user);
        $job = (new SendReminderEmail($user))->onQueue('SendReminderEmail');
        $ret=$this->dispatch($job);
        dd($ret);

    }


    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }



    /**用户修改数据显示
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function userEditShow(Request $request){

        $userid = $request->userid;
        $user=User::find($userid);
        $user->imageUrl= asset($user->imageUrl);
        return response()->json([
            'code' => 1,
            'message' => 'success',
            'data'=>$user
        ]);
    }

    /**用户修改成功
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function userEdit(Request $request){

        $userid = $request->user_id;
        $user=User::find($userid);
        $user->name =$request->name;
        $user->email =$request->email;
        $user->imageUrl =$request->imageUrl;
        $user->portrait =$request->desc;
        $user->updated_at =date("Y-m-d H:i:s");
        if($user->save()){
            return response()->json([
                'code' => 1,
                'message' => 'success',
                'data'=>"修改成功"
            ]);
        }else{
            return response()->json([
                'code' => 1,
                'message' => 'success',
                'data'=>"修改失败"
            ]);
        }
    }

    /**用户添加头像
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function userFile(Request $request){
        ;
        if (!$request->hasFile('file')) {
            return response()->json([], 500, '无法获取上传文件');
        }
        $file = $request->file('file');
        if ($file->isValid()) {
            // 获取文件相关信息
            $ext = $file->getClientOriginalExtension();     // 扩展名


            // 上传文件
            $filename = $request->fileName.".".$ext;
            // 使用我们新建的uploads本地存储空间（目录）
            // $path = $file->store($filename, 'uploads');
            $file->storeAs('public', $filename);
            $path ='storage/'.$filename;
            return response()->json([
                'code' => 1,
                'message' => 'success',
                'photo' => $path,
                'name' => $filename,
            ]);

        } else {
            return response()->json([], 500, '文件未通过验证');
        }
    }

    /**用户列表
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function userList(){

        $users=UserServer::getInstance();
        return $users->userList();
    }



    /**用户添加
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function userAdd(Request $request){

        $ret=$this->validator($request->all())->validate();

        if(empty($ret)){
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'portrait' => $request->desc,
                'imageUrl' => $request->imageUrl,
            ]);
            return response()->json([
                'code' => 1,
                'message' => 'success',
                'data'=>""
            ]);
        }
    }

    public function userDel(Request $request){

        $userid = $request->userid;
        $user=UserServer::getInstance();
        $trashed =$user->userDel($userid);

        if($trashed){

            return response()->json([
                'code' => 1,
                'message' => 'success',
                'data'=>"冻结成功"
            ]);
        }else{
            return response()->json([
                'code' => 1,
                'message' => 'false',
                'data'=>"冻结失败"
            ]);
        }
    }
}
