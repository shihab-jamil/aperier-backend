<?php

namespace App\Http\Controllers;

use App\Models\Study;
use App\Models\StudyAuthor;
use App\Models\StudyKeywords;
use App\Models\Status;
use Illuminate\Http\Request;

class StudiesController extends Controller
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
        try {
            $status = Status::where("name", "With Editor")->pluck("id")->first();
//            dd($request->manuscript_file);
//            $fileName = time().'_'.$request->manuscript_file->getClientOriginalName();
//            $filePath = $request->manuscript_file->storeAs('uploads', $fileName, 'public');
//            $request->manuscript_file->move(public_path('uploads'), $fileName);

            $study = Study::create([
                "journal_id" => $request->journals,
                "study_type_id" => $request->studyTypes,
                "title" => $request->title,
                "abstract" => $request->abstract,
                "manuscript_file" => "filePath",
                "comment" => $request->comment,
                "authors_agreement" => $request->authors_agreement,
                "not_published" => $request->not_published,
                "ethical_guidelines" => $request->ethical_guidelines,
                "third_party_acknowledgement" => $request->third_party_acknowledgement,
                "status_id" => $status,
            ]);

            $keywords = explode(";", $request->keywords);
            foreach($keywords as $item){
                StudyKeywords::create([
                    "study_id" => $study->id,
                    "keyword_title" => $item
                ]);
            }

            $authors = $request->authors;
            foreach($authors as $item){
                StudyAuthor::create([
                    "study_id" => $study->id,
                    "prefix" => $item['prefix'],
                    "first_name" => $item['first_name'],
                    "middle_name" => $item['middle_name'],
                    "last_name" => $item['last_name'],
                    "email" => $item['email'],
                    "correspondence" => $item['correspondence'],
                    "affiliation" => $item['affiliation'],
                ]);
            }

            return sendSuccessResponse($authors, "Study Submitted successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\study  $studies
     * @return \Illuminate\Http\Response
     */
    public function show(study $studies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\study  $studies
     * @return \Illuminate\Http\Response
     */
    public function edit(study $studies)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\study  $studies
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, study $studies)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\study  $studies
     * @return \Illuminate\Http\Response
     */
    public function destroy(study $studies)
    {
        //
    }
}
