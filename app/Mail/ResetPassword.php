<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ResetPassword extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $email;
    public $resetToken;

    public function __construct($email, $resetToken)
    {
        $this->email = $email;
        $this->resetToken = $resetToken;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject("Aperier Account Password Reset")
            ->view('Emails.ResetPassword', [
                "email" => $this->email,
                "resetToken" => $this->resetToken,
                "link" => env('APP_URL')."/reset-password" ,
            ]);
    }
}

