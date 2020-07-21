<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * Class Coach
 *
 * @package \App\Models
 */
class Coach extends Model {

    protected $fillable = [
        'user_id', 'name', 'gender', 'age', 'phone', 'address', 'location', 'avatar',
        'front', 'rear', 'handpiece', 'coach_card', 'no_crime', 'service_fee', 'intro',
        'level', 'tag', 'status'];


    public function setAvatarAttribute($value)
    {
        $this->attributes['avatar'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getAvatarAttribute($value)
    {
        return env('APP_URL').$value;
    }

    public function setFrontAttribute($value)
    {
        $this->attributes['front'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getFrontAttribute($value)
    {
        return env('APP_URL').$value;
    }

    public function setRearAttribute($value)
    {
        $this->attributes['rear'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getRearAttribute($value)
    {
        return env('APP_URL').$value;
    }

    public function setHandpieceAttribute($value)
    {
        $this->attributes['handpiece'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getHandpieceAttribute($value)
    {
        return env('APP_URL').$value;
    }

    public function setCoachCardAttribute($value)
    {
        $this->attributes['coach_card'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getCoachCardAttribute($value)
    {
        return env('APP_URL').$value;
    }

    public function setNoCrimeCardAttribute($value)
    {
        $this->attributes['no_crime'] = Str::replaceFirst(env('APP_URL'), '', $value);
    }

    public function getNoCrimeAttribute($value)
    {
        return env('APP_URL').$value;
    }
}
