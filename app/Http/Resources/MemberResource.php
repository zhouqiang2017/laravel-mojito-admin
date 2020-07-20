<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nickname' => $this->nickname,
            'openid' => $this->openid,
            'session_key' => $this->session_key,
            'union_id' => $this->union_id,
            'phone' => $this->phone,
            'gender' => $this->gender,
            'district' => $this->district,
            'avatar' => $this->avatar,
            'location' => $this->location,
            'status' => $this->status,
            'balance' => $this->balance,
            'cash' => $this->cash,
            'is_coach' => $this->is_coach,
            'created_at' => (string)$this->created_at,
            'updated_at' => (string)$this->updated_at
        ];
    }
}
