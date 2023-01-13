<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller{
    public function index(){
        try {
            $studies = DB::table('study AS std')->join('status AS sts', 'std.status_id', '=', 'sts.id')->get();
            $data = [
                "all" => $studies->count(),
                "archived" => DB::table('study AS std')->join('status AS sts', 'std.status_id', '=', 'sts.id')->where('sts.name', 'Archived')->count(),
                "published" => DB::table('study AS std')->join('status AS sts', 'std.status_id', '=', 'sts.id')->where('sts.name', 'Published')->count(),
                "ongoing" => DB::table('study AS std')->join('status AS sts', 'std.status_id', '=', 'sts.id')->whereNotIn('sts.name', ['Archived', 'Published'])->count()
            ];
            return sendSuccessResponse($data, 'Data retrieved successfully', 200);
        }catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }
}
