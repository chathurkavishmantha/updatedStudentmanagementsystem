<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $fillable = [
        'option_txt',
        'option_point',
        'question_id',
        'category_id'
    ];
    // public function Module_question_function(){
    //     return $this->hasOne(Question::class , 'category_id' , 'category_id');
    // }
    // public function optionsCategory()
    // {
    //     return $this->hasMany(Option::class, 'category_id', 'category_id');
    // }

    // public function user(){
    //     return $this->belongsTo(Categories::class, 'category_id');
    // }
    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
    

    
}
