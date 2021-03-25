<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RegisterModuleStudents extends Model
{
    protected $fillable = [
        'user_id', 
        'subject_code', 
        'module_no'
    ];
}
