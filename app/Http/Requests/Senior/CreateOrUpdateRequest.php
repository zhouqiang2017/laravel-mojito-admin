<?php

namespace App\Http\Requests\Senior;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'intro' => 'required',
            'cover' => 'required',
            'regular' => 'required',

        ];
    }


    public function messages()
    {
        return [
            'name.required' => '请填写标题',
            'intro.required' => '请填写简介',
            'cover.required' => '请上传图片',
            'regular.required' => '请填写规则与方法'
        ];
    }
}
