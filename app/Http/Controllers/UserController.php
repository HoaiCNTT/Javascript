<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($users) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "users" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "users" => $users
            ];
        }
        return response()->json($result);
    }
    public function show(string $id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "users" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "users" => $user
            ];
        }
        return response()->json($result);
    }
    public function destroy(string $id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
            ];
        } else {
            $user->delete();
            $result = [
                "status" => true,
                "message" => "Xóa dữ liệu thành công",
            ];
        }
        return response()->json($result);
    }
}
