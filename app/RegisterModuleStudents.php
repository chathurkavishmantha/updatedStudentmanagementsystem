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


    //create relation ship with 2 tables and join it.
    public function Module_function(){
        return $this->hasOne(Module::class , 'module_no' , 'module_no');
    }

}


