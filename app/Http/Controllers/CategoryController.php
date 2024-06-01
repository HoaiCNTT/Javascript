<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorys = Category::where('status','!=',0)->orderBy('created_at','desc')->get();
        if(count($categorys)==0)
        {
            $result=[
                "status"=>false,
                "message"=>"Không tìm thấy dữ liệu",
                "bannners"=>null
            ];
        }
        else
        {
            $result=[
                "status"=>true,
                "message"=>"Tải dữ liệu thành công",
                "bannners"=>$categorys
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
        $category = Category::find($id);
        if($category==null)
        {
            $result=[
                "status"=>false,
                "message"=>"Không tìm thấy dữ liệu",
                "bannners"=>null
            ];
        }
        else
        {
            $result=[
                "status"=>true,
                "message"=>"Tải dữ liệu thành công",
                "bannners"=>$category
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
        $category = Category::find($id);
        if($category==null)
        {
            $result=[
                "status"=>false,
                "message"=>"Không tìm thấy dữ liệu",
               
            ];
        }
        else
        {
            $result=[
                $category->delete($id),
                "status"=>true,
                "message"=>"Xóa thành công",
            ];
        }
        
        return response()->json($result);
    }
}
