<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'category_id',
        'question_description',
    ];

    // public function Module_category_function(){
    //     return $this->hasOne(Categories::class , 'category_id' , 'category_id');
    // }



    public function questionOptions()
    {
        return $this->hasMany(Option::class, 'question_id', 'questions_id');
    }

    // public function comments(){
    //     return $this->hasMany(Option::class);
    // }

    
}

