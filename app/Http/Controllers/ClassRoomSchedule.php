<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ClassRoomSchedules;
use Illuminate\Support\Facades\DB;

class ClassRoomSchedule extends Controller
{
    public function Add_ClassRoom_Shedule()
    {
        $value = ClassRoomSchedules::create([
            'user_id' => request('user_id'),
            'subject_code' => request('subject_code'),
            'study_year' => request('study_year'),
            'class_room_id' => request('class_room_id'),
            'date_id' => request('date_id'),
            'time_id' => request('time_id'),
            'status' => request('status'),
            'start_date' => request('start_date'),
            'end_date' => request('end_date'),


        ]);

    }

    public function Schedule_class_details($id)
    {
        $schedules =  DB::table('class_room_schedules')->where('user_id', $id)->get();
        return $schedules;
    }

    public function destroy($id)
    {
        DB::table('class_room_schedules')->where('class_schedule_id', $id)->delete();
    }

    public function Schedule_class_details_forStudents()
    {
        $notice = ClassRoomSchedules::all(); 
        return $notice;
       
    }
}
