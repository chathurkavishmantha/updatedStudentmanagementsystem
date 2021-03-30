<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $fillable = [
        'user_id',
        'category_name',
        'subject_name',
    ];

    // public function Module_category_function(){
    //     return $this->hasOne(Categories::class , 'category_id' , 'category_id');
    // }

    public function categoryQuestions()
    {
        return $this->hasMany(Question::class, 'category_id', 'category_id');
    }
    // public function optionsCategory()
    // {
    //     return $this->hasMany(Option::class, 'category_id', 'category_id');
    // }

    // public function comments(){
    //     return $this->hasMany(Option::class, 'category_id', 'category_id');
    // }

}