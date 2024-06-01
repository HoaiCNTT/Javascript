<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::where('status', '=', 0)->orderBy('created_at', 'desc')->get();
        if (count($menus) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "menus" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "menus" => $menus
            ];
        }
        return response()->json($result);
    }
    public function show(string $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "menus" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "menus" => $menu
            ];
        }
        return response()->json($result);
    }
    public function destroy(string $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
            ];
        } else {
            $menu->delete();
            $result = [
                "status" => true,
                "message" => "Xóa dữ liệu thành công",
            ];
        }
        return response()->json($result);
    }
}
