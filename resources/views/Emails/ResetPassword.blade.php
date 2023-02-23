<h3>Hello</h3>
<h3>{{ $email }}</h3>
<p>Someone has requested a link to change your password. You can do this through thr link below.</p>
<p><a href="{{ $link.'?token='.$resetToken.'&email='.$email }}">Change my password</a></p>

<p>If you didn't request this, please ignore this email. Your password will stay safe and won't be changed.</p>

<h3>Thank You</h3>
