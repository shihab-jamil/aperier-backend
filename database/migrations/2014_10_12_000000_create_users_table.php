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
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('degree')->nullable();
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('orchid')->nullable();
            $table->string('department')->nullable();
            $table->string('institution');
            $table->string('city');
            $table->string('country');
            $table->string('password');
            $table->boolean("receive_reviews_request")->nullable();
            $table->boolean("join_editorial_team")->nullable();
            $table->boolean("privacy_acknowledgement")->nullable();
            $table->boolean("is_admin")->default(false);
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
