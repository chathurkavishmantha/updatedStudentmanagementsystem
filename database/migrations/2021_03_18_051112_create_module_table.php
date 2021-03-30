<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModuleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->bigIncrements('module_id');
            $table->string('user_id');
            $table->string('subject_code');
            $table->string('module_name');            
            $table->string('module_no');
            $table->string('module_description');            
            $table->string('module_upload_date');
            $table->string('module_upload_file');

            $table->timestamps();
            // $table->foreign('id')->references('module_id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('modules');
    }
}
