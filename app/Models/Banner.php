<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model {
    protected $fillable = ['name', 'intro', 'url', 'sequence', 'type', 'status'];

    public function setUrlAttribute($value)
    {
        $this->attributes['cover'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getUrlAttribute($value)
    {
        return env('APP_URL').$value;
    }
}
