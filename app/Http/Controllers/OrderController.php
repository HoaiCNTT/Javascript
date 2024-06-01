<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($orders) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "orders" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "orders" => $orders
            ];
        }
        return response()->json($result);
    }
    public function show(string $id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "orders" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "orders" => $order
            ];
        }
        return response()->json($result);
    }
    public function destroy(string $id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
            ];
        } else {
            $order->delete();
            $result = [
                "status" => true,
                "message" => "Xóa dữ liệu thành công",
            ];
        }
        return response()->json($result);
    }
}
