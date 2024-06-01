<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banner;

class BannerController extends Controller
{

    public function index()
    {
        $banners = Banner::where('status', '!=', 0)->orderBy('created_at', 'desc')->get();
        if (count($banners) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "banner" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "banners" => $banners
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
        $banner = Banner::find($id);
        if (count($banner) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu",
                "banner" => null
            ];
        } else {
            $result = [
                "status" => true,
                "message" => "Tải dữ liệu thành công",
                "banners" => $banner
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
        $banner = Banner::find($id);
        if (count($banner) == 0) {
            $result = [
                "status" => false,
                "message" => "Không tìm thấy dữ liệu xóa",
            ];
        } else {
            $banner->delete();
            $result = [
                "status" => true,
                "message" => "Xóa dữ liệu thành công",
            ];
        }

        return response()->json($result);
    }
}