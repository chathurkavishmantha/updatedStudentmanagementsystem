<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exams extends Model
{
    protected $fillable = [
        'user_id',
        'exam_name',
        'subject_name',
    ];
    
}
