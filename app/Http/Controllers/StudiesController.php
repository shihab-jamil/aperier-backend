<?php

namespace App\Http\Controllers;

use App\Models\studies;
use App\Models\StudyKeywords;
use App\Models\Stutus;
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
        $status = Stutus::where("name", "With Editor")->pluck("id")->first();
        $study = studies::create([
            "journal_id" => $request->journal_id,
            "title" => $request->title,
            "abstract" => $request->abstract,
            "manuscript_file" => $request->manuscript_file,
            "comment" => $request->comment,
            "authors_agreement" => $request->authors_agreement,
            "not_published" => $request->not_published,
            "ethical_guidelines" => $request->ethical_guidelines,
            "third_party_acknowledgement" => $request->third_party_acknowledgement,
            "status" => $status,
        ]);

        $keywords = explode(";", $request->keywords);
        foreach($keywords as $item){
            StudyKeywords::create([
                "study_id" => $study->id,
                "keyword_title" => $item
            ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\studies  $studies
     * @return \Illuminate\Http\Response
     */
    public function show(studies $studies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\studies  $studies
     * @return \Illuminate\Http\Response
     */
    public function edit(studies $studies)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\studies  $studies
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, studies $studies)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\studies  $studies
     * @return \Illuminate\Http\Response
     */
    public function destroy(studies $studies)
    {
        //
    }
}
