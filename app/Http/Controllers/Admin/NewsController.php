<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller{
    public function store(Request $request){
        try {
            $fileName = time().'_'.$request->file->getClientOriginalName();
            $request->file->storeAs('public/upload/news', $fileName);

            $request = json_decode($request->data);
            $data = News::create([
                "image" => $fileName,
                "title" => $request->title,
                "content" => $request->content
            ]);
            return sendSuccessResponse($data, "User stored successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function index(){
        try {
            $data = News::all();
            $array = [];
            foreach ($data as $item) {
                $item['date'] = date_format($item->created_at, "d M, Y");
                $array[] = $item;
            }
            return sendSuccessResponse($array, "News Retrieved successfully", 200);
        }catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function show($id){
        try {
            $news = News::whereId($id)->first();
            $news['date'] = date_format($news['created_at'], "d M, Y");
            return sendSuccessResponse($news, "News Retrieved successfully", 200);
        }catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function destroy($id){
        try {
            News::whereId($id)->delete();
            return sendSuccessResponse([], "News Retrieved successfully", 200);
        }catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function update(Request $request, $id){
        try {
            $news = News::whereId($id)->first();

            if($request->file){
                $fileName = time().'_'.$request->file->getClientOriginalName();
                $request->file->storeAs('public/upload/news', $fileName);
                $news->update(["image" => $fileName]);
            }
            $request = json_decode($request->data);
            $news->update([
                "title" => $request->title,
                "content" => $request->content
            ]);
            return sendSuccessResponse([], "News Retrieved successfully", 200);
        }catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }
}
