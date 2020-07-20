<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * Class HighSenior
 *
 * @package \App\Models
 */
class HighSenior extends Model{
    protected $fillable = ['name', 'intro', 'cover', 'regular','sequence', 'type', 'status'];

    public function setCoverAttribute($value)
    {
        $this->attributes['cover'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getCoverAttribute($value)
    {
        return env('APP_URL').$value;
    }

}
