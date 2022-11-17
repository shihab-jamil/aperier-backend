<?php

namespace App\Http\Controllers;

use App\Models\AreasOfExpertise;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $areasOfExpertise = $request->areasOfExpertise;
        $user = User::create([
            "prefix" => $request->prefix,
            "first_name" => $request->first_name,
            "middle_name" => $request->middle_name,
            "last_name" => $request->last_name,
            "degree" => $request->degree,
            "email" => $request->email,
            "phone" => $request->phone,
            "orchid" => $request->orchid,
            "department" => $request->department,
            "email_verified_at" => $request->email_verified_at,
            "password" => Hash::make($request->password),
            "receive_reviews_request" => $request->receive_reviews_request,
            "join_editorial_team" => $request->join_editorial_team,
            "privacy_acknowledgement" => $request->privacy_acknowledgement,
        ]);

        foreach ($areasOfExpertise AS $expertise){
            if(!$expertise) continue;
            AreasOfExpertise::create([
                "user_id" => $user->id,
                "area_name" => $expertise
            ]);

        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
