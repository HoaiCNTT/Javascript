<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($product) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "bannners" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "posts" => $product
            ];
        }

        return response()->json($result);
    }

    public function show(string $id)
    {
        $product = Product::find($id);
        if ($product == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "bannners" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "posts" => $product
            ];
        }

        return response()->json($result);
    }

    public function destroy(string $id)
    {
        $product = Product::find($id);
        if ($product == null) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
            ];
        } else {
            $product->delete();
            $result = [
                "status" => true,
                "message" => "Xóa  thành công",
            ];
        }

        return response()->json($result);
    }
}
