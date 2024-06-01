<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $post = Post::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($post) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "bannners" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "posts" => $post
            ];
        }

        return response()->json($result);
    }

    public function show(string $id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "bannners" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "posts" => $post
            ];
        }

        return response()->json($result);
    }

    public function destroy(string $id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
            ];
        } else {
            $post->delete();
            $result = [
                "status" => true,
                "message" => "Xóa  thành công",
            ];
        }

        return response()->json($result);
    }
}
