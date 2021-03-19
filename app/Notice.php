<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $fillable = [
        'user_id',
        'subject_name',
        'notice_date',
        'about_notice',
        'study_year'
    ];
}
