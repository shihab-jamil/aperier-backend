<?php

function sendSuccessResponse($result, $message = 'Data retrieved successfully', $code = 200, $token = null)
{
    $response = [
        'code' => $code,
        'message' => $message,
        'data' => $result,
        'success' => true
    ];
    if ($token) {
        $response['token'] = $token;
    }
    return response()->json($response);
}

function sendErrorResponse($error, $errorMessage = [], $code = 404)
{
    $response = [
        'code' => $code,
        'message' => $error,
        'success' => false
    ];
    if (!empty($errorMessage)) {
        $response['Error_Log'] = $errorMessage;
    }
    return response()->json($response);
}
