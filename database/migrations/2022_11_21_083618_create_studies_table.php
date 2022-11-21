<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study', function (Blueprint $table) {
            $table->id();
            $table->foreignId("journal_id")->references("id")->on("journals");
            $table->string("title");
            $table->longText("abstract");
            $table->string("manuscript_file");
            $table->string("authorship_change_file")->nullable();
            $table->string("comment")->nullable();
            $table->boolean("authors_agreement")->default(false);
            $table->boolean("not_published")->default(false);
            $table->boolean("ethical_guidelines")->default(false);
            $table->boolean("third_party_acknowledgement")->default(false);
            $table->foreignId("status_id")->references("id")->on("status");
            $table->foreignId("study_type_id")->references("id")->on("study_types");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('study');
    }
};
