<?php

namespace App\Http\Controllers;

use App\Models\AreasOfExpertise;
use App\Models\PasswordReset;
use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Throwable;

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
            if ($user && Hash::check($request->password, $user->password)) {
                return sendSuccessResponse($user, "User Login successfully", 200);
            } else {
                return sendErrorResponse('Email and password does not match with our records', 422);
            }
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
        try {
            $areaOfExpertise = $request->areaOfExpertise;
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

            foreach ($areaOfExpertise as $expertise) {
                if (!$expertise) continue;
                AreasOfExpertise::create([
                    "user_id" => $user->id,
                    "area_name" => $expertise
                ]);
            }
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

    public function forgetPassword(Request $request){
        try {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                $resetToken = str_pad(random_int(1,9999), 4, '0', STR_PAD_LEFT);
                $passwordReset = PasswordReset::where('email', $user->email)->first();
                if(!$passwordReset){
                    PasswordReset::create([
                        'email' => $user->email,
                        'token' => $resetToken,
                    ]);
                }else{
                    PasswordReset::where('email', $user->email)->update([
                        'email' => $user->email,
                        'token' => $resetToken,
                    ]);
                }

                Mail::to($user)->send(new \App\Mail\ResetPassword($user->email, $resetToken));
                return sendSuccessResponse($user, 'We have sent an email to recover your password', 200);
            } else {
                return sendErrorResponse('Could not find account', 422);
            }
        } catch (Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function resetPassword(Request $request){
        try {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                $resetRequest = PasswordReset::where('email', $request->email)->first();
                if($resetRequest && $resetRequest->token == $request->token){
                    $user->update([
                        'password' => Hash::make($request->newPassword),
                    ]);
                    PasswordReset::where('email', $request->email)->delete();
                    return sendSuccessResponse($user, 'Password Reset Successfully, Please Login Again ', 200);
                }else{
                    return sendErrorResponse('Reset Token Already Used', 422);
                }
            }else {
                return sendErrorResponse('No Record Found, Incorrect Email Address', 422);
            }
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }
}
