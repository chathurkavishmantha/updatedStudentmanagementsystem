<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClassRoomScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class_room_schedules', function (Blueprint $table) {
            $table->bigIncrements('class_schedule_id');
            $table->string('user_id');
            $table->string('subject_code');
            $table->string('study_year');  
            $table->string('class_room_id');  
            $table->string('date_id');  
            $table->string('time_id');  
            $table->string('status'); 
            $table->string('start_date'); 
            $table->string('end_date'); 
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
        Schema::dropIfExists('class_room_schedules');
    }
}
