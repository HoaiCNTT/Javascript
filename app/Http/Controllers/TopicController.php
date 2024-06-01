<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Topic;

class TopicController extends Controller
{
    public function index()
    {
        $topics = Topic::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($topics) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "topics" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "topics" => $topics
            ];
        }
        return response()->json($result);
    }
    public function show(string $id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "topics" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "topics" => $topic
            ];
        }
        return response()->json($result);
    }
    public function destroy(string $id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
            ];
        } else {
            $topic->delete();
            $result = [
                "status" => true,
                "message" => "Xóa dữ liệu thành công",
            ];
        }
        return response()->json($result);
    }
}
