<?php

namespace App\Traits;

use Symfony\Component\HttpFoundation\Response as FoundationResponse;
use Response;

trait ApiResponse {
    /**
     * @var int
     */
    protected $status = 1;

    /**
     * @return mixed
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param      $status
     * @param null $httpCode
     *
     * @return $this
     */
    public function setStatusCode($status, $httpCode = null)
    {

        $httpCode = $httpCode ?? $status;

        $this->status = $httpCode;

        return $this;
    }

    /**
     * @param       $data
     * @param array $header
     *
     * @return mixed
     */
    public function respond($data, $header = [])
    {

        return Response::json($data);
    }

    /**
     * @param       $status
     * @param array $data
     * @param null  $code
     *
     * @return mixed
     */
    public function status($status, array $data, $code = null)
    {

        if ($code) {
            $this->setStatusCode($code);
        }
        $status = [
            'msg' => $status,
            'status' => $this->status
        ];

        $data = array_merge($status, $data);

        return $this->respond($data);

    }

    /**
     * @param        $message
     * @param string $status
     *
     * @return mixed
     */
    /*
     * 格式
     * data:
     *  code:422
     *  message:xxx
     *  status:'error'
     */
    public function failed($message, $status = 'error')
    {
        return $this->setStatusCode(0)->message($message, $status);
    }

    /**
     * @param        $message
     * @param string $status
     *
     * @return mixed
     */
    public function message($message, $status = "success")
    {

        return $this->status($status, [
            'message' => $message
        ]);
    }

    /**
     * @param string $message
     *
     * @return mixed
     */
    public function internalError($message = "Internal Error!")
    {

        return $this->failed($message, FoundationResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param string $message
     *
     * @return mixed
     */
    public function created($message = "created")
    {
        return $this->setStatusCode(FoundationResponse::HTTP_CREATED)
            ->message($message);

    }

    /**
     * @param        $data
     * @param string $status
     *
     * @return mixed
     */
    public function success($data, $status = "success")
    {

        return $this->status($status, compact('data'));
    }

    /**
     * @param string $message
     *
     * @return mixed
     */
    public function notFond($message = 'Not Fond!')
    {
        return $this->failed($message, Foundationresponse::HTTP_NOT_FOUND);
    }
}
