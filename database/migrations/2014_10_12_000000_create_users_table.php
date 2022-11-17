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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('prefix');
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('last_name');
            $table->string('degree');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('orchid');
            $table->string('department');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean("receive_reviews_request");
            $table->boolean("join_editorial_team");
            $table->boolean("privacy_acknowledgement");
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
