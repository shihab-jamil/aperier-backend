<?php

namespace App\Http\Controllers;

use App\Models\AreasOfExpertise;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($email)
    {
        try {
            $user = User::query()->where("email", $email)->first();
            $areaOfExpertise = AreasOfExpertise::where("user_id", $user->id)->get();
            $user["areaOfExpertise"] = $areaOfExpertise;
            return sendSuccessResponse($user, "Data retrieved successfully", 200);
        } catch (\Throwable $e) {
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
    public function update(Request $request)
    {

        try {
            $user = User::where("email", $request->email)->first();
            AreasOfExpertise::where("user_id", $user->id)->delete();
//            $study_area->delete();

            $areaOfExpertise = $request->areaOfExpertise;

            $user->update([
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

            foreach ($areaOfExpertise AS $expertise){
                if(!$expertise) continue;
                AreasOfExpertise::create([
                    "user_id" => $user->id,
                    "area_name" => $expertise
                ]);
            }
            return sendSuccessResponse([], "User Updated successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
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
