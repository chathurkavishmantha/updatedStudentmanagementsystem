<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $fillable = [
        'user_id', 
        'subject_code', 
        'module_name',
        'module_no',
        'module_description',
        'module_upload_date',
        'module_upload_file'
    ];
}
