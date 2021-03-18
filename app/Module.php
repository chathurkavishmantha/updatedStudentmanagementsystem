<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Module extends Model
{
    protected $fillable = [
        
        'module_name',
        'module_no',
        'module_description',
        'module_upload_date',
        'module_upload_file'
    ];
}
