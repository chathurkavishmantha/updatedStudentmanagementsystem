<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassRoomSchedules extends Model
{
    protected $fillable = [
     'user_id',       
    'subject_code',
    'study_year',
    'class_room_id',
    'date_id',
    'time_id',
    'status',
    'start_date',
    'end_date'

    ];
}