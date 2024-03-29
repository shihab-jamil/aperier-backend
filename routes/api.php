<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post("sign-up", [\App\Http\Controllers\AuthController::class, "store"]);
Route::post("login", [\App\Http\Controllers\AuthController::class, "login"]);
Route::post("forget-password", [\App\Http\Controllers\AuthController::class, "forgetPassword"]);
Route::post("reset-password", [\App\Http\Controllers\AuthController::class, "resetPassword"]);
Route::get("journals", [\App\Http\Controllers\JournalController::class, "index"]);
Route::post("submit-study", [\App\Http\Controllers\StudiesController::class, "store"]);
Route::post("update-study", [\App\Http\Controllers\StudiesController::class, "update"]);
Route::get("all-studies", [\App\Http\Controllers\StudiesController::class, "index"]);
Route::get("study/{id}", [\App\Http\Controllers\StudiesController::class, "show"]);
Route::get("profile/{email}", [\App\Http\Controllers\ProfileController::class, "index"]);
Route::post("profile-update", [\App\Http\Controllers\ProfileController::class, "update"]);
Route::post('study-metadata-update/{id}/{metadata}', [\App\Http\Controllers\StudyMetadataController::class, 'index']);
Route::get('studies-per-journal/{id}', [\App\Http\Controllers\StudiesController::class, 'studiesPerJournal']);
Route::get('studies-per-journal-with-volume/{id}', [\App\Http\Controllers\StudiesController::class, 'studiesPerJournalWithVolume']);
Route::get('studies-details/{id}', [\App\Http\Controllers\StudiesController::class, 'singleStudyDetails']);
Route::post('search-study', [\App\Http\Controllers\StudiesController::class, "searchStudies"]);
//admin dashboard
Route::get('admin-dashboard', [DashboardController::class, 'index']);
Route::post('news', [NewsController::class, "store"]);
Route::get('news', [NewsController::class, "index"]);
Route::delete('news/{id}', [NewsController::class, "destroy"]);
Route::get('news/{id}', [NewsController::class, "show"]);
Route::post('news/{id}', [NewsController::class, "update"]);
Route::post('admin-study/{id}', [\App\Http\Controllers\StudiesController::class, "adminStudyStore"]);

