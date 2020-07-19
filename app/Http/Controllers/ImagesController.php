<?php

namespace App\Http\Controllers;

use App\Handlers\ImageUploadHandler;
use App\Http\Requests\Common\ImageRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

/**
 * Class ImagesController
 *
 * @package \App\Http\Controllers
 */
class ImagesController extends Controller {

    public function store(ImageRequest $request, ImageUploadHandler $uploader)
    {
        $user = Auth::user();
        $size = $request->type == 'avatar' ? 362 : 1024;
        $result = $uploader->save($request->image, Str::plural($request->type), $user->id, $size);
        return $this->success($result['path']);
    }
}
