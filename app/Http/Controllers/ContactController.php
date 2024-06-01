<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::where('status','!=',0)->orderBy('created_at','desc')->get();
        if(count($contacts)==0)
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
                "bannners"=>$contacts
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
        $contact = Contact::find($id);
        if($contact==null)
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
                "message"=>"Xóa thành công",
                "bannners"=>$contact
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
        //
    }
}
