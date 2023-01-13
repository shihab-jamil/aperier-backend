<?php

namespace App\Http\Controllers;

use App\Models\Study;
use App\Models\StudyAuthor;
use App\Models\StudyContribution;
use App\Models\StudyFigure;
use App\Models\StudyKeywords;
use App\Models\Status;
use App\Models\StudyMetadata;
use App\Models\StudyReference;
use App\Models\StudyTable;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if($request->email){
                $user = User::where("email", $request->email)->first();
                $all_studies = DB::table("study")->join("status", "study.status_id", "=", "status.id")->select("study.*", "status.name")->where("user_id", $user->id)->get();
            }else{
                switch ($request->type){
                    case 'ongoing' :
                        $all_studies = DB::table("study")->join("status", "study.status_id", "=", "status.id")->select("study.*", "status.name")->whereNotIn("status.name", ['Archived', "Published"])->get();
                        break;
                    case 'published' :
                        $all_studies = DB::table("study")->join("status", "study.status_id", "=", "status.id")->select("study.*", "status.name")->where("status.name", "Published")->get();
                        break;
                    case 'archived' :
                        $all_studies = DB::table("study")->join("status", "study.status_id", "=", "status.id")->select("study.*", "status.name")->where("status.name", 'Archived')->get();
                        break;
                }
            }


            return sendSuccessResponse($all_studies, "Study Submitted successfully", 200);
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
//        if($request->manuscript_file['file']){
//            return "yes";
//        }else{
//            return  "nope";
//        }
//        return  json_decode($request->data);
        try {
            $status = Status::where("name", "With Editor")->pluck("id")->first();
//            dd($request->manuscript_file);

              $fileName = time().'_'.$request->manuscript_file->getClientOriginalName();
              $request->manuscript_file->storeAs('public/upload/studies', $fileName);


            $request = json_decode($request->data);
            $user_id = User::where('email', $request->email)->pluck('id')->first();
            $study = Study::create([
                "journal_id" => $request->journals,
                "user_id" => $user_id,
                "study_type_id" => $request->studyTypes,
                "title" => $request->title,
                "abstract" => $request->abstract,
                "manuscript_file" => $fileName,
                "comment" => $request->comments,
                "authors_agreement" => $request->authors_agreement,
                "not_published" => $request->not_published,
                "ethical_guidelines" => $request->ethical_guidelines,
                "third_party_acknowledgement" => $request->third_party_acknowledgement,
                "status_id" => $status,
                "accepted_at" => null
            ]);
            $volume = "Volume ";
            $volume .= (int)date('Y') - 2021;

            StudyMetadata::create([
                "study_id" => $study->id,
                "page" => $request->page,
                "volume" => $volume
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
                    "prefix" => $item->prefix,
                    "first_name" => $item->first_name,
                    "middle_name" => $item->middle_name,
                    "last_name" => $item->last_name,
                    "email" => $item->email,
                    "correspondence" => $item->correspondence,
                    "affiliation" => $item->affiliation,
                ]);
            }

            return sendSuccessResponse([], "Study Submitted successfully", 200);
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
    public function show($id)
    {
        try {
//            $study = Study::whereId($id)->first();
            $study = DB::table("study")->join("journals", "study.journal_id", "=", "journals.id")->join("status", "study.status_id", "=", "status.id")->select("study.*", "study.title as study_title", "journals.title", "status.name", "study.status_id")->where("study.id", $id)->first();
            $study_keywords = StudyKeywords::where("study_id", $id)->get();
            $study_author = StudyAuthor::where("study_id", $id)->get();
            $study_table = StudyTable::where("study_id", $id)->get();
            $study_figures = StudyFigure::where("study_id", $id)->get();
            $study_contributions = StudyContribution::where("study_id", $id)->get();
            $study_reference = StudyReference::where("study_id", $id)->get();
            $array = array(
                "study" => $study,
                "keywords" => $study_keywords ,
                "authors" => $study_author,
                "tables" => $study_table,
                "figures" => $study_figures,
                "contributions" => $study_contributions,
                "references" => $study_reference
            );
           return sendSuccessResponse($array, "Study Submitted successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }


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
    public function update(Request $request)
    {
        try {

            if($request->manuscript_file){
                $fileName = time().'_'.$request->manuscript_file->getClientOriginalName();
//                $request->manuscript_file->move(public_path('upload/studies'), $fileName);
//                $request->file('manuscript_file')->storeAs('uploads/studies/', $fileName, 'public');
                $request->manuscript_file->storeAs('upload/studies', $fileName);
            }

            if($request->authors_file){
                $authorFileName = time().'_'.$request->authors_file->getClientOriginalName();
//                $request->authors_file->move(public_path('upload/authors'), $authorFileName);
//                $request->file('authors_file')->storeAs('uploads/authors/', $authorFileName, 'public');
                $request->authors_file->storeAs('upload/authors', $authorFileName);


            }

            $request = json_decode($request->data);
            $study = Study::query()->whereId($request->id)->first();
            StudyKeywords::where("study_id", $study->id)->delete();
            StudyAuthor::where("study_id", $study->id)->delete();
            $status = Status::where("name", "With Editor")->pluck("id")->first();


            $study->update([
                "journal_id" => $request->journals,
                "study_type_id" => $request->studyTypes,
                "title" => $request->title,
                "abstract" => $request->abstract,
                "comment" => $request->comments,
                "authors_agreement" => $request->authors_agreement,
                "not_published" => $request->not_published,
                "ethical_guidelines" => $request->ethical_guidelines,
                "third_party_acknowledgement" => $request->third_party_acknowledgement,
                "status_id" => $status,
            ]);

            if(isset($fileName)){
                $study->update([
                    "manuscript_file" => $fileName,
                ]);
            }
            if(isset($authorFileName)){
                $study->update([
                    "authorship_change_file" => $authorFileName,
                ]);
            }

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
                    "prefix" => $item->prefix,
                    "first_name" => $item->first_name,
                    "middle_name" => $item->middle_name,
                    "last_name" => $item->last_name,
                    "email" => $item->email,
                    "correspondence" => $item->correspondence,
                    "affiliation" => $item->affiliation,
                ]);
            }

            return sendSuccessResponse($study, "Study Updated successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
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

    public function studiesPerJournal($id){
        try {
            $study = DB::table('study')->join("status", "study.status_id", "=", "status.id")->join('users', 'study.user_id', '=', 'users.id')->join('study_metadata' , 'study.id' , '=', 'study_metadata.study_id')->join('study_types', 'study_types.id', '=', 'study.study_type_id')->select('study.*', 'users.first_name' ,'users.middle_name', 'users.last_name', 'study_metadata.volume', 'study_metadata.issue','study_metadata.page', 'study_metadata.downloads', 'study_metadata.views', 'study_types.name')->orderBy('study.created_at', 'DESC')->where("study.journal_id",$id)->where("status.name", "Published")->get();

            return sendSuccessResponse($study, "Study Updated successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function studiesPerJournalWithVolume($id){
        try {
            $study = DB::table('study')->join('users', 'study.user_id', '=', 'users.id')->join('study_metadata' , 'study.id' , '=', 'study_metadata.study_id')->join('study_types', 'study_types.id', '=', 'study.study_type_id')->select('study.*', 'users.first_name' ,'users.middle_name', 'users.last_name', 'study_metadata.volume', 'study_metadata.issue','study_metadata.page', 'study_metadata.downloads', 'study_metadata.views', 'study_types.name')->orderBy('study.created_at', 'DESC')->where("study.journal_id",$id)->get();
            $data = array();
            $volume = array();
            $numOfArticle = 0;
            $volumeCount = 0;

            foreach ($study AS $item){
                $numOfArticle++;
                $volume[] = $item->volume;
            }
            $volume = array_values(array_unique($volume));
            foreach ($volume as $item){
                $volumeCount++;
                foreach ($study as $studyItem){
                    if($studyItem->volume === $item){
                        $data[$item][] = $studyItem;
                    }
                }
            }
            $data['volume'] = $volume;
            $data['numOfArticle'] = $numOfArticle;
            $data['volumeCount'] = $volumeCount;
            return sendSuccessResponse($data, "Study Updated successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function singleStudyDetails($id){
        try {
            $study = DB::table('study')->join('journals', 'journals.id', '=', 'study.journal_id')->join('users', 'study.user_id', '=', 'users.id')->join('study_metadata' , 'study.id' , '=', 'study_metadata.study_id')->join('study_types', 'study_types.id', '=', 'study.study_type_id')->select('study.*', 'users.first_name' ,'users.middle_name', 'users.last_name', 'study_metadata.volume', 'study_metadata.issue','study_metadata.page', 'study_metadata.downloads', 'study_metadata.views', 'study_types.name', 'journals.title as journal_title')->orderBy('study.created_at', 'DESC')->where("study.id",$id)->first();
            $study_keywords = StudyKeywords::where('study_id', $id)->get();
            $study_authors = StudyAuthor::where('study_id', $id)->get();
            $study_reference = StudyReference::where('study_id', $id)->get();
            $study_figure = StudyFigure::where('study_id', $id)->get();
            $study_contribution = StudyContribution::where('study_id', $id)->get();
            $study_table = StudyTable::where('study_id', $id)->get();
            $data = array(
                "study" => $study,
                "study_keywords" => $study_keywords,
                "study_authors" => $study_authors,
                "study_reference" => $study_reference,
                "study_figure" => $study_figure,
                "study_contribution" => $study_contribution,
                "study_table" => $study_table
            );
            return sendSuccessResponse($data, "Study Updated successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }

    public function adminStudyStore(Request $request, $id){
        try{
            $study = Study::whereId($id)->first();
            $study->update([
                "status_id" => $request->status,
                "journal_id" => $request->journals,
                "study_type_id" => $request->studyTypes,
                "title" => $request->title,
                "abstract" => $request->abstract,
                "comment" => $request->comments,
            ]);

            //save keywords
            $keywords = explode(";",$request->keywords);
            StudyKeywords::where("study_id", $id)->delete();
            foreach ($keywords AS $item){
                StudyKeywords::create([
                    "study_id" => $id,
                    "keyword_title" => $item
                ]);
            }

            //save authors
            $authors = $request->authors;
            StudyAuthor::where("study_id", $id)->delete();
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

            //save tables
            $tables = $request->tables;
            StudyTable::where("study_id", $id)->delete();
            foreach ($tables AS $item){
                StudyTable::create([
                    "study_id" => $id,
                    "table_title" => $item['table_title']
                ]);
            }

            //save figures
            $figures = $request->figures;
            StudyFigure::where("study_id", $id)->delete();
            foreach ($figures AS $item){
                StudyFigure::create([
                    "study_id" => $id,
                    "figure_title" => $item['figure_title']
                ]);
            }

            //save contributions
            $contributions = $request->contributions;
            StudyContribution::where("study_id", $id)->delete();
            foreach ($contributions AS $item){
                StudyContribution::create([
                    "study_id" => $id,
                    "contribution_title" => $item['contribution_title']
                ]);
            }

            //save references
            $references = $request->references;
            StudyReference::where("study_id", $id)->delete();
            foreach ($references AS $item){
                StudyReference::create([
                    "study_id" => $id,
                    "reference_title" => $item['reference_title'],
                    "reference_url" => $item['reference_url'],
                ]);
            }

            return sendSuccessResponse($study, "Study Updated successfully", 200);
        } catch (\Throwable $e) {
            return sendErrorResponse('Database Error!', $e->getMessage(), 500);
        }
    }
}
