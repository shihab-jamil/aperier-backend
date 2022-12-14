<?php

namespace App\Http\Controllers;

use App\Models\StudyMetadata;
use Illuminate\Http\Request;

class StudyMetadataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id, $metadata)
    {
        if($metadata === 'download'){
            $studyMetadata = StudyMetadata::where('study_id', $id)->first();
            $studyMetadata->update([
                "downloads" => (int)$studyMetadata->downloads + 1,
            ]);
        }else{
            $studyMetadata = StudyMetadata::where('study_id', $id)->first();
            $studyMetadata->update([
                "views" => (int)$studyMetadata->views + 1,
            ]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StudyMetadata  $studyMetadata
     * @return \Illuminate\Http\Response
     */
    public function show(StudyMetadata $studyMetadata)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StudyMetadata  $studyMetadata
     * @return \Illuminate\Http\Response
     */
    public function edit(StudyMetadata $studyMetadata)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StudyMetadata  $studyMetadata
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StudyMetadata $studyMetadata)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StudyMetadata  $studyMetadata
     * @return \Illuminate\Http\Response
     */
    public function destroy(StudyMetadata $studyMetadata)
    {
        //
    }
}
