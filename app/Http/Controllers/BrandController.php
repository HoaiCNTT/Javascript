<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;

class BrandController extends Controller
{

    public function index()
    {
        $brands = Brand::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($brands) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "brands" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "brands" => $brands
            ];
        }

        return response()->json($result);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $brand = Brand::find($id);
        if (count($brands) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "brands" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "brands" => $brand
            ];
        }

        return response()->json($result);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $brands = Brand::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($brands) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu xóa",   
            ];
        } else {
            $brand->delete();
            $result = [
                "status" => true,
                "message" => "Xóa dữ liệu thành công",
            ];
        }

        return response()->json($result);
    }
}