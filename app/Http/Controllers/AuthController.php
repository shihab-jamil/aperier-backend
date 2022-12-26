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
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        try {
            $user = User::where("email", $request->email)->first();
            if($user && Hash::check($request->password, $user->password)){
                return sendSuccessResponse($user, "User Login successfully", 200);
            }else{
                return sendErrorResponse('Email and password does not match with our records', 422);
            }
        }
        catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }

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
        try {
//            $areaOfExpertise = $request->areaOfExpertise;
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
                "institution" => $request->institution,
                "city" => $request->city,
                "country" => $request->country,
                "email_verified_at" => $request->email_verified_at,
                "password" => Hash::make($request->password),
                "receive_reviews_request" => $request->receive_reviews_request,
                "join_editorial_team" => $request->join_editorial_team,
                "privacy_acknowledgement" => $request->privacy_acknowledgement,
            ]);

//            foreach ($areaOfExpertise AS $expertise){
//                if(!$expertise) continue;
//                AreasOfExpertise::create([
//                    "user_id" => $user->id,
//                    "area_name" => $expertise
//                ]);
//            }
            return sendSuccessResponse([], "User stored successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
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
